import { useState } from 'react'
import { Navbar, Welcome, Footer, Services, Transactions } from './components';


function App() {


  return (
    <>
      <div className="">
      
        <Navbar />
        <Welcome />
        {/*<Services />*/}
        <Transactions />
        <Footer />
      </div>
    
    </>
  )
}

export default App
