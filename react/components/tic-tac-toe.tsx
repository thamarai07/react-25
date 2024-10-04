

function Square ({value} : any){
    return <button className="tictactow__square">{value}</button>
}

 const TicTacToe = () =>{
    
    return (
        <>
            <div className="tictactow__container">
                <div className="tictactow__row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="tictactow__row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="tictactow__row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
            </div>
        </>
    )
} 

export default TicTacToe
