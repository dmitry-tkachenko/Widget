import './memesWidget.styles.css';
import { Widget } from '../../class/widget/widget';
import { IMemesDto } from './memesWidget.interface';
import { memesWidgetTemplate } from './memesWidget.template';

export const memesWidget = new Widget<IMemesDto>({
  id: 'memesWidget',
  selector: 'aside',
  classList: ['memesWidget'],
  contentTemplate: memesWidgetTemplate,
});
