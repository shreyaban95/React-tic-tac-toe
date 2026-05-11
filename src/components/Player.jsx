import { useState } from "react";

export default function Player({name, symbol, isActive, onNameChange}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name)

    function onEditClick() {
        /** setIsEditing(!isEditing) is wrong because 
         * in react should not directly send !isEditing to set as there is a delay if sent directly.
         * State updates are not performed instantly but scheduled to perform at some point in future
         * So a best practise to call a function because then we will always have the latest state value
         */
        setIsEditing(editing => !editing);
        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }

    function onSaveClick(event) {
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{playerName}</span>;
    let buttonText = "Edit";
    if (isEditing) {
        player = <input type="text" value={playerName} required onChange={onSaveClick}></input>;
        buttonText = "Save";
    }
    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                {player}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEditClick}>{buttonText}</button>
        </li>
    )
}