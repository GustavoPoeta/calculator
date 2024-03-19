
import Button from "./button.tsx";

function Buttons () {
    
    const style = {
        display: "inline-flex",
        overflow: "hidden",
        width: "30vh",
        height: "65vh",
        flexWrap: "wrap",
        alignContent: "center",
    }


    return (

        <div style={style as React.CSSProperties}>
            <Button number= {9}/>
            <Button number= {8}/>
            <Button number= {7}/>
            <Button number= {6}/>
            <Button number= {5}/>
            <Button number= {4}/>
            <Button number= {3}/>
            <Button number= {2}/>
            <Button number= {1}/>
            <Button number= {0}/>
            <Button number= {"+"}/>
            <Button number= {"-"}/>
            <Button number= {"X"}/>
            <Button number= {"/"}/>
            <Button number= {"%"}/>
            <Button number= {"CL"}/>
            <Button number= {"="}/>
        </div>

    );
}

export default Buttons;