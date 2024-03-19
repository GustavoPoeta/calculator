function Calculator(props:any) {
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

  const mouseOn = (number: any) => {
    number.target.style.background = "#669BBC";
  }
  const mouseOut = (number:any) => {
    number.target.style.background = "#778DA9";
  }
  

  return (  
    <div>
        <button style={style}className="number" onMouseEnter={mouseOn} onMouseOut={mouseOut}>{props.number}</button>
    </div>
  );
}

export default Calculator;
