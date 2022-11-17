import { currencyWidget } from "../../components/currencyWidget/currencyWidget";
import { defaultWidget } from "../../components/defaultWidget/defaultWidget";
import { weatherWidget } from "../../components/weatherWidget/weatherWidget";
import { IWidgetsUrlData } from "./runWidgetsInSequence.interface";

const widgetRenderFunctions = {
  defaultWidget,
  currencyWidget,
  weatherWidget,
};

export const renderWidget = (widgetsUrlData: IWidgetsUrlData): Promise<void> => {
  return widgetRenderFunctions[widgetsUrlData.title](widgetsUrlData.url);
};
