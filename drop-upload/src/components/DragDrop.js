import React, { useRef, useState } from "react";

function DragDrop() {
    const [files, setFiles] = useState({})
    const dropX = useRef();
    const inputElement =useRef();


            function handelDragover(e) {
                    e.preventDefault();
                    dropX.current.classList.add("dropzone--over");
                    console.log(dropX);
                }
            function handelDragEnd(e) {
                dropX.current.classList.remove("dropzone--over");
                console.log("drag left");
                }
            function handelDrop(e) {
                e.preventDefault();
                if (e.dataTransfer.files.length) {
                   // inputElement.current.files = e.dataTransfer.files;
                   // console.log(inputElement);
                   setFiles(e.dataTransfer.files[0]) ;

                   console.log(inputElement.current.files);
                   console.log("   ............");

                  inputElement.current.files = e.dataTransfer.files ;
                  console.log(inputElement.current.files);
                   console.log("   ............");
                   console.log(files);
                   console.log(e.dataTransfer.files);
                   updateThumbnail(dropX,e.dataTransfer.files[0]);
                    dropX.current.classList.remove("dropzone--over");
                  }
                  
                }


                  /**
                     * Updates the thumbnail on a drop zone element.
                     *
                     * @param {HTMLElement} dropZoneElement
                     * @param {File} file
                     */
                    function updateThumbnail(dropX, file) {
                        let thumbnailElement = dropX.current.querySelector(".drop-zone__thumb");
                    
                        // First time - remove the prompt
                        if (dropX.current.querySelector(".drop-zone__prompt")) {
                            dropX.current.querySelector(".drop-zone__prompt").remove();
                        }
                    
                        // First time - there is no thumbnail element, so lets create it
                        if (!thumbnailElement) {
                        thumbnailElement = document.createElement('div');
                        thumbnailElement.classList.add("drop-zone__thumb");
                        dropX.current.appendChild(thumbnailElement);
                        }
                    
                        thumbnailElement.dataset.label = file.name;
                    
                        // Show thumbnail for image files
                        if (file.type.startsWith("image/")) {
                        const reader = new FileReader();
                    
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
                        };
                        } else {
                        thumbnailElement.style.backgroundImage = null;
                        }
                    }
                    function onClickHandler(e){
                      console.log("clicked")
                      inputElement.current.click();
                      
                    }
return (
    <div className="centreContainer">
      <div
      ref={dropX}
      className="dropzone"
      onDragOver={(e) => handelDragover(e)}
      onDragEnd={(e) => handelDragEnd(e)}
      onDragLeave={(e) => handelDragEnd(e)}
      onDrop={(e) => handelDrop(e)}
      onClick={(e)=>onClickHandler(e)}
    >
      <span className="drop-zone__prompt">Drop file here or click to upload</span>
      <input type="file" ref={inputElement} name="file drop"  className="dropzone__input" onChange={(e)=>updateThumbnail(dropX,e.target.files[0])}  />
    </div>
    </div>
  );
}

export default DragDrop;
