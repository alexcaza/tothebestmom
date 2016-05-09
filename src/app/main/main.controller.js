export class MainController {
  constructor ($location) {
      'ngInject'

      this.location = $location;
  }

  generateLove(motherName) {
      if (angular.isDefined(motherName)) {
          let nameArray = motherName.split(' ');
          this.location.path('/m/'+nameArray.join('+'));
      } else {
          return;
      }
  }
}
