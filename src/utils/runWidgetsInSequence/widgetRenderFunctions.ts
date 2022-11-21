import { currencyWidget } from "../../components/currencyWidget/currencyWidget";
import { memesWidget } from "../../components/memesWidget/memesWidget";
import { newsWidget } from "../../components/newsWidget/newsWidget";
import { weatherWidget } from "../../components/weatherWidget/weatherWidget";
import { IWidgetsUrlData } from "./runWidgetsInSequence.interface";

const widgetRenderFunctions = {
  currencyWidget: currencyWidget.init.bind(currencyWidget),
  weatherWidget: weatherWidget.init.bind(weatherWidget),
  newsWidget: newsWidget.init.bind(newsWidget),
  memesWidget: memesWidget.init.bind(memesWidget),
};

export const renderWidget = (widgetsUrlData: IWidgetsUrlData): Promise<void> => {
  const renderFunction = widgetRenderFunctions[widgetsUrlData.title]
  if (!renderFunction) throw new Error(`Dont find ${widgetsUrlData.title} in widgetRenderFunctions`);

  return renderFunction(widgetsUrlData.url);
};
