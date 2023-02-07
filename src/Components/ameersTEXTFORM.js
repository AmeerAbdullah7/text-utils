import React, { useState } from 'react';

export default function Textform(props) {
  const handleupClick = () => {
    console.log('abdullah clicked the button  he is dancing');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('words r converted to capitlas ', 'success');
  };

  const handleLOWClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('words r converted to lowers ', 'success');
  };
  /*const handleColor = text => {
    return (
      <span className="text-colorChange" style={{ color: 'blue' }}>
        {text}
      </span>
    );
  };*/

  const handleonChange = event => {
    console.log('sometihng is changeed');
    setText(event.target.value);
  };

  const [text, setText] = useState('abdullahs text');
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white ' : 'black',
        }}
      >
        <h1 className="heading"> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="text-form"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === 'dark ' ? 'grey' : 'white',
            }}
            id="my-box"
            rows="8"
          ></textarea>
        </div>

        <button className="btn-btn prop mx-1" onClick={handleupClick}>
          CHANGE TO UPPER CASE
        </button>

        <button className="btn-btn prop mx-1" onClick={handleLOWClick}>
          CHANGE TO LOWER CASE
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === 'dark' ? 'white ' : 'black' }}
      >
        <h1 className="summary"> TEXT SUMMARY </h1>
        <p>
          {text.split('').length}words and {text.length} letters
        </p>
        <h2> TIME TAKEN</h2>
        <p>
          {' '}
          {2 * text.length} seconds to read {text.length} letters
        </p>
        <h2> PREVIOUS</h2>
        <p> {text.length > 0 ? text : 'enter some text to preview it'} </p>
      </div>
    </>
  );
}
