
import Button from "./button.tsx";

function Buttons ({ setInput, input }: { setInput: React.Dispatch<React.SetStateAction<any[]>>, input: any[] }) {
    
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
            <Button number= {9} setInput= {setInput} input= {input}/>
            <Button number= {8} setInput= {setInput} input= {input}/>
            <Button number= {7} setInput= {setInput} input= {input}/>
            <Button number= {6} setInput= {setInput} input= {input}/>
            <Button number= {5} setInput= {setInput} input= {input}/>
            <Button number= {4} setInput= {setInput} input= {input}/>
            <Button number= {3} setInput= {setInput} input= {input}/>
            <Button number= {2} setInput= {setInput} input= {input}/>
            <Button number= {1} setInput= {setInput} input= {input}/>
            <Button number= {0} setInput= {setInput} input= {input}/>
            <Button number= {"+"} setInput= {setInput} input= {input}/>
            <Button number= {"-"} setInput= {setInput} input= {input}/>
            <Button number= {"X"} setInput= {setInput} input= {input}/>
            <Button number= {"/"} setInput= {setInput} input= {input}/>
            <Button number= {"%"} setInput= {setInput} input= {input}/>
            <Button number= {"CL"} setInput= {setInput} input= {input}/>
            <Button number= {"="} setInput= {setInput} input= {input}/>
        </div>

    );
}

export default Buttons;