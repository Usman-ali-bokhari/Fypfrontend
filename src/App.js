import React, { useState } from 'react';
import './App.css'; // Make sure this is the correct path to your CSS file

function App() {
  const [selectedOption, setSelectedOption] = useState('PDF');
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };


  const handleUpload = () => {
    // Implement the logic to handle the file or text upload based on selected option
    console.log('Uploaded', selectedOption === 'PDF' ? file : text);
  };

  // In your App.js
return (
  <div className="app-container">
    <nav className="navbar">
      <div className="nav-brand">ScholarMate</div>
      <div className="nav-links">
        <a href="/">HOME</a>
        <a href="/lit-rev">LIT REV</a>
        <a href="/journal-recommendation">JOURNAL RECOMMENDATION</a>
        <a href="/team">TEAM</a>
      </div>
    </nav>

    <div className="content-container">
      <div className="options-container">
        <div className="toggle-buttons">
          <button
            onClick={() => setSelectedOption('PDF')}
            className={selectedOption === 'PDF' ? 'active' : ''}
          >
            PDF
          </button>
          <button
            onClick={() => setSelectedOption('Text')}
            className={selectedOption === 'Text' ? 'active' : ''}
          >
            Text
          </button>
        </div>
      </div>

      <div className="input-section">
        {selectedOption === 'PDF' ? (
          <div className="upload-section">
            <input type="file" onChange={handleFileChange} />
<button onClick={handleUpload}>📤 Upload Papers</button>

          </div>
          
        ) : (
          <div className="text-input-section">
          <h3>Enter the text</h3>
            <textarea
              className="text-area"
              placeholder="Paper texts"
              value={text}
              onChange={handleTextChange}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

}

export default App;
