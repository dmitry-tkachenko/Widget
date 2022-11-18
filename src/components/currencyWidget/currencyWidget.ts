import './currencyWidget.styles.css';
import { currencyWidgetTemplate } from "./currencyWidget.template";
import { Widget } from '../../class/widget/widget';
import { ICurrencyDto } from './currencyWidget.interface';

export const currencyWidget = new Widget<ICurrencyDto>({
  id: 'currencyWidget',
  contentTemplate: currencyWidgetTemplate,
});

