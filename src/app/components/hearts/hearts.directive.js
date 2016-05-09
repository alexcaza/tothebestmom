import { Heart } from './heart.class';

export function HeartsDirective() {
    'ngInject'

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/hearts/hearts.html',
        link: linkFunc
    }

    return directive;

    function linkFunc() {
        'ngInject'

        const WINDOW_HEIGHT = window.innerHeight;
        const WINDOW_WIDTH = window.innerWidth;
        let container = document.getElementById("hearts-container");

        let hearticles = [];

        for (let n = 0; n < 10; n++) {
            let heart = heartFactory();
            hearticles.push(heart.create());
        }

        animate();

        function animate() {
            for (let h in hearticles){
                if (hearticles[h].yPos < -Math.abs(WINDOW_HEIGHT)) {
                    hearticles[h].reset();
                } else {
                    hearticles[h].move();
                }
            }
            requestAnimationFrame(animate);
        }

        function heartFactory() {
            return new Heart(Math.floor(Math.random() * 10), Math.floor(Math.random() * (WINDOW_WIDTH - 100) + 100), 900, container);
        }

    }
}
