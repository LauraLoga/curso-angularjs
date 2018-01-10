import angular from 'angular';

import ComponentsModule from './components/components.module';

import template from './app.html';
import './app.scss';

const AppModule = angular
  .module('app', [
    ComponentsModule,
  ])
  .component('app', { template })
  .run($log => $log.debug('Se inicia app'))
  .name;

export default AppModule;
