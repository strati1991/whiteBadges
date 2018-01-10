(function (window, document){
    'use strict';
    window.ballAnimator = function () {
        var _balls = [];

        function _randomBetween(min, max) {
            return (Math.random() * (max - min)) - max;
        }
        function _randomColorStyle(){
            return "rgb(" +
            Math.round(Math.random() * 255) + "," +
            Math.round(Math.random() * 255) + "," +
            Math.round(Math.random() * 255) + ")";
        }

        function _animate() {
            for (var ballIndex in _balls) {
                var ball = _balls[ballIndex];
                ball.speedX += ball.accX;
                ball.speedY += ball.accY;

                ball.posX += ball.speedX;
                ball.posY += ball.speedY;

                ball.style.top = ball.posX + 'px';
                ball.style.left = ball.posY + 'px';
            }
            setTimeout(_animate, 25);
        }

        function _bigger(event) {
            event.target.style.width = '20px';
            event.target.style.height = '20px';
        }

        function _smaller(event) {
            event.target.style.width = '10px';
            event.target.style.height = '10px';
        }

        function init() {
            var _innerHeigh = window.innerHeight;
            var _innerWidth = window.innerWidth;
            for (var i = 0; i< 100;i++) {
                var ball = document.createElement("div");

                ball.classList.add("ball");

                ball.accX = 0;
                ball.accY = 0;

                ball.speedX = _randomBetween(-1, 1);
                ball.speedY = _randomBetween(-1, 1);

                ball.posX = Math.random() * _innerHeigh;
                ball.posY = Math.random() * _innerWidth;

                ball.style.top = ball.posX + 'px';
                ball.style.left = ball.posY + 'px';

                ball.style.background = _randomColorStyle();
                ball.addEventListener("mouseenter" , _bigger);
                ball.addEventListener("mouseleave" , _smaller);

                _balls.push(ball);
                document.body.appendChild(ball);
            }
            setTimeout(_animate, 25);
        }

        return {
            init: init
        };
    };
    window.addEventListener('load', function () {
        window.ballAnimator().init();
    });
})(window, window.document);