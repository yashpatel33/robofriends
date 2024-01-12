import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="tc">
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
        <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} />
        <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} />
        <Card id={robots[5].id} name={robots[5].name} email={robots[5].email} />
        <Card id={robots[6].id} name={robots[6].name} email={robots[6].email} />
        <Card id={robots[7].id} name={robots[7].name} email={robots[7].email} />
        <Card id={robots[8].id} name={robots[8].name} email={robots[8].email} />
        <Card id={robots[9].id} name={robots[9].name} email={robots[9].email} />   
    </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
