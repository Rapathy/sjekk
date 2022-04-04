/**
  Step 1:
   - Forrige knappen er skjult (hidden attr er aktive)
   - Kun steg 1 i nav er grønn (har klassen active)
   - Skjema for navn vises
  Step 2:
   - Forrige knappen er synlig (hidden attr er borte)
   - Kun steg 2 i nav er grønn (har klassen active)
   - Skjema for epost vises
  Step 3:
   - Forrige knappen er synlig
   - Kun steg 3 i nav er grønn (har klassen active)
   - Skjema for alder vises
   - Neste knappen er skjult (hidden attr er aktive)
   - Send knappen er synlig (hidden attr er borte)
  Step 4:
   - Skjema er skjult
   - Kun teksten "Takk ditt skjema er sendt" vises og lages med JavaScript
  Next:
   - Skal endre hvilket step vi er på (hvilket steg som er grønt)
   - Skal trigge validering av skjema
     - Skal vise feilmelding "Feil" hvis validering feiler
     - Skal fjerne feilmelding "Feil" hvis validering passerer etter at vi har hatt en feil (legge til hidden attr)
          - Validering for navn er mellomrom og mer enn 10 bokstaver
          - Validering for e-post er at den må ha en @
          - Validering for alder er over 20
   - Skal lagre det vi skrev i skjema
  Prev:
   - Skal endre hvilket steg vi er på
   - Skal fortsatt vise det vi har skrevet i input
 */

// #### START HER ####



const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputAge = document.querySelector("#age");

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const inputs = document.querySelectorAll("input");
const indicators = document.querySelectorAll('.step');

const validateName = () => {
 
  if (inputName.value.length > 10 && inputName.value.includes(" ")) {
    
    indicators[1].classList.add("active")
    indicators[0].classList.remove("active")
    console.log("Nice, that's some nice text");
    document.querySelector(".error").hidden = true;
    document.getElementById("step_one").hidden = true;
    document.getElementById("step_two").hidden = false;
    document.getElementById("prev").hidden = false;
    
  } else {
    
    document.querySelector(".error").hidden = false;
    console.log("Error message")
    // document.getElementById("step_one").hidden = false;
    
  }
  

  document.querySelector('#name').value = "";

  
}

const validateEmail = () => {
  const specialLetters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

  if (email.value.match(specialLetters)){
    console.log("Success")
    document.querySelector(".error").hidden = true;
    indicators[2].classList.add("active")
    indicators[1].classList.remove("active")
    
    document.getElementById("step_one").hidden = true;
    document.getElementById("step_two").hidden = true;
    document.getElementById("step_three").hidden = false;
  } else {
    console.log("fail")
    document.querySelector(".error").hidden = false;
    
   
  }
}

const validateAge = () => {
if (age.value >= 18) {
    console.log("success")
    // email.style.border = "solid 2px #d3d3d3"
  } else {
    console.log("fail")
    document.querySelector(".error").hidden = false;
    // email.style.border = "solid 1px red"
  }
}


nextBtn.addEventListener("click", (e) => {
  
  //Temp, skal bare sjekke de forskjellige stepsa
  //document.getElementById("step_two").hidden = false;
  //document.getElementById("step_three").hidden = false;
  
  //Om alt er riktig --> Gå videre, om noe er feil --> Skriv ut errorMessageName(); If statement?
  validateEmail();
  validateName();
  validateAge();
});

prevBtn.addEventListener("click", (e) => { 
  
});



