

function Calculator(props: any) {
  const style = {
    border: "none",
    height: "50px",
    width: "50px",
    borderRadius: "30px",
    margin: "6px",
    backgroundColor: "#778DA9",
    color: "white",
    fontSize: "16px",
  };

  const onClick = (el: any) => {
    const elementValue: any = el.target.id;

    const firstNumberArray:any = [];
    let firstNumber:string;

    const secondNumberArray:any = [];
    let secondNumber:string;

    if (el.target.id == "CL") {
      props.setInput(() => []);
    } 
      else if (el.target.id != "=") {
      props.setInput((array: any) => [...array, elementValue]);
    }
        else if (el.target.id == "=") {
          props.input.forEach((e:string , index:number) => {

            let operatorIndex:number;

            if(e == "+" || e == "-" || e == "/" || e == "%" || e == "X") {

              operatorIndex = index;

              props.input.forEach((e:string , index:number) => {
                if(index < operatorIndex) {
                  firstNumberArray.push(e);
                } 
                  else if (index > operatorIndex) {
                  secondNumberArray.push(e);
                  }
              })
              firstNumberArray.forEach((e:string) => {
                if (firstNumber != undefined) {
                  firstNumber = firstNumber.concat(e);
                } else if (firstNumber == undefined) {
                  firstNumber = e;
                }
                
              })
              secondNumberArray.forEach((e:string) => {
                if (secondNumber != undefined) {
                  secondNumber = secondNumber.concat(e);
                } else if (secondNumber == undefined) {
                  secondNumber = e;
                }
                
                
              })
              
              const result = () => {
                let a;
                switch (props.input[operatorIndex]) {
                    case "+":
                      a = parseFloat(firstNumber) + parseFloat(secondNumber);
                      break;
                    case "-":
                     a = parseFloat(firstNumber) - parseFloat(secondNumber);
                      break;
                    case "/": 
                      a = parseFloat(firstNumber) / parseFloat(secondNumber);
                      break;
                    case "X":
                      a = parseFloat(firstNumber) * parseFloat(secondNumber);
                      break;
                    case "%":
                      a = parseFloat(firstNumber) % parseFloat(secondNumber);
                      break;
                  }
                return a;
              }

              props.setInput(() => result());
            }
          });
        }
  };

  let isPropsEqual: Boolean;

  if (props.number == "=") {
    style.backgroundColor = "#ef233c";
    isPropsEqual = true;
  }

  const mouseOn = (number: any) => {
    number.target.style.background = "#669BBC";
  };
  const mouseOut = (number: any) => {
    if (isPropsEqual === true) {
      number.target.style.background = "#ef233c";
    } else {
      number.target.style.background = "#778DA9";
    }
  };

  if (props.number == "=") {
    style.backgroundColor = "#ef233c";
  }

  return (
    <div>
      <button
        style={style}
        className="number"
        onMouseEnter={mouseOn}
        onMouseOut={mouseOut}
        onClick={onClick}
        id={props.number}
      >
        {props.number}
      </button>
    </div>
  );
}

export default Calculator;
