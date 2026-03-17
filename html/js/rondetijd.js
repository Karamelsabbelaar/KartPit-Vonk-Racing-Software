let MM = document.getElementById('minutes'),
SS = document.getElementById('seconds'),
MS = document.getElementById('milliseconds');

Rondes = Rondes + 1;

let Time = MM * 60 * 100 + SS * 100 + MS;

if (Time > Fast){
    Fast = Time
    document.getElementById("SlowTime").innerHTML = MM, ":", SS, ",", MS;
}

let Ronde3 = Ronde2;
let Ronde2 = Ronde1;
let Ronde1 = Time;

let MM3 = Math.round(Ronde3 / 100 / 60);
let SS3 = Math.round(Ronde3 -(MM3 * 60 * 100) / 100);
let MS3 = Math.round(Ronde3 -(SS3 * 100))

let MM2 = Math.round(Ronde2 / 100 / 60);
let SS2 = Math.round(Ronde2 -(MM2 * 60 * 100) / 100);
let MS2 = Math.round(Ronde2 -(SS2 * 100))

let MM1 = Math.round(Ronde1 / 100 / 60);
let SS1 = Math.round(Ronde1 -(MM1 * 60 * 100) / 100);
let MS1 = Math.round(Ronde1 -(SS1 * 100))

document.getElementById("Ronde1").innerHTML = MM1, ":", SS1, ",", MS1;
document.getElementById("Ronde2").innerHTML = MM2, ":", SS2, ",", MS2;
document.getElementById("Ronde3").innerHTML = MM3, ":", SS3, ",", MS3;

if (Time < Slow){
    Slow = Time
    document.getElementById("SlowTime").innerHTML = MM, ":", SS, ",", MS;
}

let Total = Total + Time;

let Gem = Total / Rondes;

let GemMM = Math.round(Gem / 100 / 60);
let GemSS = Math.round(Gem -(GemMM * 60 * 100) / 100);
let GemMS = Math.round(Gem -(GemSS * 100))
