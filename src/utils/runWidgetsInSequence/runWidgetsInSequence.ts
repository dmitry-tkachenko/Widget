import { IWidgetsUrlData } from "./runWidgetsInSequence.interface";
import { renderWidget } from "./widgetRenderFunctions";

export const runWidgetsInSequence = (widgetsUrlData: IWidgetsUrlData[]): void => {
  widgetsUrlData.reduce(
    (accumulator, currentValue) => (
      accumulator.then(
        () => renderWidget(currentValue)
      )
    ),
    Promise.resolve()
  );
};
