import React, { useState, useEffect } from 'react';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';
import TransactionsList from './TransactionsList';

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchInput, setSearchIput] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddTransaction(newTransaction) {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((addedTransaction) => {
        setTransactions((prev) => [...prev, addedTransaction]);
      })
      .catch((error) => console.log(error));
  }

  function handleSearch(event) {
    setSearchIput(event.target.value);
  }

  // Filter transactions based on search input
  const filterTerms = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchInput.toLowerCase())
  );

  function handleDelete(id) {
    // Delete the transaction on the server
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the transaction from the state
        setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Search onChange={handleSearch} />
      <AddTransactionForm submitData={handleAddTransaction} />
      <TransactionsList transactions={filterTerms} handleDelete={handleDelete} />
    </div>
  );
}

export default AccountContainer;
