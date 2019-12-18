'use strict';
const sun=document.getElementsByClassName('sun')[0];
const dIv=document.getElementsByTagName('div')[0];
function CosmoElem(claSs,Radius,speed,classSputnik,RadiusShut){
    const L = 0; // не трогать
    this.eLement=claSs;
    this.speedElem=speed;
    this.radiusElem=Radius;
    if(classSputnik){this.sputnik=classSputnik;}
    this.movePlanet = function (){
        const setI=setInterval(move, speed);
        for(const i=0; i<document.getElementsByTagName('img').length; i++){
            document.getElementsByTagName('img')[i].addEventListener('mouseenter',

                function(){
                    clearInterval(setI);
                    this.style.border="1px solid red";
                    this.style.borderRadius="50%";
                    dIv.style.display="block";

                    document.getElementsByTagName('h1')[0].innerText=this.getAttribute('title');
                    document.getElementsByTagName('p')[0].innerText=this.getAttribute('data-long');
                })

            document.getElementsByTagName('img')[i].addEventListener('mouseleave',
                function(){
                    setI=setInterval(move, speed);
                    this.style.border="none";dIv.style.display="none";this.style.borderRadius="inherit";
                })
        }
    }
    function move(){

        L+=1;
        claSs.style.left=Radius*Math.cos(L*Math.PI/180)+((sun.offsetLeft+sun.offsetWidth)-claSs.offsetWidth)+"px";

        claSs.style.top=(Radius)*Math.sin(L*Math.PI/180)+((sun.offsetTop+sun.offsetHeight)-claSs.offsetHeight)+"px";


        if(classSputnik){
            classSputnik.style=classSputnik.offsetTop-claSs.offsetWidth;
            classSputnik.style.left=RadiusShut*Math.cos((L*10)*Math.PI/360)+((claSs.offsetLeft+claSs.offsetWidth)-classSputnik.offsetWidth)+"px";
            classSputnik.style.top=(RadiusShut)*Math.sin((L*10)*Math.PI/360)+((claSs.offsetTop+claSs.offsetHeight)-classSputnik.offsetHeight)+"px";}
    }
}

let mercury;
mercury=new CosmoElem(document.getElementsByClassName('mercury')[0],50,5);
mercury.movePlanet();

let Venera;
Venera=new CosmoElem(document.getElementsByClassName('Venera')[0],100,10);
Venera.movePlanet();

let earth;
earth=new CosmoElem(document.getElementsByClassName('earth')[0],150,15,document.getElementsByClassName('moon')[0],20);
earth.movePlanet();

let mars;
mars=new CosmoElem(document.getElementsByClassName('mars')[0],200,20);
mars.movePlanet();

let jupiter;
jupiter=new CosmoElem(document.getElementsByClassName('jupiter')[0],250,30,);
jupiter.movePlanet();

let saturn;
saturn=new CosmoElem(document.getElementsByClassName('saturn')[0],300,40);
saturn.movePlanet();

let uranus;
uranus=new CosmoElem(document.getElementsByClassName('uranus')[0],350,50);
uranus.movePlanet();

let pluto;
pluto=new CosmoElem(document.getElementsByClassName('pluto')[0],400,60,);
pluto.movePlanet();
