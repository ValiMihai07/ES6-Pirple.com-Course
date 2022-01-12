const timeAdder = (value1, label1, value2, label2) => {
  let variableLabel1;
  let variableLabel2;

  switch (label1) {
    case "second":
      if (value1 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 0;
      }
      break;
    case "seconds":
      if (value1 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 0;
      }
      break;
    case "minute":
      if (value1 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 1;
      }
      break;
    case "minutes":
      if (value1 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 1;
      }
      break;
    case "hour":
      if (value1 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 2;
      }
      break;
    case "hours":
      if (value1 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 2;
      }
      break;
    case "day":
      if (value1 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 3;
      }
      break;
    case "days":
      if (value1 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel1 = 3;
      }
      break;
  }
  switch (label2) {
    case "second":
      if (value2 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 0;
      }
      break;
    case "seconds":
      if (value2 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 0;
      }
      break;
    case "minute":
      if (value2 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 1;
      }
      break;
    case "minutes":
      if (value2 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 1;
      }
      break;
    case "hour":
      if (value2 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 2;
      }
      break;
    case "hours":
      if (value2 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 2;
      }
      break;
    case "day":
      if (value2 !== 1) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 3;
      }
      break;
    case "days":
      if (value2 === 0) {
        console.log("Invalid number");
        return;
      } else {
        variableLabel2 = 3;
      }
      break;
  }
  if (label1 === label2) {
    console.log(value1 + value2 + " " + label2);
  } else if (variableLabel1 > variableLabel2) {
    console.log(value1 + " " + label1);
  } else if (variableLabel2 > variableLabel1) {
    console.log(value2 + " " + label2);
  }
};

timeAdder(5, "hours", 10, "second");
