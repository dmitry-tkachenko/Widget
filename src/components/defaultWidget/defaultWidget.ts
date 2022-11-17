import { buttonTemplate } from "../button/button.template"
import { spinerTemplate } from "../spiner/spiner.template"

const getPromise = async (delay: number = 500) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return resolve('Succes')
      } else {
        return reject(new Error('Failed'))
      }
    }, delay)
  })
}

export const defaultContent = async (widget: Element, title: string, delay?: number) => {
  try {
    widget.innerHTML = spinerTemplate();
    const response = await getPromise(delay);

    widget.innerHTML = `<h1>${response} ${title}</h1>`;
  } catch {
    widget.innerHTML = buttonTemplate(title, 'Reload')

    document.getElementById(title)?.addEventListener('click', () => {
      (async () => {
        await defaultContent(widget, title, delay);
      })();
    })
  }
}

export const defaultWidget = async (title: string, delay?: number) => {
  const app = document.getElementById('app');
  if (!app) return;
  const weatherWidgetContainer = document.createElement('article');
  weatherWidgetContainer.classList.add('widget');
  weatherWidgetContainer.id = 'defaultWidget';
  
  app.appendChild(weatherWidgetContainer);

  const widget = document.getElementById('defaultWidget')
  if (!widget) return;

  await defaultContent(widget, title, delay);
}