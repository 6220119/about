(function () {
  'use strict';

  function SkillsCtrl() {
    var ctrl = this;

    ctrl.topSkills = [
      { name: 'AngularJS', logo: 'styles/imgs/skills/angularjs.png'},
      { name: 'HTML5', logo: 'styles/imgs/skills/HTML5_Logo_512.png'},
      { name: 'CSS3', logo: 'styles/imgs/skills/css3.png'},
      { name: 'Javascript', logo: 'styles/imgs/skills/js.png'},
      { name: 'Java', logo: 'styles/imgs/skills/java.png'}
    ];

    ctrl.otherSkills = [
      { name: 'Eclipse RCP', logo: 'styles/imgs/skills/eclipseRcp.png'}

    ];
  }

  SkillsCtrl.$inject = [];
  angular.module('MyProfileApp').controller('SkillsCtrl', SkillsCtrl);
})();