import React, {useState} from "react";

function ColorPicker(){

  const [color,setColor] = useState("#ffffff");

  return(

    <section style={{padding:"50px", textAlign:"center"}}>

      <h2>RAL Color Selector</h2>

      <input
        type="color"
        value={color}
        onChange={(e)=>setColor(e.target.value)}
      />

      <div style={{
        marginTop:"20px",
        height:"150px",
        background:color,
        border:"1px solid #ccc"
      }}>
      </div>

      <p>Selected Color: {color}</p>

    </section>

  )
}

export default ColorPicker
