import { buttonTemplate } from "../button/button.template"
import { spinerTemplate } from "../spiner/spiner.template"
import { IWeatherDto } from "./weatherWidget.interface";
import { weatherWidgetTemplate } from "./weatherWidget.template";

const loadWeather = async (url: string) => {
  try {
    const response: Response = await fetch(url);
    return response;
  } catch(error) {
    return error;
  };
};

export const weatherContent = async (widget: Element, url: string) => {
  try {
    widget.innerHTML = spinerTemplate();
    const response = await loadWeather(url);
    const weatherDto: IWeatherDto = await response.json();

    widget.innerHTML = weatherWidgetTemplate(weatherDto);
  } catch {
    widget.innerHTML = buttonTemplate('reloadWeather', 'Reload')

    document.getElementById('reloadWeather')?.addEventListener('click', () => {
      (async () => {
        await weatherContent(widget, url);
      })();
    })
  }
}

export const weatherWidget = async (url: string) => {
  const app = document.getElementById('app');
  if (!app) return;
  const weatherWidgetContainer = document.createElement('section');
  weatherWidgetContainer.classList.add('widget');
  weatherWidgetContainer.id = 'weatherWidget';
  
  app.appendChild(weatherWidgetContainer);

  const widget = document.getElementById('weatherWidget')
  if (!widget) return;

  weatherContent(widget, url);
}