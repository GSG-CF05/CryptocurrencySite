"use strict";

// Building The COIN BOX CARD:
function buildBoxDom(name, symbol, change, marketCap, price, volume) {
  // Basic Declarations of main sections:
  let mainPage = document.querySelector(".main");
  let boxes = document.createElement("div");

  // 1st Section: TOP20 BOXES
  mainPage.appendChild(boxes);
  boxes.classList.add("boxes");

  let box = document.createElement("div");
  boxes.appendChild(box);
  box.classList.add("box");

  // Head Box -------------------
  let headBox = document.createElement("div");
  box.appendChild(headBox);
  headBox.classList.add("head-box");

  // - Image Big div
  let imgTitle = document.createElement("div");
  headBox.appendChild(imgTitle);
  imgTitle.classList.add("img-title");

  let divImage = document.createElement("div");
  imgTitle.appendChild(divImage);
  divImage.classList.add("div-img");

  let coinImage = document.createElement("img");
  divImage.appendChild(coinImage);
  coinImage.setAttribute("src", "../images/bitcoinImg.jpg");

  // - create the 3 headbox texts
  let coinName = document.createElement("p");
  imgTitle.appendChild(coinName);
  coinName.classList.add("name");
  coinName.textContent = name;

  let coinSymbol = document.createElement("span");
  coinName.appendChild(coinSymbol);
  coinSymbol.textContent = `${symbol}`;

  let percentChange = document.createElement("p");
  percentChange.classList.add("percent-change-coin");
  headBox.appendChild(percentChange);
  percentChange.textContent = change + "%";

  // Content Box -------------------
  let contentBox = document.createElement("div");
  box.appendChild(contentBox);
  contentBox.classList.add("content-box");

  // create the 3 content box elements

  // coin market cap
  let coinDetails1 = document.createElement("div");
  coinDetails1.classList.add("coin-details");
  contentBox.appendChild(coinDetails1);

  let coinDetailsPara1 = document.createElement("p");
  coinDetails1.appendChild(coinDetailsPara1);
  // turing the value into a simple and a readable number
  let numberArray = marketCap;
  let intNumberArray = numberArray[0].split(``);
  let firstNumber = intNumberArray[0];
  let secondNumber = intNumberArray[1];
  let thirdNumber = intNumberArray[2];
  let fourthNumber = intNumberArray[3];

  if (intNumberArray.length == 4) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}K$`;
  } else if (intNumberArray.length == 5) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}k$`;
  } else if (intNumberArray.length == 6) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}k$`;
  } else if (intNumberArray.length == 7) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}M$`;
  } else if (intNumberArray.length == 8) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}M$`;
  } else if (intNumberArray.length == 9) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}M$`;
  } else if (intNumberArray.length <= 10) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}B$`;
  } else if (intNumberArray.length == 11) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}B$`;
  } else if (intNumberArray.length == 12) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}B$`;
  } else if (intNumberArray.length == 13) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}T$`;
  } else if (intNumberArray.length == 14) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}T$`;
  }

  let coinMarketCap = document.createElement("span");
  coinDetails1.appendChild(coinMarketCap);
  coinMarketCap.textContent = "Market Cap";

  // coin price
  let coinDetails2 = document.createElement("div");
  coinDetails2.classList.add("coin-details");
  contentBox.appendChild(coinDetails2);

  let coinDetailsPara2 = document.createElement("p");
  coinDetails2.appendChild(coinDetailsPara2);
  coinDetailsPara2.textContent = `${price}$`;

  let coinPrice = document.createElement("span");
  coinDetails2.appendChild(coinPrice);
  coinPrice.textContent = "Price";

  // coin volume
  let coinDetails3 = document.createElement("div");
  coinDetails3.classList.add("coin-details");
  contentBox.appendChild(coinDetails3);

  let coinDetailsPara3 = document.createElement("p");
  coinDetails3.appendChild(coinDetailsPara3);
  coinDetailsPara3.textContent = `${volume}`;

  // turing the value into a simple and a readable number
  let numberArray2 = volume.split(".");
  let intNumberArray2 = numberArray2[0].split(``);
  let firstNumber2 = intNumberArray2[0];
  let secondNumber2 = intNumberArray2[1];
  let thirdNumber2 = intNumberArray2[2];
  let fourthNumber2 = intNumberArray2[3];

  if (intNumberArray2.length == 4) {
    coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}K$`;
  } else if (intNumberArray2.length == 5) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}k$`;
  } else if (intNumberArray.length == 6) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}k$`;
  } else if (intNumberArray2.length == 7) {
    coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}M$`;
  } else if (intNumberArray.length == 8) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}M$`;
  } else if (intNumberArray2.length == 9) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}M$`;
  } else if (intNumberArray2.length <= 10) {
    coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}B$`;
  } else if (intNumberArray.length == 11) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}B$`;
  } else if (intNumberArray2.length == 12) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}B$`;
  } else if (intNumberArray2.length == 13) {
    coinDetailsPara3.textContent = `${firstNumber}.${secondNumber}T$`;
  } else if (intNumberArray2.length == 14) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}T$`;
  }

  let coinVolume = document.createElement("span");
  coinDetails3.appendChild(coinVolume);
  coinVolume.textContent = "Volume";

  console.log(name);
} // end of build Box Function

fetch("https://api.coincap.io/v2/assets/")
  .then((res) => {
    return res.json();
  })
  .then((apiData) => {
    let coins = apiData.data; // array of objects

    // !TOP 20 MARKET CAP COINS:
    // iteration inside the array which will return all objects
    for (let i = 0; i < 20; i++) {
      console.log(i);
      buildBoxDom(
        coins[i].name,
        coins[i].symbol,
        coins[i].changePercent24Hr.substring(0, 6),
        coins[i].marketCapUsd.split("."),
        coins[i].priceUsd.substring(0, 7),
        coins[i].volumeUsd24Hr
      );

      //market cap
      const searchAnalysis = document.getElementById("search-analysis");
      const lists = document.getElementById("list");

      if (searchAnalysis) {
        searchAnalysis.addEventListener("click", () => {
          lists.classList.toggle("show-analysis-search");
        });
      }
      let headPage = document.createElement("div");
      headPage.classList.add("head-page");
      mainPage.appendChild(headPage);

      let marketSummary = document.createElement("p");
      marketSummary.classList.add("marketSummary");
      mainPage.appendChild(marketSummary);

      let divImg = document.createElement("div");
      divImg.classList.add("div-img");
      mainPage.appendChild(divImg);

      let imgIcon = document.createElement("img");
      imgIcon.classList.add("imgIcon");
      divImg.appendChild(imgIcon);

      let list = document.createElement("ul");
      list.classList.add("list");
      headPage.appendChild(list);

      let titleList = document.createElement("p");
      titleList.classList.add("title-list");
      list.appendChild(titleList);

      let liVolume = document.createElement("li");
      liVolume.classList.add("list_volume");
      list.appendChild(liVolume);

      let volumeImg = document.createElement("img");
      volumeImg.classList.add("volumeImg");
      volume.setAttribute("src", "../images/analysis.svg");
      liVolume.appendChild(volumeImg);

      let volume = document.createElement("span");
      volume.classList.add("volume");
      liVolume.appendChild(volume);

      let listPrice = document.createElement("li");
      listPrice.classList.add("list_price");
      list.appendChild(listPrice);

      let priceImg = document.createElement("img");
      priceImg.classList.add("priceImg");
      priceImg.setAttribute("src", "../images/volume-control.png");
      listPrice.appendChild(priceImg);

      let price = document.createElement("span");
      price.classList.add("price");
      listPrice.appendChild(price);

      let marketCap = document.createElement("li");
      marketCap.classList.add("marketcap");
      list.appendChild(marketCap);

      let marketCapImg = document.createElement("img");
      marketCapImg.classList.add("marketcapImg");
      marketCapImg.setAttribute("src", "../images/volume-control.png");
      marketCap.appendChild(marketCapImg);

      let marketCapSpan = document.createElement("span");
      marketCapSpan.classList.add("marketcapSpan");
      marketCap.appendChild(marketCapSpan);
    } // end of top20 MC for loop block.

    // !TOP Gainers & Losers:

    // declare array outside forloop, and put all change percentChange24 in it.

    let percentArray = [];
    for (let i = 0; i < coins.length; i++) {
      percentArray.push(coins[i].changePercent24Hr);
    }

    let changePercent = document.createElement("div");
    mainPage.appendChild(changePercent);
    changePercent.classList.add("change-percent");

    // !TOP Gainers:

    // TOP Gainers Main & sub Container:
    let topGainers = document.createElement("div");
    topGainers.classList.add("top-gainers");
    changePercent.appendChild(topGainers);

    let gainersCoin = document.createElement("div");
    gainersCoin.classList.add("gainers-coin");
    topGainers.appendChild(gainersCoin);

    // Top Gainers main code:
    // sorting elements in descending order
    percentArray.sort((a, b) => b - a);
    let gainersArray = percentArray.slice(0, 5);

    //  now, we compare the value in the sliced array(top5 gainers)
    //  with the value of api object, using two levels of forloop
    //  (all coins.length foorloop with each 5 loops of gainers forloop)
    //  to gaurantee we match all possibilities, if match happens,
    //  we get the value of symbol key of the same object inside api.

    for (let i = 0; i < coins.length; i++) {
      for (let x = 0; x < gainersArray.length; x++) {
        if (coins[i].changePercent24Hr == gainersArray[x]) {
          // The 2 coin details Fetched API data:
          let coinPara = document.createElement("p");
          gainersCoin.appendChild(coinPara);
          coinPara.textContent = `${coins[i].symbol}`;

          let coinChangePercent = document.createElement("span");
          gainersCoin.appendChild(coinChangePercent);
          coinChangePercent.textContent = `${coins[i].changePercent24Hr}${"%"}`;
        }
      }
    } // end of gainers block.

    // !TOP Losers:

    // TOP Losers Main & sub Container:
    let topLosers = document.createElement("div");
    changePercent.appendChild(topLosers);
    topLosers.classList.add("top-losers");

    let losersCoin = document.createElement("div");
    topLosers.classList.add("losers-coin");
    topLosers.appendChild(losersCoin);

    // Top Losers main code:
    // sorting elements in ascending order
    percentArray.sort((a, b) => a - b);
    let losersArray = percentArray.slice(0, 5);

    for (let i = 0; i < coins.length; i++) {
      for (let x = 0; x < losersArray.length; x++) {
        if (coins[i].changePercent24Hr == losersArray[x]) {
          // The 2 coin details Fetched API data:

          let coinPara = document.createElement("p");
          losersCoin.appendChild(coinPara);
          coinPara.textContent = `${coins[i].symbol}`;

          let coinChangePercent = document.createElement("span");
          losersCoin.appendChild(coinChangePercent);
          coinChangePercent.textContent = `${coins[i].changePercent24Hr}${"%"}`;
        }
      }
    } // end of losers function.
  })
  .catch(Error);
