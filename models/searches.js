const axios = require("axios");

class Searches {
  history = ["Madrid", "Barcelona"];

  constructor() {}

  get ParamsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }

  async searchCity(place = "") {
    try {
      console.log("entro");
      const params = this.ParamsMapBox;
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params,
      });
      const response = await instance.get();
      console.log("hola", response.data);
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Searches;
