/*
import React from 'react';
 
export default class PcGames extends React.Component{
    render(){
        return <h2>PC Главная</h2>;
    }
}
// */

import React from 'react';
import ItemsList from './ItemsList.jsx';
 
export default class PcGames extends React.Component{
    /* const propsValues = {
        title: "Список смартфонов",
        items: [
            "Samsung Galaxy Note20", 
            "Apple iPhone 12 Pro", 
            "Google Pixel 5", 
            "Huawei P40 Pro", 
            "OnePlus 8 Pro", 
            "Asus Zenfone 7 Pro"
        ]
    }; // */

    

    render(){
        return <div id="items">
            <p>Имя: {this.props.name}</p>
            <h2>Список телефонов</h2>
            <ul>
                <li>Apple iPhone 12 Pro</li>
                <li>Samsung Galaxy S20</li>
                <li>Huawei P40 Pro</li>
                <li>Google Pixel 5</li>
            </ul>
        </div>;
    }
}


/*
var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList.jsx');
 
const propsValues = {
    title: "Список смартфонов",
    items: [
        "Samsung Galaxy Note20", 
        "Apple iPhone 12 Pro", 
        "Google Pixel 5", 
        "Huawei P40 Pro", 
        "OnePlus 8 Pro", 
        "Asus Zenfone 7 Pro"
    ]
};
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)
// */