import template from './search.html';

const SearchComponent = {
  template,
  controller: class SearchController {
    constructor($state, SearchService) {
      this.$state = $state;
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

    goToWelcome() {
      this.$state.go('app', { name: 'rodrigo' });
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
