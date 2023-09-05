import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';

function Suggestions() {
  return (
    <div className='suggestions'>
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Cris John</span>
              <span className='relation'> New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Cris John</span>
              <span className='relation'> New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Cris John</span>
              <span className='relation'> New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Cris John</span>
              <span className='relation'> New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Cris John</span>
              <span className='relation'> New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
