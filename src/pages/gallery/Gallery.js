import React, { Component, useState, useCallback } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { galleryHeader } from "../../portfolio.js";
import "./Gallery.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function GalleryComponent(props) {
  const theme = props.theme;

  const photos = [
    {
      src: require(`../../assets/images/01.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/02.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/03.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/04.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/05.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/06.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/07.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/7.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/08.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/09.jpg`),
      width: 1,
      height: 1,
    },
    {
      src: require(`../../assets/images/11.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/12.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/13.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/14.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/16.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/17.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/18.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/19.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/21.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/22.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/23.jpg`),
      width: 1,
      height: 1,
    },
    {
      src: require(`../../assets/images/24.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/28.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/30.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/34.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/35.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/36.jpg`),
      width: 4,
      height: 3,
    },
    {
      src: require(`../../assets/images/37.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/38.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/39.jpg`),
      width: 3,
      height: 4,
    },
    {
      src: require(`../../assets/images/40.jpg`),
      width: 3,
      height: 4,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery-main">
      <Header theme={theme} />
      <div className="basic-gallery">
        <Fade bottom duration={2000} distance="40px">
          <div className="gallery-heading-div">
            <div className="gallery-heading-text-div">
              <h1
                className="gallery-heading-text"
                style={{ color: theme.text }}
              >
                {galleryHeader.title}
              </h1>
              <p
                className="gallery-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {galleryHeader["description"]}
              </p>
            </div>
          </div>

          <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Fade>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default GalleryComponent;
