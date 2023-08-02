import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./FakeData";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TvShowApi {
  static async fetchPopulars() {
    // const response = await axios.get(`${BASE_URL}/tv/popular?${API_KEY_PARAM}`)
    // return response.data.results;
    return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    // const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations?${API_KEY_PARAM}`)
    // return response.data.results;
    return FAKE_RECOMMENDATIONS;
  }

  static async search(title) {
    const response = await axios.get(`${BASE_URL}/search/tv?${API_KEY_PARAM}&query=${title}`)
    return response.data.results;
  }
}