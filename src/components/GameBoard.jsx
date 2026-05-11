// const initialBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
// ];

export default function GameBoard({onSelectSquare, board}) {
    /** Lifted the state and values up to App.jsx */

    // export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    // const [gameBoard, setGameBoard] = useState(initialBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     /** Object and arrays are reference values in javascript and should be updated immutably
    //      * So should not mutate them directly but instead create a deep copy of them first
    //      * [deep copy: It creates a new object and recursively copies all nested objects, ensuring the new object is entirely independent of the original.]
    //      */
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }


    // let gameBoard =initialBoard;
    // for (const turn of turns) {
    //     const {square, player} = turn;
    //     const {row, col} = square;

    //     gameBoard[row][col] = player;
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}