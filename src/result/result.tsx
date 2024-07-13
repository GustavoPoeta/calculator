

function Result ({ input }: {input: any[] }) {

    const style = {
        display: "flex",
        backgroundColor: "#415A77",
        width: "300px",
        height: "100px",
        marginTop: "20px",
        marginBottom: "0",
        justifyContent: "center",
        alignItems: "center" 
    }

    const resultStyle = {
        color: "white",
        fontSize: "25px",
    }

    return (
        <div style={style}>
            <h3 style={resultStyle}>{input}</h3>
        </div>
    );

}


export default Result;