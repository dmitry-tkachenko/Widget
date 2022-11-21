import './newsWidget.styles.css';
import { Widget } from '../../class/widget/widget';
import { INewsWidgetDto } from './newsWidget.interface';
import { newsWidgetTemplate } from './newsWidget.template';

export const newsWidget = new Widget<INewsWidgetDto>({
  id: 'newsWidget',
  selector: 'aside',
  classList: ['newsWidget'],
  contentTemplate: newsWidgetTemplate,
});
