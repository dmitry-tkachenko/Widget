import { ICurrencyDto } from "./api/apiCurrency.interface";

const getTime = (date: string) => {
  return new Date(date).toLocaleTimeString()
}

export const currencyWidgetTemplate = (data: ICurrencyDto) => {
  return `

      <h2 class="widget__title">
        Currency Widget
      </h2>
      <time>
        ${new Date(data.BTCUSD.create_date).toDateString()}
      </time>
      <div class="container">
        <div class="row">
          <div class="col">
            <table>
              <tr>
                <td>USD-UAH</td>
              </tr>
              <tr>
                <td>${getTime(data.USDUAH.create_date)}</td>
              </tr>
              <tr>
                <td>
                  ASK
                </td>
                <td>
                ${data.USDUAH.ask}
                </td>
              </tr>
              <tr>
                <td>
                  BID
                </td>
                <td>
                ${data.USDUAH.bid}
                </td>
              </tr>
            </table>
          </div>
          <div class="col">
            <table>
              <tr>
                <td>EUR-UAH</td>
              </tr>
              <tr>
              <td>${getTime(data.EURUAH.create_date)}</td>
              </tr>
              <tr>
                <td>
                  ASK
                </td>
                <td>
                ${data.EURUAH.ask}
                </td>
              </tr>
              <tr>
                <td>
                  BID
                </td>
                <td>
                ${data.EURUAH.bid}
                </td>
              </tr>
            </table>
          </div>
          <div class="col">
            <table>
              <tr>
                <td>BTC-USD</td>
              </tr>
              <tr>
                <td>${getTime(data.BTCUSD.create_date)}</td>
              </tr>
              <tr>
                <td>
                  ASK
                </td>
                <td>
                ${data.BTCUSD.ask}
                </td>
              </tr>
              <tr>
                <td>
                  BID
                </td>
                <td>
                ${data.BTCUSD.bid}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

  `;
};
