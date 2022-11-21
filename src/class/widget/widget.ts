import { buttonTemplate } from "../../components/button/button.template";
import { spinerTemplate } from "../../components/spiner/spiner.template";
import { IWidgetConfig } from "./widget.interface";

export class Widget<T> {
  id: string;
  selector: string;
  classList: string[];
  url: string | null = null;
  widget: HTMLElement | null = null;
  contentTemplate: (data: T) => string | string[];

  constructor (config: IWidgetConfig<T>) {
    this.id = config.id;
    this.contentTemplate = config.contentTemplate
    this.classList = config.classList
    this.selector = config.selector
  };

  async init(url: string) {
    this.url = url;
    this.createWidget();
    await this.setContent();
  };

  private createWidget() {
    const widget = document.createElement(this.selector);
    widget.classList.add(...this.classList);
    widget.id = this.id;
    document.getElementById('app')?.appendChild(widget);

    this.widget = widget;
  };

  private async fetchData(url: string) {
    try {
      const response: Response = await fetch(url);
      return response;
    } catch(error) {
      return error;
    };
  };

  private async setContent() {
    if(!this.widget) throw new Error(`Widget ${this.id} is not defined`);
    if(!this.url) throw new Error(`Url is not defined`);

    try {
      this.widget.innerHTML = spinerTemplate();
      const response = await this.fetchData(this.url);
      const data: T = await response.json();

      this.widget.innerHTML = this.getTemplate(data);
    } catch {
      this.errorHandler();
    };
  };

  private async errorHandler() {
    if(!this.widget) throw new Error(`Widget ${this.id} is not defined`);

    const reloadButtonId = `${this.id}Reload`;

    this.widget.innerHTML = `
      <div class="centerContainer">
        ${buttonTemplate(reloadButtonId, 'Reload')}
      </div>
    `;

    document.getElementById(reloadButtonId)?.addEventListener('click', () => {
      this.setContent();
    });
  };

  private getTemplate(data: T) {
    const template = this.contentTemplate(data);

    if (typeof template === 'string') return template

    return template.join('');
  }
};
