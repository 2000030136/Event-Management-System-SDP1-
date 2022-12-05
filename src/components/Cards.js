import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
     
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/event-7.jpg'
              text='Bussiness Events'
              path='/connect'
            />
            <CardItem
              src='/images/event-5.jpg'
              text='Cultural Events'
              path='/connect'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/event-4.jpg'
              text='Family Events'
              path='/connect'
            />
            <CardItem
              src='/images/event-1.jfif'
              text='Sports Events'
              path='/connect'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;