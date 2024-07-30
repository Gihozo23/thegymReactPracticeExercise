import socialData from './socialData';
import SocialMedia from './SocialMedia';
import Form from './Form'
import ContactParent from './ContactParent';
import formStructure from './formStructure';
import Button from './Button';

function App() {
  const socials = socialData.map(image => <SocialMedia image={image} />)
  return (
    <div className='grid grid-cols-3 p-6 bg-gradient-to-r from-[#6372ff] to-[#5ca9fb] h-full'>
      <Form formStructure={formStructure} />
      <ContactParent/>
      <Button message={formStructure.button} />
      <div className='flex items-center justify-center gap-8 mt-56'>
        {socials}
      </div>
    </div>
    
    
    
  );
}

export default App
