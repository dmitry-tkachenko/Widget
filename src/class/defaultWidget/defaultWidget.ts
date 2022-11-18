import { buttonTemplate } from "../../components/button/button.template";
import { spinerTemplate } from "../../components/spiner/spiner.template";

class DefaultWidget<T> {
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

  private createWidget = function() {
    const widget = document.createElement('article');
    widget.classList.add('widget');
    widget.id = this.id;
    document.getElementById('app')?.appendChild(widget);

    this.widget = widget;
  };

  private async fetchData(url: string) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          return resolve('Succes')
        } else {
          return reject(new Error('Failed'))
        }
      }, 500)
    })
  };

  private async setContent() {
    if(!this.widget) throw new Error(`Widget ${this.id} is not defined`);
    if(!this.url) throw new Error(`Url is not defined`);

    try {
      this.widget.innerHTML = spinerTemplate();
      const dto = await this.fetchData(this.url);
      this.widget.innerHTML = `<h1>${dto}</h1>`;
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

export const defaultWidget = new DefaultWidget({
  id: 'defaultWidget1',
  contentTemplate: '',
});

