import angular from 'angular';

import SearchComponent from './search.component';
import SearchService from './search.service';

const SearchModule = angular
  .module('app.components.search', [])
  .component('search', SearchComponent)
  .service('SearchService', SearchService)
  .name;

export default SearchModule;
