import './App.css';
import RuseState from "./Components/RuseState";
import RuseRef from "./Components/RuseRef";
import {useState, createContext} from "react";

export const TestContext = createContext(); // return object gồm provider & consumer

function App() {
    const [dulieu, setDulieu] = useState('test truyen du lieu');

    return (
        <TestContext.Provider value={dulieu}>
            <div className="App">
                <RuseState/>
                <RuseRef/>
            </div>
        </TestContext.Provider>
    );
}

export default App;
