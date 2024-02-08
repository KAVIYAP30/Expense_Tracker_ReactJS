import React from 'react'

function Balance({transactions}) {
  const amounts=transactions.map(transactions=>transactions.amount);

   const total=amounts.reduce((acc,item)=>
    (acc+=item)
   ,0)
  return (
    <>
    <div>
      <h3>Balance</h3>
      <h1>{total}</h1>
    </div>
    </>
  )
}

export default Balance