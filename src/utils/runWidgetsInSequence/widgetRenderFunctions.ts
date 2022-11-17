import { currencyWidget } from "../../components/currencyWidget/currencyWidget";
import { defaultWidget } from "../../components/defaultWidget/defaultWidget";
import { IWidgetsUrlData } from "./runWidgetsInSequence.interface";

const widgetRenderFunctions = {
  defaultWidget,
  currencyWidget,
};

export const renderWidget = (widgetsUrlData: IWidgetsUrlData): Promise<void> => {
  return widgetRenderFunctions[widgetsUrlData.title](widgetsUrlData.url);
};
