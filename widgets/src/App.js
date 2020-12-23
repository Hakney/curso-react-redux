import React from 'react'
import Accordion from './components/Accordion';

const items = [
    {
        title: 'O que é React?',
        content: 'Responsta 1'
    },
    {
        title: 'O que é Java?',
        content: 'Responsta 2'
    },
    {
        title: 'O que é IOS?',
        content: 'Responsta 3'
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