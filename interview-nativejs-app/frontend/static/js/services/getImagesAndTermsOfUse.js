const baseUrl = "http://167.71.69.158";

export const getUrl = (path) => `${baseUrl}${path}`

export const imagesAndTermOfUseService = {
  async getImagesAndTermOfuse() {
    return fetch(getUrl("/static/test.json")).then((response) => {
      return response.json();
    });
  },
};