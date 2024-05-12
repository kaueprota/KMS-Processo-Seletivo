import { useState } from "react"
import { CloseStyled } from "./CloseStyled.js.ts"

interface CloseButtonProps {
    size: number; 
    top: number;
    left: number;
    onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ size, top, left, onClick}) => {
    const [sizeButton] = useState(size);
    const [topButton] = useState(top);
    const [leftButton] = useState(left);
  
    return (
      <CloseStyled size={sizeButton} top={topButton} left={leftButton} onClick={onClick}></CloseStyled>
    );
  }
  
  export default CloseButton;