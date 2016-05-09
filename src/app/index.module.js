
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CelebrateController } from './mother/celebrate.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { HeartsDirective } from '../app/components/hearts/hearts.directive';

angular.module('tothebestMom', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngRoute', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('CelebrateController', CelebrateController)
  .directive('navbar', NavbarDirective)
  .directive('hearts', HeartsDirective);
