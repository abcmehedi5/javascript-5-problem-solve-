// play a mind game.....................

function mindGame(number) {
  if (typeof number === "number") {
    const multiplication = number * 3;
    const sum = multiplication + 10;
    const division = sum / 2;
    const minus = division - 5;
    return minus;
  } else {
    return "Oops, something worng, please Enter Only Number value ";
  }
}

// Finding even or odd..................

function evenOdd(friendName) {
  if (typeof friendName === "string") {
    const friendNameLength = friendName.length;
    if (friendNameLength % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "Oops, something worng, please Enter Only String value! ";
  }
}

// Is Less or Greater than seven.....................

function isLGSeven(number) {
  if (typeof number === "number") {
    const minus = number - 7;
    if (minus < 7) {
      return minus;
    } else {
      return number * 2;
    }
  } else {
    return "Oops, something worng, please Enter Only Number value! ";
  }
}

// Finding Bad data.......................

function findingBadData(arrayData) {
  if (typeof arrayData === "object") {
    let = nagatives = [];
    for (let i = 0; i < arrayData.length; i++) {
      if (arrayData[i] < 0) {
        nagatives.push(arrayData[i]);
      }
    }
    return nagatives.length;
  } else {
    return "Oops, something worng, please Enter Only array value! ";
  }
}

// Convert your gems into diamond.........................

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  if (typeof firstFriend || secondFriend || thirdFriend === "number") {
    const totalDiamond =
      firstFriend * 21 + secondFriend * 32 + thirdFriend * 43;
    if (totalDiamond > 2000) {
      const biog = totalDiamond - 2000;
      return biog;
    } else {
      return totalDiamond;
    }
  } else {
    return "Oops, something worng, please Enter Only number value! ";
  }
}
