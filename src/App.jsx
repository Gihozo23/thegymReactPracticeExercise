import { useState } from 'react'
import viteLogo from '/vite.svg'
import data from './data'
import Form from './Form'
import ContactParent from './ContactParent';
import formStructure from './formStructure';

function App() {

  return (
    <div className='grid grid-cols-3 p-6 bg-blue-400 h-screen'>
      <Form />
      <ContactParent/>
      
    </div>
    
    
    
  );
}

export default App
