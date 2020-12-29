import React from 'react'
import Accordion from './components/Accordion';

const items = [
    {
        title: 'O que é React?',
        content: 'Resposta 1'
    },
    {
        title: 'O que é Java?',
        content: 'Resposta 2'
    },
    {
        title: 'O que é IOS?',
        content: 'Resposta 3'
    },
];
const App = () => {
    return(
        <div>
           <Accordion items={items} />
        </div>
    );
}

export default App;

//teste feature