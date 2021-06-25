import React from 'react';
import Card from './Card';
// import { Robots } from './robots'
const CardList = ({Robots}) =>{
    const cardComponent = Robots.map((user,i)=>{
        return  < Card key= {i} id={Robots[i].id} name = {Robots[i].name} email = {Robots[i].email} />
    })
    return(
        <div>
           {cardComponent}
        </div>
    )
}
export default CardList;