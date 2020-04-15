import React from 'react';
import Card from './Card';

const CardList = ({ kittens }) => {
   return (
      <div id="card-list">
         {
            kittens.map((kitten, i) => {
               return (
                  <Card 
                     key={i} 
                     id={kittens[i].id} 
                     name={kittens[i].name} 
                     email={kittens[i].email} 
                  />
               );
            })
         }
      </div>
   );
}

export default CardList;