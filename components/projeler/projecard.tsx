"use client";
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import LightGallery from 'lightgallery/react';


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="img/img1.jpg">
                    <img alt="img1" src="img/thumb1.jpg" />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src="img/thumb2.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}



export default function Projecard() {
  return (
    <div className="m-1.5">
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none hover:scale-105 hover:shadow-white/10 hover:shadow-md transition-all duration-200 ease-in-out"
    >
      <Image
        alt="Card"
        className="object-cover m-1"
        height={500}
        src="/images/hero-image-01.jpeg"
        width={500}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80">Proje İsmi</p>
        <Button onClick={() => Gallery()} className="text-small text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Galeri
        </Button>
      </CardFooter>
    </Card>

    </div>
  );
}
