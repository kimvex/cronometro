
var estado = true;

var minutos = 25,
    minutosOculto = 25;
var breack = 5,
    breackOculto = 5;
var segundos = 60;

var time,
    bre;

var parado = true;

document.getElementById('hora').innerHTML = minutos;

function vamos(){
  document.getElementById('hora').style.background = 'green';
  document.getElementById('porcentual').style.display = 'block';
  document.getElementById('play').style.display = 'inline';
  document.getElementById('replay').style.display = 'none';
  if(estado == true){
    breack == breackOculto;
    if(parado == true){
      segundos = 60;
    }
    parado = true;
    estado = false;
  }else{  
    segundos = 60;
    breack--;
  }
  bre = setInterval(function(){
      if(breack == 1){
        breack--;
        if(segundos > 0){
          segundos--;
        }else{
          if(segundos == 0){
            breack--;
            segundos = 60;
          }
        }
      }else{
        if(segundos > 0){
          segundos--;
        }else{
          if(segundos == 0){
            if(breack > 0){
              breack--;
              segundos = 60;
            }
            if(breack == 0){
              segundos = 0;
              clearInterval(bre);
              estado = false;
              iniciar();
              breack = breackOculto;
            }
          }
        }
      }
    document.getElementById('hora').innerHTML = breack + ":" + segundos;
    },100);
}

function iniciar(){
  document.getElementById('hora').style.background = 'white';
  document.getElementById('porcentual').style.display = 'none';
  if(estado == false){
    minutos = minutosOculto;
    minutos = minutos - 1;
    if(parado == true){
      segundos = 60;
    }
    parado = true;
    estado = true;
  }else{
    minutos = minutos - 1;
    estado = true;
    parado = true;
  }
  time = setInterval(function(){
      if(minutos == 1){
        minutos = 0;
        if(segundos > 0){
          segundos--;
        }else{
          if(segundos == 0){
            minutos--;
            segundos = 60;
          }
        }
      }else{
        if(segundos > 0){
          segundos--;
        }else{
          if(segundos == 0){
            if(minutos > 0){
              minutos--;
              segundos = 0;
            }
            if(minutos == 0){
              segundos = 0;
              clearInterval(time);
              vamos();
              estado = false;
            }else{
              segundos = 60;
            }
          }
        }        
      }

    document.getElementById('hora').innerHTML = minutos + ":" + segundos;
  },100);  
}

//Funciones de tiempo
function subir(e){
  minutos = minutos + 1;
  minutosOculto = minutosOculto + 1;
  e.preventDefault()
  document.getElementById('tiempo-dado').innerHTML = minutos;
  document.getElementById('hora').innerHTML = minutos;
}

function bajar(e){
  minutos = minutos - 1;
  minutosOculto = minutosOculto - 1;
  e.preventDefault()
  document.getElementById('tiempo-dado').innerHTML = minutos;
  document.getElementById('hora').innerHTML = minutos;
}

//Funciones del breack
function subirBreak(e){
  breack = breack + 1;
  breackOculto = breackOculto + 1;
  e.preventDefault();
  document.getElementById('tiempo-dado-break').innerHTML = breack;
}

function bajarBreak(e){
  breack = breack - 1;
  breackOculto = breackOculto - 1;
  e.preventDefault();
  document.getElementById('tiempo-dado-break').innerHTML = breack;
}

//Controles
function stop(e){
  if(parado == true){
    if(estado == true){
      clearInterval(time);
      estado = false;
      parado = false;
    }else{
      parado = false;
      estado = true;
      document.getElementById('play').style.display = 'none';
      document.getElementById('replay').style.display = 'inline';
      clearInterval(bre);
    }
  }
  e.preventDefault();
}

function reset(e){
  estado = true;
  minutos = 25;
  minutosOculto = 25;
  breack = 5;
  breackOculto = 5;
  segundos = 60;
  parado = true;
  clearInterval(bre);
  clearInterval(time);
  document.getElementById('hora').innerHTML = minutos;
  document.getElementById('tiempo-dado').innerHTML = minutos;
  document.getElementById('tiempo-dado-break').innerHTML = breack;
  document.getElementById('hora').style.background = 'white';
  document.getElementById('porcentual').style.display = 'none';
  e.preventDefault();
}

//Tiempo
document.getElementById('subir').addEventListener('click',subir);
document.getElementById('bajar').addEventListener('click',bajar);

//break
document.getElementById('subir-breack').addEventListener('click',subirBreak);
document.getElementById('bajar-break').addEventListener('click',bajarBreak);

//Controles
document.getElementById('play').addEventListener('click',iniciar);
document.getElementById('stop').addEventListener('click',stop);
document.getElementById('replay').addEventListener('click',vamos);
document.getElementById('reset').addEventListener('click',reset);
