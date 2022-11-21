import './weatherWidget.styles.css';
import { Widget } from "../../class/widget/widget";
import { IWeatherDto } from "./weatherWidget.interface";
import { weatherWidgetTemplate } from "./weatherWidget.template";

export const weatherWidget = new Widget<IWeatherDto>({
  id: 'weatherWidget',
  selector: 'article',
  classList: ['weatherWidget'],
  contentTemplate: weatherWidgetTemplate,
});
