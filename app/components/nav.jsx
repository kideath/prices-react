import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
export default class Nav extends React.Component{
    render(){
        // return <div>
        //         <Link to="/">Главная</Link> 
        //         <Link to="/products">Товары</Link>
        //         <Link to="/pc-games">pc Товары</Link>
        //         <Link to="/console-games">Товары console</Link>
        //         <Link to="/parts">Товары parts</Link>
        //       </div>;
    // }

    return <nav className="navbar navbar-expand navbar-dark bg-dark">
            Поиск лучших цен
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/pc" className="nav-link">игры для ПК</Link>
                </li>
                <li className="nav-item">
                    <Link to="/console" className="nav-link">игры для консолей</Link>
                </li>
                <li className="nav-item">
                    <Link to="/parts" className="nav-link">ПК комплектующие</Link>
                </li>                        
            </div>
        </nav>;
    }

}