import React from 'react'
import elBorracho from "../images/el-borracho-tos.png"
import elAlacran from "../images/el-alacran-taco.png"
import elPerico from "../images/el-perico-taco.png"
import laCorona from "../images/la-corona-tos.png"
import laDama from "../images/la-dama-tos.png"
import "./Gallery.scss"


const Gallery = () => {
    return (
        <section className="gallery">

        <div className="gallery-grid-container">
            <h1>Gallery</h1>
            <img src={ elBorracho} id="w-node" className="gallery-lightbox w-inline-block w-lightbox" alt=""/>
            <img src={ elAlacran } className="gallery-lightbox w-inline-block w-lightbox" alt=""/>
            <img src={ elPerico } className="gallery-lightbox w-inline-block w-lightbox" alt=""/>
            <img src={ laCorona } className="gallery-lightbox w-inline-block w-lightbox" alt=""/>
            <img src={ laDama } className="gallery-lightbox w-inline-block w-lightbox" alt=""/>
        </div>
        </section>
    )
}

export default Gallery
