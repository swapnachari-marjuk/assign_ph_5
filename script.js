// eventlistener for increasing heart count
const heartBtns = document.getElementsByClassName("btn-square");

for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-num");
    const convertedHeartCount = parseInt(heartCount.innerText);
    const newHeart = convertedHeartCount + 1;
    heartCount.innerText = newHeart;
  });
}

// eventlistener for call button

// reusable function for call buttons
function callBtnHandler(id, tile, phnNumber) {
  document.getElementById(id).addEventListener("click", function () {
    const coinNum = document.getElementById("coin-num");
    const convertedCoinNum = parseInt(coinNum.innerText);
    if (convertedCoinNum <= 0) {
      alert("You haven't adequate balance for this call");
      return;
    }
    const newCoinNum = convertedCoinNum - 20;
    coinNum.innerText = newCoinNum;

    alert("Calling " + tile + " via this number: " + phnNumber);
  });
}

// national emergency call
const natEmerTitle = document.getElementById(
  "national-emergency-title"
).innerText;
const natEmerPhone = document.getElementById(
  "national-emergency-phn-number"
).innerText;
callBtnHandler("call-national-emergency", natEmerTitle, natEmerPhone);

// bangladesh police call
const policeTitle = document.getElementById(
  "bangladesh-police-title"
).innerText;
const policePhone = document.getElementById(
  "bangladesh-police-phn-number"
).innerText;
callBtnHandler("call-bangladesh-police", policeTitle, policePhone);

// fire sevice call
const fireServiceTitle = document.getElementById(
  "fire-service-title"
).innerText;
const fireServicePhone = document.getElementById(
  "fire-service-phn-number"
).innerText;
callBtnHandler("call-fire-service", fireServiceTitle, fireServicePhone);

// railway call 
const railWayTitle = document.getElementById(
  "rail-way-title"
).innerText;
const railwayPhone = document.getElementById(
  "rail-way-phn-number"
).innerText;
callBtnHandler("call-rail-way", railWayTitle, railwayPhone);

// dudok call 
const dudokTitle = document.getElementById(
  "dudok-title"
).innerText;
const duodkPhone = document.getElementById(
  "dudok-phn-number"
).innerText;
callBtnHandler("call-dudok", dudokTitle, duodkPhone);

// brac call 
const bracTitle = document.getElementById(
  "brac-title"
).innerText;
const bracPhone = document.getElementById(
  "brac-phn-number"
).innerText;
callBtnHandler("call-brac", bracTitle, bracPhone);

// ambulance call
const ambulanceTitle = document.getElementById(
  "ambulance-title"
).innerText;
const ambulancePhone = document.getElementById(
  "ambulance-phn-number"
).innerText;
callBtnHandler("call-ambulance", ambulanceTitle, ambulancePhone);

// ambulance call
const ambulanceTitle2 = document.getElementById(
  "ambulance-title-2"
).innerText;
const ambulancePhone2 = document.getElementById(
  "ambulance-phn-number-2"
).innerText;
callBtnHandler("call-ambulance-2", ambulanceTitle2, ambulancePhone2);

// ambulance call
const ambulanceTitle3 = document.getElementById(
  "ambulance-title-3"
).innerText;
const ambulancePhone3 = document.getElementById(
  "ambulance-phn-number-3"
).innerText;
callBtnHandler("call-ambulance-3", ambulanceTitle3, ambulancePhone3);