import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [ items, setItems ] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8000/allItems").then(res => res.json()).then(data => {
      setItems(data);
    });
  }, []);

  const handleDelete = event => {
    fetch("http://localhost:8000/deleteItem", {
      method: "DELETE",
      body: {
        id: event.target.id
      }
    }).then(() => {console.log(`Item: ${event.target.id} DELETED successfully`)});
  };

  return (
    <main id='main-app'>
      <div id="top-section">
        <form id="item-form" method='post' action='http://localhost:8000/newItem'>
          <input type='text' id='new-item' name='newItem' placeholder='Enter new item...' />
          <button id='submit-item' type='submit'><i className="fa-solid fa-paper-plane submit"></i></button>
        </form>
      </div>
      <div id="bottom-section">
        { items.length !== 0 && 
        items.map(item => {
          return (
            <div className="item">
              <p className='item-description'>{item.item}</p>
              <div className='buttons'>
                <button className='edit-button'><i className="fa-solid fa-pen-to-square edit"></i></button>
                <button type='submit' id={item._id} onSubmit={handleDelete} className='delete-button'><i className="fa-solid fa-trash delete"></i></button>
              </div>
            </div>
          );
        })
        }
      </div>
    </main>
  );
};


/*
        <div className="item">
          <p id='item-description'>Finish assignments</p>
          <div className='buttons'>
            <button className='edit-button'><i className="fa-solid fa-pen-to-square edit"></i></button>
            <button className='delete-button'><i className="fa-solid fa-trash delete"></i></button>
          </div>
        </div>

        <div className="item">
          <p id='item-description'>Do some React Native project</p>
          <div className='buttons'>
            <button className='edit-button'><i className="fa-solid fa-pen-to-square edit"></i></button>
            <button className='delete-button'><i className="fa-solid fa-trash delete"></i></button>
          </div>
        </div>

        <div className="item">
          <p id='item-description'>Complete the leetcode daily problem</p>
          <div className='buttons'>
            <button className='edit-button'><i className="fa-solid fa-pen-to-square edit"></i></button>
            <button className='delete-button'><i className="fa-solid fa-trash delete"></i></button>
          </div>
        </div>

        <div className="item">
          <p id='item-description'>Do homework with Remy</p>
          <div className='buttons'>
            <button className='edit-button'><i className="fa-solid fa-pen-to-square edit"></i></button>
            <button className='delete-button'><i className="fa-solid fa-trash delete"></i></button>
          </div>
        </div>

        <div className="item">
          <p id='item-description'>Get some Jabba</p>
          <div className='buttons'>
            <button className='edit-button'><i className="fa-solid fa-pen-to-square edit"></i></button>
            <button className='delete-button'><i className="fa-solid fa-trash delete"></i></button>
          </div>
        </div>
 */