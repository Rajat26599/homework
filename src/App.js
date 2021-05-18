import React, {useState} from "react";
import './App.css';
import { jsPDF } from "jspdf";
// import { Base64 } from 'js-base64';
// import {html2canvas} from 'html2canvas';

// IMPORTING FONTS
import Caveat from './assets/fonts/Caveat-Regular.ttf';
import ArchitectsDaughter from './assets/fonts/ArchitectsDaughter-Regular.ttf';
import DancingScript from './assets/fonts/DancingScript-VariableFont_wght.ttf';
import GreatVibes from './assets/fonts/GreatVibes-Regular.ttf';
import Satisfy from './assets/fonts/Satisfy-Regular.ttf';


//IMPORTING IMAGES
import paper1 from './assets/img/paper-1.png';
import paper2 from './assets/img/paper-2.png';
import paper3 from './assets/img/paper-3.png';
import paper4 from './assets/img/paper-4.png';


function App() {

  // HEX TO RGB CONVERTER
  var colorHandeler = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // PDF GENERATOR
  const getPdf = () => {
    var doc = new jsPDF();

    //SETTING PAGE IN PDF
    switch (paper?paper:"paper1") {
    case "paper1":
      doc.addImage(paper1, 0, 0, 210, 297);
      break;
    case "paper2":
      doc.addImage(paper2, 0, 0, 210, 297);
      break;
    case "paper3":
      doc.addImage(paper3, 0, 0, 210, 297);
      break;
    case "paper4":
      doc.addImage(paper4, 0, 0, 210, 297);
      break;
      default:

    }

    //SETTING FONT COLOR IN PDF
    var colorObj = colorHandeler(color?color:"#000000")
    doc.setTextColor(colorObj.r, colorObj.g, colorObj.b);

    //SETTING FONT IN PDF
    switch (family?family:"Satisfy") {
      case "Architects Daughter":
        doc.addFont(ArchitectsDaughter, "MyFont", "normal");
        break;
      case "Caveat":
        doc.addFont(Caveat, "MyFont", "normal");
        break;
      case "Dancing Script":
        doc.addFont(DancingScript, "MyFont", "normal");
        break;
      case "Great Vibes":
        doc.addFont(GreatVibes, "MyFont", "normal");
        break;
      case "Satisfy":
        doc.addFont(Satisfy, "MyFont", "normal");
        break;
      default:

    }

    doc.setFont("MyFont");
    doc.setFontSize(size?size:16)
    var splitContent = doc.splitTextToSize(content, 210);
    console.log(x);
    doc.text(splitContent, x, y?y:5);
    doc.save("a4.pdf");
  };


  // HOOKS
  const [content, setContent] = useState("");
  const [family, setFamily] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [paper, setPaper] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");


  return (
    <div className="App container">
      <div className="form-group">
        <div className="row">
          <div className="col-sm-6">
            <h1>Hi Homework</h1>
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
              id="paper-select"
              onChange={(e)=>setPaper(e.target.value)}>
              <option value="paper1">Paper-1</option>
              <option value="paper2">Paper-2</option>
              <option value="paper3">Paper-3</option>
              <option value="paper4">Paper-4</option>
            </select>
            <label className="col-1" htmlFor="paper-select">X:</label>
            <input
              className="form-control col-2"
              type="number"
              min="3"
              value={x}
              onChange={(e)=>setX(e.target.value)}
              placeholder="3" />
            <label className="col-1" htmlFor="paper-select">Y:</label>
            <input
              className="form-control col-2"
              type="number"
              min="5"
              value={y}
              onChange={(e)=>setY(e.target.value)}
              placeholder="5" />
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
            <img
              id="preview-img"
              src={paper==="paper2"?paper2:paper==="paper3"?paper3:paper==="paper4"?paper4:paper1}
              alt=""
            />
            <p
              id="content"
              style={{
                fontFamily:family,
                fontSize:size+'px',
                color:color,
                left:x+'%',
                top:parseInt(y)-5+'%'
              }}>
              {content}
            </p>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-10"></div>
          <button className="btn btn-primary col-2" onClick={getPdf}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default App;
