import Result from "./result/result";
import Buttons from "./calculator/buttons";
import { useState } from "react";


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

    const [input, setInput] = useState<any[]>([]);

    return (

        <div id="background" style={style as React.CSSProperties}>
            <Result input={input}/>
            <Buttons setInput={setInput} input={input}/>
        </div>

    );

}

export default Background;