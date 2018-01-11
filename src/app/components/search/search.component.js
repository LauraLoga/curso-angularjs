import template from './search.html';

const SearchComponent = {
  template,
  controller: class SearchController {
    constructor(SearchService) {
      this.SearchService = SearchService;
    }

    $onInit() {
      this.hackerNews = [];
      this.params = {
        placeholder: 'Escribe tu búsqueda',
        buttonText: 'Buscar',
        value: '',
      };
    }

    handleSearch(event) {
      this.SearchService
        .search(event.newValue)
        .then((res) => {
          this.hackerNews = res.data.hits;
        })
        .catch();
    }
  },
};

export default SearchComponent;
