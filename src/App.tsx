import Header from "./header/header";
import Background from "./background";

function App() {

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }

  return (
    <div style={style as React.CSSProperties}>
      <Header />
      <Background />
    </div>
  );
}

export default App;
