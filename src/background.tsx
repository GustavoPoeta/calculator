import Result from "./result/result";
import Buttons from "./calculator/buttons";


function Background () {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "65vh",
        backgroundColor: "#1B263B",
        flexDirection: "column",   
    }


    return (

        <div id="background" style={style as React.CSSProperties}>
            <Result />
            <Buttons />
        </div>

    );

}

export default Background;