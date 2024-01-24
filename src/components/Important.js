import React, { useState } from 'react';

const Important = () => {
  // Initialize the important list array with 6 empty slots
  const initialImportantList = Array(6).fill(null);
  const [importantList, setImportantList] = useState(initialImportantList);

  // Function to handle adding an item to the list
  const handleAddItem = (index) => {
    const newItem = prompt('Enter item:');
    if (newItem !== null) {
      const updatedList = [...importantList];
      updatedList[index] = newItem;
      setImportantList(updatedList);
    }
  };

  return (
      <div className='iTasks'>
        <h1>Important-Tasks</h1>
        <ul>
          {importantList.map((item, index) => (
            <li className='i-list-item' key={index} onClick={() => handleAddItem(index)}>
              {item || 'Click to add item'}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Important;
