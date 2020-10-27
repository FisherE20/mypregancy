import React, {useState} from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import ImageGrid from "../components/ImageGrid";
import UploadForm from "../components/UploadForm";
import Modal from "../components/Modal";
import Title from "../components/Title"


function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
    
  return (
    <React.Fragment>
      <Nav />
      <Jumbotron />
      <div className="Gallery">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
          
    
  </React.Fragment>  
    

    
  )
};


export default Gallery;