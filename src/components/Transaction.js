import React from 'react';

function Transaction({ date, description, category, amount, handleDelete, id }) { //destructring transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
