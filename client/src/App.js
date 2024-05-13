import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState, useEffect} from "react";

function App() {

    const [message, setMessage] = useState()

    useEffect(() => {
        fetch('/members').then(
            res => {
                if(!res.ok) {
                    throw new Error ("Network Response was not ok");
                }
                return res.json();
            })
            .then(data => {
                setMessage(data.message);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation: ', error);
            });
    }, []);

    return (
        <div className="App">
        <Navbar/>
        <div className="container">
            <TextForm/>
        </div>
        <p>The message from api is {message}</p>
        </div>
    );
}

export default App;
