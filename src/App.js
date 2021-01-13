import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function WelcomeMessage() {
    return <p> Welcome User </p>
}

function Counter() {
    const [count, setCount] = useState(5)
    return (
        <div>
            <p> You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)} Click me/>
        </div>

    )
}

function MostWelcome() {
    return (
        <div>
            <p> Welcome User Again</p>
        </div>

    )
}

function App() {

    // const [fname, setFname] = useState("")
    // const handleChange = e => {
    //     setFname(e.target.value)
    //     console.log(fname.value)
    // }
    const [state, setState] = useState({
        fname: "",
        lname: "",
        message: "",
        carBrand: "",
        isChecked: false
    })
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <form>
                    <label>
                        First Name: <input type="text" value={state.fname} onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Last Name: <input type="text" value={state.lname} onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>
                       <textarea name="message" value =  {state.message}  onChange={handleChange}/>
                    </label>
                    <br/>
                     <label>
                          Pick your favourite car brand : <select name="carBrand" value = {state.carBrand} onChange={handleChange}>
                         <option value="mercedes">Mercedes</option>
                         <option value="bmw">BMW</option>
                         <option value="maserati">Maserati</option>
                         <option value="infinity">Infinity</option>
                         <option value="audi">Audi</option>
                     </select>
                         <br/>
                         <h5>Is it checked?: {state.isChecked?"Yes":"No"}</h5> <switch name = "isCheck" value={state.isChecked} onChange={handleChange} />
                     </label>

            </form>
            <h5> Hello dear {state.fname} </h5>
            <WelcomeMessage/>
            <Counter/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MostWelcome/> Learn React
            </a>

        </header>
</div>
)
    ;
}

export default App;
