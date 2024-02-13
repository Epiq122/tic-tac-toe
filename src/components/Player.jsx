import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEdit = () => {
    setIsEditing(true);
    setPlayerName('');
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className='player'>
        {isEditing ? (
          <input type='text' value={playerName} onChange={handleNameChange} />
        ) : (
          <span className='player-name'>{name}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
}
