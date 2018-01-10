import angular from 'angular';

import SearchboxModule from './searchbox/searchbox.module';

const ComponentsModule = angular
  .module('app.components', [
    SearchboxModule,
  ])
  .run($log => $log.debug('Se inicia Components'))
  .name;

export default ComponentsModule;
