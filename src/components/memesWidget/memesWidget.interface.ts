interface IMeme {
  box_count: number,
  height: number,
  width: number,
  id: string,
  name: string,
  url: string,
}

interface IMemesData {
  memes: IMeme[]
}

export interface IMemesDto {
  data: IMemesData,
  success: boolean,
}