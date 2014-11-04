(function () {
  'use strict';

  function AboutCtrl() {
    var ctrl = this;

    ctrl.basicInfo = {
      header: 'Basic Information',
      fields: []
    };

    ctrl.basicInfo.fields.push({ label: 'Gender', value: 'Male' });
    ctrl.basicInfo.fields.push({ label: 'Looking for', value: 'Friends, Dating, A relationship, Networking' });
    ctrl.basicInfo.fields.push({ label: 'Birthday', value: 'October 8' });
    ctrl.basicInfo.fields.push({ label: 'Relationship', value: 'Single' });

    ctrl.langInfo = {
      header: 'Languages',
      fields: []
    };
    ctrl.langInfo.fields.push({ label: 'English', value: 'Professional working proficiency' });
    ctrl.langInfo.fields.push({ label: 'Vietnamese', value: 'Native or bilingual proficiency' });
  }

  AboutCtrl.$inject = [];
  angular.module('MyProfileApp').controller('AboutCtrl', AboutCtrl);
})();