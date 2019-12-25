'use strict';
const sun = document.getElementsByClassName('sun')[0];
const dIv = document.getElementsByTagName('div')[0];


class Planet{

    constructor (claSs, Radius, speed, classSputnik, RadiusShut){
        this.coordinate = 0; // Don't touch
        this.eLement = claSs;
        this.speedElem = speed;
        this.radiusElem = Radius;
        if (classSputnik) {this.sputnik = classSputnik;}
    }

    movePlanet =  () => {
        let setI = setInterval(this.move, this.speed);
        for (let i = 0; i <
        document.getElementsByTagName('img').length; i++) {
            document.getElementsByTagName('img')[i].addEventListener(
                'mouseenter',

                function (event) {
                    clearInterval(setI);
                    this.style.border = '1px solid red';
                    this.style.borderRadius = '50%';
                    dIv.style.display = 'block';
                    event.clientX < screen.width / 2
                        ? dIv.style.left = event.clientX + 150 + 'px'
                        : dIv.style.left = event.clientX - 300 + 'px';
                    event.clientY < screen.height / 2
                        ? dIv.style.top = event.clientY + 'px'
                        : dIv.style.top = event.clientY - 300 + 'px';
                    document.getElementsByTagName(
                        'h1')[0].innerText = this.getAttribute('title');
                    document.getElementsByTagName(
                        'p')[0].innerText = this.getAttribute('data-long');
                });

            document.getElementsByTagName('img')[i].addEventListener(
                'mouseleave',
                function () {
                    setI = setInterval(move, speed);
                    this.style.border = 'none';
                    dIv.style.display = 'none';
                    this.style.borderRadius = 'inherit';
                });
        }
    };

    move = () => {


        this.coordinate += 1;
        this.eLement.style.left = Radius * Math.cos(this.coordinate * Math.PI / 180) +
            ((sun.offsetLeft + sun.offsetWidth) - this.claSs.offsetWidth) + 'px';

        this.claSs.style.top = (Radius) * Math.sin(this.coordinate * Math.PI / 180) +
            ((sun.offsetTop + sun.offsetHeight) - this.claSs.offsetHeight) + 'px';

        if (classSputnik) {
            this.classSputnik.style = classSputnik.offsetTop - this.claSs.offsetWidth;
            this.classSputnik.style.left = RadiusShut *
                Math.cos((this.coordinate * 10) * Math.PI / 360) +
                ((this.claSs.offsetLeft + this.claSs.offsetWidth) -
                    classSputnik.offsetWidth) + 'px';
            classSputnik.style.top = (RadiusShut) *
                Math.sin((this.coordinate * 10) * Math.PI / 360) +
                ((this.claSs.offsetTop + this.claSs.offsetHeight) -
                    classSputnik.offsetHeight) + 'px';
        }
    }
    
}


function SpaceElem (claSs, Radius, speed, classSputnik, RadiusShut) {
    let coordinate = 0; // Don't touch
    this.eLement = claSs;
    this.speedElem = speed;
    this.radiusElem = Radius;
    if (classSputnik) {this.sputnik = classSputnik;}
    this.movePlanet = function () {
        let setI = setInterval(move, speed);
        for (let i = 0; i <
        document.getElementsByTagName('img').length; i++) {
            document.getElementsByTagName('img')[i].addEventListener(
                'mouseenter',

                function (event) {
                    clearInterval(setI);
                    this.style.border = '1px solid red';
                    this.style.borderRadius = '50%';
                    dIv.style.display = 'block';
                    event.clientX < screen.width / 2
                        ? dIv.style.left = event.clientX + 150 + 'px'
                        : dIv.style.left = event.clientX - 300 + 'px';
                    event.clientY < screen.height / 2
                        ? dIv.style.top = event.clientY + 'px'
                        : dIv.style.top = event.clientY - 300 + 'px';
                    document.getElementsByTagName(
                        'h1')[0].innerText = this.getAttribute('title');
                    document.getElementsByTagName(
                        'p')[0].innerText = this.getAttribute('data-long');
                });

            document.getElementsByTagName('img')[i].addEventListener(
                'mouseleave',
                function () {
                    setI = setInterval(move, speed);
                    this.style.border = 'none';
                    dIv.style.display = 'none';
                    this.style.borderRadius = 'inherit';
                });
        }
    };

    function move () {

        coordinate += 1;
        claSs.style.left = Radius * Math.cos(coordinate * Math.PI / 180) +
            ((sun.offsetLeft + sun.offsetWidth) - claSs.offsetWidth) + 'px';

        claSs.style.top = (Radius) * Math.sin(coordinate * Math.PI / 180) +
            ((sun.offsetTop + sun.offsetHeight) - claSs.offsetHeight) + 'px';

        if (classSputnik) {
            classSputnik.style = classSputnik.offsetTop - claSs.offsetWidth;
            classSputnik.style.left = RadiusShut *
                Math.cos((coordinate * 10) * Math.PI / 360) +
                ((claSs.offsetLeft + claSs.offsetWidth) -
                    classSputnik.offsetWidth) + 'px';
            classSputnik.style.top = (RadiusShut) *
                Math.sin((coordinate * 10) * Math.PI / 360) +
                ((claSs.offsetTop + claSs.offsetHeight) -
                    classSputnik.offsetHeight) + 'px';
        }
    }
}

let mercury;
mercury = new SpaceElem(document.getElementsByClassName('mercury')[0], 50, 5);
mercury.movePlanet();

let venera;
venera = new SpaceElem(document.getElementsByClassName('venera')[0], 100, 10);
venera.movePlanet();

let earth;
earth = new SpaceElem(document.getElementsByClassName('earth')[0], 150, 15,
    document.getElementsByClassName('moon')[0], 20);
earth.movePlanet();

let mars;
mars = new SpaceElem(document.getElementsByClassName('mars')[0], 200, 20);
mars.movePlanet();

let jupiter;
jupiter = new SpaceElem(document.getElementsByClassName('jupiter')[0], 250,
    30,);
jupiter.movePlanet();

let saturn;
saturn = new SpaceElem(document.getElementsByClassName('saturn')[0], 300, 40);
saturn.movePlanet();

let uranus;
uranus = new SpaceElem(document.getElementsByClassName('uranus')[0], 350, 50);
uranus.movePlanet();

let pluto;
pluto = new SpaceElem(document.getElementsByClassName('pluto')[0], 400, 60,);
pluto.movePlanet();
