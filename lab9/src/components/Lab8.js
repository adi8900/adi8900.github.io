import React from 'react';
import Counter from './Counter';
import CounterBroken from './CounterBroken';
import HandleClick from './HandleClick';
import HandleMouseOver from './HandleMouseOver';
import ShowImage from './ShowImage';
import LoadDataFromJson from './LoadDataFromJson';
import UploadFile from './UploadFile';
import ChangeStyle from './ChangeStyle';

function Lab8() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab 8</h1>
        <div style={{ marginBottom: '2rem' }}>
          <h2>Wersja prawidłowa licznika</h2>
          <Counter />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h2>Wersja nieprawidłowa licznika</h2>
          <CounterBroken />
        </div>

        <h1>Interakcje użytkownika</h1>

        <div style={{ marginBottom: '2rem' }}>
          <h2>HandleClick</h2>
          <HandleClick />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>HandleMouseOver</h2>
          <HandleMouseOver />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>ShowImage</h2>
          <ShowImage />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>LoadDataFromJson</h2>
          <LoadDataFromJson />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>UploadFile</h2>
          <UploadFile />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>ChangeStyle</h2>
          <ChangeStyle />
        </div>
      </header>
    </div>
  );
}

export default Lab8;
