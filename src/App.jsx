import socialData from './socialData';
import SocialMedia from './SocialMedia';
import Form from './Form'
import ContactParent from './ContactParent';
import formStructure from './formStructure';
import Button from './Button';

function App() {

  return (
    <div className='grid grid-cols-3 p-6 bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] h-screen'>
      <Form formStructure={formStructure} />
      <ContactParent/>
      {/* <SocialMedia social={socialData} /> */}
      {/* <Button img={} /> */}
    </div>
    
    
    
  );
}

export default App
