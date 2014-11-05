(function () {
  'use strict';

  var app = angular.module('MyProfileApp', ['ngAnimate']);

  function getCopyrightInfo(name) {
    var thisYear = new Date().getFullYear();
    return ['©', thisYear, name + '.','All Rights Reserved.'].join(' ');
  }

  function MainCtrl() {
    var ctrl = this;
    ctrl.myName = 'Nguyễn Vũ Cương';
//    ctrl.myName = '...';
    ctrl.facebookLink = 'https://www.facebook.com/nvcuong.infotech';
    ctrl.googlePlusLink = 'https://plus.google.com/u/1/+V%C5%A9C%C6%B0%C6%A1ngNguy%E1%BB%85n0/about';
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

