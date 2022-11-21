import { IWidgetsUrlData } from "./utils/runWidgetsInSequence/runWidgetsInSequence.interface";

export const widgetsUrlData: IWidgetsUrlData[] = [
  {
    title: 'weatherWidget',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Cherkasy&units=metric&appid=f8abe57730e73adeaf76486b28bcee9f',
  },
  {
    title: 'memesWidget',
    url: 'https://api.imgflip.com/get_memes'
  },
  {
    title: 'newsWidget',
    url: 'https://inshorts.deta.dev/news?category=science',
  },
  {
    title: 'currencyWidget',
    url: 'https://economia.awesomeapi.com.br/json/last/USD-UAH,EUR-UAH,BTC-USD',
  },
];