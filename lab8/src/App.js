import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterBroken from './components/CounterBroken';
import HandleClick from './components/HandleClick';
import HandleMouseOver from './components/HandleMouseOver';
import ShowImage from './components/ShowImage';
import LoadDataFromJson from './components/LoadDataFromJson';
import UploadFile from './components/UploadFile';
import ChangeStyle from './components/ChangeStyle';

function App() {
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

export default App;
