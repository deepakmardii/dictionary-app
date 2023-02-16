import { createContext, useState } from "react";
import Header from "./components/Header";
import ResultList from "./components/ResultList";

//Create Context
export const InputContext = createContext();

function App() {
  const[inputValue, setInputValue] = useState("Hello world");

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
    <div className="App">
      <Header />
      <ResultList />
    </div>
    </InputContext.Provider>
  );
}

export default App;
