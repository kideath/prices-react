import React from 'react';
import {NavLink, BrowserRouter}  from 'react-router-dom';

const phones =[
    {id: 1, name: "AAAApple iPhone 12 Pro"}, 
    {id: 2, name: "AAGoogle Pixel 5"}, 
    {id: 3, name: "AAAHuawei P40 Pro"} 
  ];

  // https://savelagame.ru/sony-playstation-4/igry-playstation-4/

export default class ConsoleGames extends React.Component{
    //render(){
    //    return <h2>Console Games Товары</h2>;
    //}
    render(){
        return <div>
                <h2>Список товаров</h2>
                <ul>
                {
                    phones.map(function(item){
                        return <li key={item.id}>
                                 <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
                               </li>
                    })
                }
            </ul>
        </div>;
    }

}

/*
     class ProductsList extends React.Component{
        render(){
            return <div>
                    <h2>Список товаров</h2>
                    <ul>
                    {
                        phones.map(function(item){
                            return <li key={item.id}>
                                     <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
                                   </li>
                        })
                    }
                </ul>
            </div>;
        }
    }
// */