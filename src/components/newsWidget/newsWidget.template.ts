import { INewsWidgetDto } from "./newsWidget.interface";

export const newsWidgetTemplate = (data: INewsWidgetDto) => {
  return data.data.map((data) => (`
    <div class="card bg-dark" style="width: 18rem;">
      <img src="${data.imageUrl}" class="card-img-top" alt="NEWS">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <div class="fs-6 fw-bold text-end">${data.date}</div>
        <p class="card-text">${data.content}</p>
        <div class="text-end">${data.author}</div>
        <a href="${data.readMoreUrl}" class="btn btn-primary" target="_blank">Read More</a>
      </div>
    </div>
  `))
};
