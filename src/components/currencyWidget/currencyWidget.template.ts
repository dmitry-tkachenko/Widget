import { ICurrencyDto } from "./api/apiCurrency.interface";

const getColor = (pctChange: number) => {
  return pctChange < 0 ? 'colorGreen' : 'colorRed';
}

export const currencyWidgetTemplate = (data: ICurrencyDto) => {
  return `
    <h2 class="widget__title">
      Currency Widget
    </h2>
    <time>
      ${new Date(data.BTCUSD.create_date).toDateString()}
    </time>
    <article class="container">
      <div class="row">
        <div class="col">
          <table class="currencyWidget__table">
            <tr class="currencyWidget__tr colorDisabled">
              <td class="currencyWidget__td">Symbol</td>
              <td class="currencyWidget__td">Bid</td>
              <td class="currencyWidget__td">Ask</td>
              <td class="currencyWidget__td">Chg%</td>
            </tr>
            
            <tr class="currencyWidget__tr ${getColor(+data.USDUAH.pctChange)}">
              <td class="currencyWidget__td">USD-UAH</td>
              <td class="currencyWidget__td">${data.USDUAH.ask}</td>
              <td class="currencyWidget__td"> ${data.USDUAH.bid}</td>
              <td class="currencyWidget__td"> ${data.USDUAH.pctChange}</td>
            </tr>

            <tr class="currencyWidget__tr ${getColor(+data.EURUAH.pctChange)}">
              <td class="currencyWidget__td">EUR-UAH</td>
              <td class="currencyWidget__td">${data.EURUAH.ask}</td>
              <td class="currencyWidget__td">${data.EURUAH.bid}</td>
              <td class="currencyWidget__td">${data.EURUAH.pctChange}</td>
            </tr>

            <tr class="currencyWidget__tr ${getColor(+data.BTCUSD.pctChange)}">
              <td class="currencyWidget__td">BTC-USD</td>
              <td class="currencyWidget__td">${data.BTCUSD.ask}</td>
              <td class="currencyWidget__td">${data.BTCUSD.bid}</td>
              <td class="currencyWidget__td">${data.BTCUSD.pctChange}</td>
            </tr>
          </table>
        </div>
    </article>
  `;
};
