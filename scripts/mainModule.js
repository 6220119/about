(function () {
  'use strict';

  var app = angular.module('MyProfileApp', []);

  function getCopyrightInfo(name) {
    var thisYear = new Date().getFullYear();
    return ['©', thisYear, name + '.','All Rights Reserved.'].join(' ');
  }

  function MainCtrl() {
    var ctrl = this;
//    ctrl.myName = 'Nguyễn Vũ Cương';
    ctrl.myName = '...';
    ctrl.facebookLink = '';
    ctrl.googlePlusLink = '';
    ctrl.navMenus = [
      { name: 'About', tpl: 'scripts/about/template.html'},
      { name: 'Skills', tpl: 'scripts/skills/template.html'},
      { name: 'Projects', tpl: 'scripts/projects/template.html'}
    ];
    ctrl.selectedMenu = ctrl.navMenus[0];
    ctrl.copyrightInfo = getCopyrightInfo(ctrl.myName);
  }
  MainCtrl.$inject = [];
  app.controller('MainCtrl', MainCtrl);
})();

