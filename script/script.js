function init(){

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var mainArr = [];
    var numberBalls = 50;

    // GENERATE BALLS
    for(let i = 0; i < numberBalls; i++){
        let ballName = 'ball' + i;
        let ball = {
            x: (Math.floor(Math.random() * canvas.width + 1)),
            y: (Math.floor(Math.random() * canvas.height + 1))
        }
        mainArr.push(ball);
    }

    // DRAW BALLS
    for(let i = 0; i < mainArr.length; i++){
        ctx.beginPath();
        ctx.arc(mainArr[i].x,mainArr[i].y,5,0,2*Math.PI);
        ctx.stroke();
    }

}
