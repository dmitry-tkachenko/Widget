import { buttonTemplate } from "../../components/button/button.template";
import { spinerTemplate } from "../../components/spiner/spiner.template";

export class Widget<T> {
  id: string;
  url: string | null = null;
  widget: HTMLElement | null = null;
  contetntTemplate: (data: T) => string;

  constructor (config: any) {
    this.id = config.id;
    this.contetntTemplate = config.contentTemplate
  };

  async init(url: string) {
    this.url = url;
    this.createWidget();
    await this.setContent();
  };

  private createWidget() {
    const widget = document.createElement('article');
    widget.classList.add('widget');
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
      const dto: T = await response.json();

      this.widget.innerHTML = this.contetntTemplate(dto);
    } catch {
      this.errorHandler();
    };
  };

  private async errorHandler() {
    if(!this.widget) throw new Error(`Widget ${this.id} is not defined`);

    const reloadButtonId = `${this.id}Reload`;

    this.widget.innerHTML = buttonTemplate(reloadButtonId, 'Reload');

    document.getElementById(reloadButtonId)?.addEventListener('click', () => {
      this.setContent();
    });
  };
};
