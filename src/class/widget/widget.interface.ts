export interface IWidgetConfig<T> {
  id: string,
  selector: string,
  classList: string[],
  contentTemplate: (data: T) => string | string[],
};
