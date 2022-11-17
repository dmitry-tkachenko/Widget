export const getCurrencyDto = async (url: string) => {
  try {
    const response: Response = await fetch(url);
    return response;
  } catch(error) {
    return error;
  }
}