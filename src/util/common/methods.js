import { jsPDF } from "jspdf";

// IMPORTING FONTS
import Caveat from '../../assets/fonts/Caveat-Regular.ttf';
import ArchitectsDaughter from '../../assets/fonts/ArchitectsDaughter-Regular.ttf';
import DancingScript from '../../assets/fonts/DancingScript-VariableFont_wght.ttf';
import GreatVibes from '../../assets/fonts/GreatVibes-Regular.ttf';
import Satisfy from '../../assets/fonts/Satisfy-Regular.ttf';

//IMPORTING IMAGES
import paper1 from '../../assets/img/paper-1.png';
import paper2 from '../../assets/img/paper-2.png';
import paper3 from '../../assets/img/paper-3.png';
import paper4 from '../../assets/img/paper-4.png';


// HEX TO RGB CONVERTER
export const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


// PDF GENERATOR
export const getPdf = (paper, color, family, size, content, x, y) => {
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
    var colorObj = hexToRgb(color?color:"#000000")
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