import { IWeatherDto } from "./weatherWidget.interface";

export const weatherWidgetTemplate = (data: IWeatherDto) => {
  return `
    <div class="card-body p-4">

      <div class="d-flex">
        <h6 class="flex-grow-1">${data.name}</h6>
        <h6>${new Date(data.dt).toLocaleTimeString()}</h6>
      </div>

      <div class="d-flex flex-column text-center mt-5 mb-4">
        <h6 class="display-4 mb-0 font-weight-bold" style="color: var(--primary)"> ${Math.ceil(data.main.temp)}°C </h6>
        <span class="small" style="color: #868B94">${data.weather[0].main}</span>
      </div>

      <div class="d-flex align-items-center">
        <div class="flex-grow-1" style="font-size: 1rem;">
          <div><i class="fas fa-wind fa-fw" style="color: var(--primary)">Wind</i> <span class="ms-1"> ${data.wind.speed} km/h </span></div>
          <div><i class="fas fa-tint fa-fw" style="color: var(--primary)">Humidity</i> <span class="ms-1"> ${data.main.humidity}% </span></div>
        </div>
        <div>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="100px">
        </div>
      </div>

    </div>
  `;
};
