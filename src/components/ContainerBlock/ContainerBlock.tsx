import React from 'react';
import './ContainerBlock.css'

interface ContainerBlock {
  children: React.ReactNode;
  backgroundColor?: string;
  height?: string;
}

const ContainerBlock: React.FC<ContainerBlock> = ({
  children,
  backgroundColor = "#ffffff",
  backgroundImage,
  height = "96vh"
}) => {
  return (
    <div 
      className="container-block"
      style={{
        backgroundColor: backgroundImage ? "transparent" : backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        height,
      }}
    >
      {children}
    </div>
  );
};

export default ContainerBlock
