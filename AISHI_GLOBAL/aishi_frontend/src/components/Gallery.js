import React from "react";

function Gallery() {

  const images = [
    "https://picsum.photos/400/300?1",
    "https://picsum.photos/400/300?2",
    "https://picsum.photos/400/300?3",
    "https://picsum.photos/400/300?4"
  ];

  return (
    <section style={{padding:"50px", textAlign:"center"}}>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12 tracking-tight">
  Project Gallery
</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"30px"
      }}>

        {images.map((img,index)=>(
          <img
            key={index}
            src={img}
            alt="gallery"
            style={{width:"100%", borderRadius:"10px"}}
          />
        ))}

      </div>

    </section>
  );
}

export default Gallery;