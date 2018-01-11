import angular from 'angular';

import SearchModule from './search/search.module';
import SearchboxModule from './searchbox/searchbox.module';

const ComponentsModule = angular
  .module('app.components', [
    SearchboxModule,
    SearchModule,
  ])
  .name;

export default ComponentsModule;
