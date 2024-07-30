import { useState } from 'react'
import viteLogo from '/vite.svg'
import data from './data'
import Form from './Form'
import ContactParent from './ContactParent';
import formStructure from './formStructure';

function App() {

  return (
    <div className='grid grid-cols-3 p-6 bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] h-screen'>
      <Form formStructure={formStructure} />
      <ContactParent/>
      
    </div>
    
    
    
  );
}

export default App
