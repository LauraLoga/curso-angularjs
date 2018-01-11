import angular from 'angular';

import SearchboxComponent from './searchbox.component';

import './searchbox.scss';

const SearchboxModule = angular
  .module('app.components.searchbox', [])
  .component('searchbox', SearchboxComponent)
  .name;

export default SearchboxModule;
