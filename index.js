function scuberGreetingForFeet(feet){
  let greeting
  if (feet <= 400) {
    greeting = "This one is on me!"
  } else if (feet > 2000 && feet < 2500){
    greeting = 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    greeting = "No can do."
  }
  return greeting;
}

function ternaryCheckCity(city){
  const message = city === "NYC" ? "Ok, sounds good." : "No go."
  return message
}

function switchOnCharmFromTip(tip) {
  let message;
  switch (tip) {
    case "generous":
      message = "Thank you so much."
      break;
    case "not as generous":
      message = "Thank you."
      break;
    default:
      message = "Bye."
  }
  return message
}
