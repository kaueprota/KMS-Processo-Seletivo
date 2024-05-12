import { useState } from "react"
import { CloseStyled } from "./CloseStyled.js.ts"

interface CloseButtonProps {
    size: number; 
    top: number;
    left: number;
    onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ size, top, left, onClick}) => {
    const [sizeButton, setSizeButton] = useState(size);
    const [topButton, setTopButton] = useState(top);
    const [leftButton, setLeftButton] = useState(left);
  
    return (
      <CloseStyled size={sizeButton} top={topButton} left={leftButton} onClick={onClick}></CloseStyled>
    );
  }
  
  export default CloseButton;