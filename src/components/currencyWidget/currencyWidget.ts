import './currencyWidget.styles.css';
import { buttonTemplate } from "../button/button.template";
import { spinerTemplate } from "../spiner/spiner.template";
import { getCurrencyDto } from "./api/apiCurrency";
import { ICurrencyDto } from "./api/apiCurrency.interface";
import { currencyWidgetTemplate } from "./currencyWidget.template";

export const getCurrencyContent = async (widget: Element, url: string) => {
  try {
    widget.innerHTML = spinerTemplate();
    const response = await getCurrencyDto(url);
    const currencyDto: ICurrencyDto = await response.json();
    widget.innerHTML = currencyWidgetTemplate(currencyDto);
  } catch {
    widget.innerHTML = buttonTemplate('reloadCurrency', 'Reload')

    document.getElementById('reloadCurrency')?.addEventListener('click', () => {
      (async () => {
        await getCurrencyContent(widget, url);
      })();
    })
  }
}

export const currencyWidget = async (url: string) => {
  const app = document.getElementById('app');
  if (!app) return;

  const weatherWidgetContainer = document.createElement('article');
  weatherWidgetContainer.classList.add('widget');
  weatherWidgetContainer.id = 'currencyWidget';
  
  app.appendChild(weatherWidgetContainer);

  const widget = document.getElementById('currencyWidget')
  if (!widget) return;

  await getCurrencyContent(widget, url);
};

