import Result from "./result/result";
import Calculator from "./calculator/calculator";


function Background () {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "65vh",
        backgroundColor: "black",
    }


    return (

        <div id="background" style={style}>
            <Result />
            <Calculator />
        </div>

    );

}

export default Background;