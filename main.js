let input = document.querySelector("#in");
let output = document.querySelector("#out");
let switcher = document.querySelector("#switch");
let cToF = (input.value*1.8)+32;
let fToC = (input.value-32)/1.8;

window.addEventListener('load', f => {
  input.value = "";
  output.value = "";
});

function decimais (x){
  return Number.parseFloat(x).toFixed(1);
}

switcher.addEventListener('click', e=> {
  let inL = document.querySelector("#inLabel");
  let outL = document.querySelector("#outLabel");
  if (input.dataset.value == "celsius"){
    input.dataset.value = "fahrenheit";
    inL.innerHTML = "Fahrenheit";
    input.value = "";
    output.value = "";
    outL.innerHTML = "Celsius";
    //switcher.style = "background: linear-gradient(to left, #ff605b, #96fbff);";
  } else {
    input.value = "";
    output.value = "";
    input.dataset.value = "celsius";
    inL.innerHTML = "Celsius";
    outL.innerHTML = "Fahrenheit";
    //switcher.style = "background: linear-gradient(to right, #ff605b, #96fbff);";
  }
})

input.addEventListener('input', e =>{
  //Fahrenheit to celsius formula
  //let cToF = Math.round((input.value*1.8)+32);
  let cToF = decimais((input.value*1.8)+32);
  //celsius to Fahrenheit formula
  //      let fToC = Math.round((input.value-32)/1.8);
  let fToC = decimais((input.value-32)/1.8);


  if (input.dataset.value == "celsius" && input.value != "" && input.value != "-"){
    output.value = cToF;
  } else if (input.dataset.value == "fahrenheit" && input.value != "" && input.value != "-"){
    output.value = fToC;
  } else if (input.value == "-"){
    output.value = "";
  } else{
    input.value = "";
    output.value = "";
  }
});

output.addEventListener('input', e=>{
  //Fahrenheit to celsius formula
  let cToF = decimais((output.value*1.8)+32);
  //celsius to Fahrenheit formula
  let fToC = decimais((output.value-32)/1.8);

  //Fahrenheit to celsius
  if (output.dataset.value == "fahrenheit" && output.value != "" && output.value != "-"){
    input.value = fToC;
  } else if (output.dataset.value == "celsius" && output.value != "" && output.value != "-"){
    input.value = cToF;
  } else if (output.value == "-"){
    input.value = "";
  } else{
    input.value = "";
    output.value = "";
  }
});
