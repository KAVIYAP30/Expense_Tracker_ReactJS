// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
import Header from './components/Header'
import './index.css'
import Balance from './components/Balance'
import Incoexp from './components/Incoexp'
import TranscationLi from './components/TranscationLi'
import Addtranscation from './components/Addtranscation'
import { useState,useEffect } from 'react'


function App() {
  const initialState={
   transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
      ],
  }
const [transactions,setTransactions]=useState(initialState.transactions);
const deleteTransaction= (id)=>{
const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
setTransactions(updatedTransactions)
}
const addTransaction = (text, amount) => {
  const newTransaction = {
    id: Math.floor(Math.random() * 1000000),
    text,
    amount
  };
  setTransactions([...transactions, newTransaction]);
};
  return (
    <>
      <div>
          <Header/>
          <Balance transactions={transactions}/>
          <Incoexp transactions={transactions}/>
          <TranscationLi transactions={transactions} deleteTransaction={deleteTransaction}/>
          <Addtranscation  transactions={transactions} addTransaction={addTransaction}/>
        </div>
       
    </>
  )
}

export default App
