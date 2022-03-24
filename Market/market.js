"use strict";

// Building The COIN BOX CARD:
function buildBoxDom(name, symbol, change, marketCap, price, volume) {
    

    // Basic Declarations of main sections:
    let mainPage = document.querySelector('.main');
    let boxes = document.createElement('div');

    // 1st Section: TOP20 BOXES
    mainPage.appendChild(boxes);
    boxes.classList.add('boxes');


    let box = document.createElement('div');
    boxes.appendChild(box);
    box.classList.add('box');

    // Head Box -------------------
    let headBox = document.createElement('div');
    box.appendChild(headBox);
    headBox.classList.add('head-box');

    // - Image Big div
    let imgTitle = document.createElement('div');
    headBox.appendChild(imgTitle);
    imgTitle.classList.add('img-title');

    let divImage = document.createElement('div');
    imgTitle.appendChild(divImage);
    divImage.classList.add('div-img');

    let coinImage = document.createElement('img');
    divImage.appendChild(coinImage);
    coinImage.setAttribute('src', '../images/bitcoinImg.jpg');

    // - create the 3 headbox texts
    let coinName = document.createElement('p');
    imgTitle.appendChild(coinName);
    coinName.classList.add('name');
    coinName.textContent = name;

    let coinSymbol = document.createElement('span');
    coinName.appendChild(coinSymbol);
    coinSymbol.textContent = `${symbol}`;

    let percentChange = document.createElement('p');
    percentChange.classList.add('percent-change-coin');
    headBox.appendChild(percentChange);
    percentChange.textContent = change + '%';

  
    
    // Content Box -------------------
    let contentBox = document.createElement('div');
    box.appendChild(contentBox);
    contentBox.classList.add('content-box');
    

    // create the 3 content box elements

    // coin market cap
    let coinDetails1 = document.createElement('div');
    coinDetails1.classList.add('coin-details');
    contentBox.appendChild(coinDetails1);

    let coinDetailsPara1 = document.createElement('p');
    coinDetails1.appendChild(coinDetailsPara1);
    // turing the value into a simple and a readable number
    let numberArray = marketCap;
    let intNumberArray = numberArray[0].split(``);
    let firstNumber = intNumberArray[0];
    let secondNumber = intNumberArray[1];
    let thirdNumber = intNumberArray[2];
    let fourthNumber = intNumberArray[3];

    if (intNumberArray.length == 4) {
      coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}K$`
    } else if (intNumberArray.length == 5) {
      coinDetailsPara1.textContent = (`${firstNumber}${secondNumber}.${thirdNumber}k$`);
    } else if (intNumberArray.length == 6) {
      coinDetailsPara1.textContent =
        `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}k$`
    } else if (intNumberArray.length == 7) {
      coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}M$`;
    } else if (intNumberArray.length == 8) {
      coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}M$`;
    } else if (intNumberArray.length == 9) {
      coinDetailsPara1.textContent = `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}M$`;
    } else if (intNumberArray.length <= 10) {
      coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}B$`;
    } else if (intNumberArray.length == 11) {
      coinDetailsPara1.textContent =`${firstNumber}${secondNumber}.${thirdNumber}B$`;
    } else if (intNumberArray.length == 12) {
      coinDetailsPara1.textContent =
        `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}B$`;
    } else if (intNumberArray.length == 13) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}T$`;
    } else if (intNumberArray.length == 14) {
    coinDetailsPara1.textContent =`${firstNumber}${secondNumber}.${thirdNumber}T$`;
    }
     

    let coinMarketCap = document.createElement('span');
    coinDetails1.appendChild(coinMarketCap);
    coinMarketCap.textContent = 'Market Cap';

    // coin price
    let coinDetails2 = document.createElement('div');
    coinDetails2.classList.add('coin-details');
    contentBox.appendChild(coinDetails2);
    

    let coinDetailsPara2 = document.createElement('p');
    coinDetails2.appendChild(coinDetailsPara2);
    coinDetailsPara2.textContent = `${price}$`;

    let coinPrice = document.createElement('span');
    coinDetails2.appendChild(coinPrice);
    coinPrice.textContent = 'Price';

    // coin volume
    let coinDetails3 = document.createElement('div');
    coinDetails3.classList.add('coin-details');
    contentBox.appendChild(coinDetails3);

    let coinDetailsPara3 = document.createElement('p');
    coinDetails3.appendChild(coinDetailsPara3);
    coinDetailsPara3.textContent = `${volume}`;

// turing the value into a simple and a readable number
let numberArray2 = volume.split('.');
let intNumberArray2 = numberArray2[0].split(``);
let firstNumber2 = intNumberArray2[0];
let secondNumber2 = intNumberArray2[1];
let thirdNumber2 = intNumberArray2[2];
let fourthNumber2 = intNumberArray2[3];

if (intNumberArray2.length == 4) {
coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}K$`
} else if (intNumberArray2.length == 5) {
coinDetailsPara3.textContent = (`${firstNumber2}${secondNumber2}.${thirdNumber2}k$`);
} else if (intNumberArray.length == 6) {
coinDetailsPara3.textContent =
`${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}k$`
} else if (intNumberArray2.length == 7) {
coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}M$`;
} else if (intNumberArray.length == 8) {
coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}M$`;
} else if (intNumberArray2.length == 9) {
coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}M$`;
} else if (intNumberArray2.length <= 10) {
coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}B$`;
} else if (intNumberArray.length == 11) {
coinDetailsPara3.textContent =`${firstNumber2}${secondNumber2}.${thirdNumber2}B$`;
} else if (intNumberArray2.length == 12) {
coinDetailsPara3.textContent =
`${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}B$`;
} else if (intNumberArray2.length == 13) {
coinDetailsPara3.textContent = `${firstNumber}.${secondNumber}T$`;
} else if (intNumberArray2.length == 14) {
coinDetailsPara3.textContent =`${firstNumber2}${secondNumber2}.${thirdNumber2}T$`;
}


    let coinVolume = document.createElement('span');
    coinDetails3.appendChild(coinVolume);
    coinVolume.textContent = 'Volume';

    console.log(name);
  } // end of build Box Function


fetch('https://api.coincap.io/v2/assets/')
  .then((res) => {
    return res.json();
  })
  .then((apiData) => {
    let coins = apiData.data; // array of objects


// !TOP 20 MARKET CAP COINS:
      // iteration inside the array which will return all objects
    for (let i = 0; i < 20; i++) {
        console.log(i);
        buildBoxDom(coins[i].name, coins[i].symbol, coins[i].changePercent24Hr.substring(0, 6), coins[i].marketCapUsd.split('.'), coins[i].priceUsd.substring(0, 7), coins[i].volumeUsd24Hr );
      } // end of top20 MC for loop block.


})
.catch(Error);


