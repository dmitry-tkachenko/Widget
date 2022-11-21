import { defaultWidget } from "../../class/defaultWidget/defaultWidget";
import { currencyWidget } from "../../components/currencyWidget/currencyWidget";
import { newsWidget } from "../../components/newsWidget/newsWidget";
import { weatherWidget } from "../../components/weatherWidget/weatherWidget";
import { IWidgetsUrlData } from "./runWidgetsInSequence.interface";

const widgetRenderFunctions = {
  defaultWidget: defaultWidget.init.bind(defaultWidget),
  currencyWidget: currencyWidget.init.bind(currencyWidget),
  weatherWidget: weatherWidget.init.bind(weatherWidget),
  newsWidget: newsWidget.init.bind(newsWidget),
};

export const renderWidget = (widgetsUrlData: IWidgetsUrlData): Promise<void> => {
  const renderFunction = widgetRenderFunctions[widgetsUrlData.title]
  if (!renderFunction) throw new Error(`Dont find ${widgetsUrlData.title} in widgetRenderFunctions`);

  return renderFunction(widgetsUrlData.url);
};
