import angular from 'angular';

import SearchboxComponent from './searchbox.component';

import './searchbox.scss';

const SearchboxModule = angular
  .module('app.components.searchbox', [])
  .component('searchbox', SearchboxComponent)
  .run($log => $log.debug('Se inicia searchbox'))
  .name;

export default SearchboxModule;
