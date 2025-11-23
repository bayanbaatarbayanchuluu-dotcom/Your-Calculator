function niilber(){
  let too1=Number(document.getElementById("too1").value);
  let too2=Number(document.getElementById("too2").value);
  let sum = too1+too2;
  document.getElementById("result").textContent="niilber: "+sum;
}
function hasah(){
  let too3=Number(document.getElementById("too1").value);
  let too4=Number(document.getElementById("too2").value);
  let yalgawar=too3-too4;
  document.getElementById("result").textContent="yalgawar: " + yalgawar;
}
function vrjwer(){
  let too5=Number(document.getElementById("too1").value);
  let too6=Number(document.getElementById("too2").value);
  let vrjwer=too5*too6; 
  document.getElementById("result").textContent="vrjwer: " + vrjwer;
}
function huwaah(){
  let too7=Number(document.getElementById("too1").value);
  let too8=Number(document.getElementById("too2").value);
  let huwaah=too7/too8;
  document.getElementById("result").textContent="noogdwor: " + huwaah.toFixed(1);
}
function square(){
  let too9=Number(document.getElementById("too3").value);
  let square=too9*too9;
  document.getElementById("result2").textContent="Square: " + square;
}
function root(){
  let too13=Number(document.getElementById("too3").value);
  let root=Math.sqrt(too13);
  document.getElementById("result2").textContent="root: " + root;
}
function cube(){
  let too10=Number(document.getElementById("too4").value);
  let too11=Number(document.getElementById("too5").value);
  let too12=Number(document.getElementById("too6").value);
  let cube=too10*too11*too12;
  document.getElementById("result3").textContent="cube: " + cube;
}