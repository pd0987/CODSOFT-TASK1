(_ => {
    let currentTotal = 0;
    let currentOperation;
    const displayDiv = document.querySelector(".display");
    const buttonFunctions = {
      num: digit =>
        /^(0|Infinity)$/.test(displayDiv.innerText)
          ? (displayDiv.innerText = digit)
          : (displayDiv.innerText += digit),
      pi: () => (displayDiv.innerText = `${Math.PI}`),
      ".": () =>
        displayDiv.innerText.includes(".")
          ? void 0
          : (displayDiv.innerText += "."),
      CE: () => (displayDiv.innerText = ""),
      Clr: () => {
        currentTotal = 0;
        displayDiv.innerText = "";
        currentOperation = null;
      },
      "+": tot => {
        currentTotal = tot;
        displayDiv.innerText = "";
        currentOperation = val => (currentTotal += val);
      },
      "-": tot => {
        currentTotal = tot;
        displayDiv.innerText = "";
        currentOperation = val => (currentTotal -= val);
      },
      x: tot => {
        currentTotal = tot;
        displayDiv.innerText = "";
        currentOperation = val => (currentTotal *= val);
      },
      "/": tot => {
        currentTotal = tot;
        displayDiv.innerText = "";
        currentOperation = val => (currentTotal /= val);
      },
      "=": tot => {
        const currentValue = tot;
        if (!isNaN(currentValue) && currentOperation) {
          currentOperation(currentValue);
          currentOperation = undefined;
          displayDiv.innerText = `${currentTotal}`;
        } else {
          currentTotal = currentValue;
          displayDiv.innerText = "";
        }
      },
      "+/-": tot => {
        currentTotal = tot * -1;
        displayDiv.innerText = `${currentTotal}`;
      }
    };
  
    const buttonsSection = document.querySelector("section:nth-of-type(2)");
    buttonsSection.addEventListener("click", evt => {
      const domNodeText = evt.target["innerText"];
      if (/\d/.test(domNodeText)) {
        buttonFunctions.num(domNodeText);
      } else {
        buttonFunctions[domNodeText] &&
          buttonFunctions[domNodeText](parseFloat(displayDiv.innerText));
      }
    });
  })();
  