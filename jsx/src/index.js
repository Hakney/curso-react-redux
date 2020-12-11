import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <label for="inputId"> Digite seu nome</label>
            <input id="inputId"/>
            <button type="text" style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);