import angular from 'angular';

import template from './app.html';
import './app.scss';

export const AppModule = angular
    .module('app', [])
    .component('app', { template })
    .run(($log) => $log.debug('Se inicia app'))
    .name;
