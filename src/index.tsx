import React from 'react';
import ReactDOM from 'react-dom';
import FNCS from "./FNCS/fncs";

export default function App() {
    return (
        <div className="App">
            <FNCS/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
