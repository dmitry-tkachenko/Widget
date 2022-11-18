import { defaultWidget } from "../../class/defaultWidget/defaultWidget";
import { currencyWidget } from "../../components/currencyWidget/currencyWidget";
import { weatherWidget } from "../../components/weatherWidget/weatherWidget";
import { IWidgetsUrlData } from "./runWidgetsInSequence.interface";

const widgetRenderFunctions = {
  defaultWidget: defaultWidget.init.bind(defaultWidget),
  currencyWidget: currencyWidget.init.bind(currencyWidget),
  weatherWidget: weatherWidget.init.bind(weatherWidget),
};

export const renderWidget = (widgetsUrlData: IWidgetsUrlData): Promise<void> => {
  const renderFunction = widgetRenderFunctions[widgetsUrlData.title]
  if (!renderFunction) throw new Error(`Dont find ${widgetsUrlData.title} in widgetRenderFunctions`);

  return widgetRenderFunctions[widgetsUrlData.title](widgetsUrlData.url);
};
