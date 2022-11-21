interface INewsData {
  author: string,
  content: string,
  date: string,
  id: string,
  imageUrl: string,
  readMoreUrl: string,
  time: string,
  title: string,
  url: string,
};

export interface INewsWidgetDto {
  category: string,
  data: INewsData[],
  success: boolean,
};
