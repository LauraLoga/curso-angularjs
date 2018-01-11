export default class SearchService {
  constructor($http) {
    this.$http = $http;
    this.API_URL = 'http://hn.algolia.com/api/v1';
  }

  search(query) {
    return this.$http.get(`${this.API_URL}/search?query=${query}`);
  }
}
