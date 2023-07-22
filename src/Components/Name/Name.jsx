import { useEffect,useState } from "react";
import "./Name.css"
export default function Name() {
    const [text, setText] = useState('');
    const texts = ["Front End","Back End" , "App Dev"]; 
    const intervalTime = 200;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setText(texts[Math.floor(Math.random() * texts.length)]);
      }, intervalTime);
  
      return () => clearInterval(interval);
    });

  return (
    <div className="centertext">
    <div className="nholder">
        <span className="name">BHAVY BHATNAGAR</span></div>
    <div >
      <span className="info">{text}</span>
      <span className="cursor">_</span>
    </div>
    </div>

  )
}
