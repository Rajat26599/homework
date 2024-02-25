import { useState } from "react";
import { HomeworkWrapper } from "./styles"

//IMPORTING IMAGES
import paper1 from '../../assets/img/paper-1.png';
import paper2 from '../../assets/img/paper-2.png';
import paper3 from '../../assets/img/paper-3.png';
import paper4 from '../../assets/img/paper-4.png';

// PDF GENERATOR
import { getPdf } from "../../util/common/methods";

export const Homework = () => {
    
    // HOOKS
    const [content, setContent] = useState("");
    const [family, setFamily] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [paper, setPaper] = useState("");
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    return (
        <HomeworkWrapper>
            <div className="App container">
                <div className="form-group">
                <div className="row" style={{'color':'white'}}>
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
                        <option value="Satisfy">Satisfy</option>
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
                <div className="row" style={{'color':'white'}}>
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
                        min="0"
                        value={x}
                        onChange={(e)=>setX(e.target.value)}
                        placeholder="0" />
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
                        left:parseInt(x)+3+'%',
                        top:parseInt(y)-5+'%'
                        }}>
                        {content}
                    </p>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-10"></div>
                    <button className="btn btn-primary col-2" onClick={() => getPdf(paper, color, family, size, content, x, y)}>Download</button>
                </div>
                </div>
            </div>
        </HomeworkWrapper>
    )
}