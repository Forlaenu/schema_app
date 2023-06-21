import MainForm from './components/MainForm';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <MainForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
