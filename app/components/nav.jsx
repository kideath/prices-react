import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
export default class Nav extends React.Component{
    render(){
        return <div>
                <Link to="/">Главная</Link> 
                <Link to="/products">Товары</Link>
                <Link to="/pc-games">pc Товары</Link>
                <Link to="/console-games">Товары console</Link>
                <Link to="/parts">Товары parts</Link>
              </div>;
    }
}