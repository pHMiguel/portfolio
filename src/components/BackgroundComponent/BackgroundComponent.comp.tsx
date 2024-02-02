import React from "react";
import LazyLoad from "react-lazy-load";

interface BackgroundComponentProps {
  videoSrc: string;
}

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({
  videoSrc,
}) => {
  return (
    <LazyLoad offset={50}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </LazyLoad>
  );
};

export default BackgroundComponent;
