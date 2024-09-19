
import './App.css';

export default function App() {
  return (
    <main id='main-app'>
      <div id="top-section">
        <form id="item-form">
          <input type='text' id='new-item' name='new-item' placeholder='Enter new item...' />
          <button id='submit-button' type='submit'><i className="fa-solid fa-paper-plane submit"></i></button>
        </form>
      </div>
      <div id="bottom-section">
        <div className="item">
          <p id='item-description'>Wash the car</p>
          <div className='buttons'>
            <button className='edit-button'><i className="fa-solid fa-pen-to-square edit"></i></button>
            <button className='delete-button'><i className="fa-solid fa-trash delete"></i></button>
          </div>
        </div>
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
      </div>
    </main>
  );
};
