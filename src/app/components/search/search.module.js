import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import SearchComponent from './search.component';
import SearchService from './search.service';

const SearchModule = angular
  .module('app.components.search', [
    uiRouter,
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/search');
    $stateProvider
      .state('search', {
        url: '/search',
        component: 'search',
      });
  })
  .component('search', SearchComponent)
  .service('SearchService', SearchService)
  .name;

export default SearchModule;
