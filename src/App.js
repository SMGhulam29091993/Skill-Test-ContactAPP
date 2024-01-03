import { ContactProvider } from "./Context";
import ContactManager from "./components/contact";



function App() {
  return (
    <ContactProvider>
       <ContactManager/>
    </ContactProvider>
   
  )
    
}

export default App;
