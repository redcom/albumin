"use client";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import PhotoAlbum from "react-photo-album";

import NextJsImage from "@/components/NextJsImage";
import photos from "@/components/photos";

export default function PhotoGallery() {
   const [index, setIndex] = useState(-1);

  return (
    <>
    <PhotoAlbum
      photos={photos}
      layout="rows"
      renderPhoto={NextJsImage}
       targetRowHeight={150} onClick={({ index }) => setIndex(index)}
    />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
