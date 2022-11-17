import { IWidgetsUrlData } from "./utils/runWidgetsInSequence/runWidgetsInSequence.interface";

export const widgetsUrlData: IWidgetsUrlData[] = [
  {
    title: 'defaultWidget',
    url: 'widget',
  },
  {
    title: 'currencyWidget',
    url: 'https://economia.awesomeapi.com.br/json/last/USD-UAH,EUR-UAH,BTC-USD',
  },
  {
    title: 'weatherWidget',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Cherkasy&units=metric&appid=f8abe57730e73adeaf76486b28bcee9f',
  },
];