import { IMemesDto } from "./memesWidget.interface";

export const memesWidgetTemplate = (data: IMemesDto) => {
  return data.data.memes.reverse().map((data) => (`
    <div class="card bg-dark" style="width: 18rem;">
      <img src="${data.url}" class="card-img-top" alt="NEWS">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>

        <a href="${data.url}" class="btn btn-primary" target="_blank">Get Meme</a>
      </div>
    </div>
  `));
};
