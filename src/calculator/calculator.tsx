function Calculator() {
  const style = {
    border: "none",
    height: "50px",
    width: "50px",
    borderRadius: "30px",
    margin: "6px",
  };

  const number = {
    display: "inline-flex",
    overflow: "hidden",
    width: "30vh",
    height: "65vh",
    flexWrap: "wrap",
    alignContent: "center",
  }

  return (  
    <div style={number as React.CSSProperties}>
        <button style={style}>9</button>
        <button style={style}>8</button>
        <button style={style}>7</button>
        <button style={style}>6</button>
        <button style={style}>5</button>
        <button style={style}>4</button>
        <button style={style}>3</button>
        <button style={style}>2</button>
        <button style={style}>1</button>
        <button style={style}>0</button>
    </div>
  );
}

export default Calculator;
