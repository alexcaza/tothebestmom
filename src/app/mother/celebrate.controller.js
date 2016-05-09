export class CelebrateController {
    constructor($routeParams, $location) {
        'ngInject'

        this.shareUrl = $location.absUrl();

        if (angular.isString($routeParams.name))
            this.motherName = $routeParams.name.split('+').map(
                word => word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        else
            $location.path('/');
    }
}
