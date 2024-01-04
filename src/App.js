import { ContactProvider } from "./Context";
import ContactManager from "./components/contact";
import "./App.module.css"


function App() {
  return (
    <ContactProvider>
       <ContactManager/>
    </ContactProvider>
   
  )
    
}

export default App;
