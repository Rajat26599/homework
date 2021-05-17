import React, {useState} from "react";
import './App.css';

//IMPORTING IMAGES
import page1 from './assets/img/page-1.png'

function App() {

  const [content, setContent] = useState("");
  const [family, setFamily] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  return (
    <div className="App container">
      <div className="form-group">
        <div className="row">
          <div className="col-sm-6">
            <h1>My Homework</h1>
          </div>
          <div className="row col-sm-6">
            <label className="col-2" htmlFor="font-select">Font:</label>
            <select
              className="form-control col-3"
              id="font-select"
              onChange={(e)=>setFamily(e.target.value)}
              >
              <option value="Satisfy">Font: Satisfy</option>
              <option value="Architects Daughter">Architects Daughter</option>
              <option value="Caveat">Caveat</option>
              <option value="Dancing Script">Dancing Script</option>
              <option value="Great Vibes">Great Vibes</option>
            </select>
            <input
              className="form-control col-2"
              type="number"
              min="0"
              value={size}
              onChange={(e)=>setSize(e.target.value)}
              placeholder="16" />
            <input
              className="form-control col-1"
              type="color"
              value={color?color:"#000000"}
              onChange={(e)=>setColor(e.target.value)}
              placeholder="black"
             />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h6>Made with ❤️ by Rajat Saxena</h6>
          </div>
          <div className="row col-6">
            <label className="col-2" htmlFor="paper-select">Paper:</label>
            <select
              className="form-control col-3"
              id="paper-select">
              <option>Plane Paper</option>
              <option>Option2</option>
            </select>
            <label className="col-1" htmlFor="paper-select">X:</label>
            <input
              className="form-control col-2"
              type="number"
              min="0"
              value={x}
              onChange={(e)=>setX(e.target.value)}
              placeholder="5" />
            <label className="col-1" htmlFor="paper-select">Y:</label>
            <input
              className="form-control col-2"
              type="number"
              min="0"
              value={y}
              onChange={(e)=>setY(e.target.value)}
              placeholder="15" />
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-sm-6" id="writingArea">
            <textarea
              className="form-control"
              value={content}
              onChange={(e)=>setContent(e.target.value)}
              type="text"
              placeholder="Start typing here..."
              rows="17">
            </textarea>
          </div>
          <div className="col-sm-6" id="previewArea">
            <img id="preview-img" src={page1} alt="" />
            <p
              id="content"
              style={{
                fontFamily:family,
                fontSize:size+'px',
                color:color,
                left:x+'%',
                top:y+'%'
              }}>
              {content}
            </p>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-10"></div>
          <button className="btn btn-primary col-2">Download</button>
        </div>
      </div>
    </div>
  );
}

export default App;
