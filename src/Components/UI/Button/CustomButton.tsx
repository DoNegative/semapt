import "./CustomButton.css";
import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: object;
  className ?: string;
  id ?:string;
}

const CustomButton: React.FC<Props> = ({ 
    children,
    onClick,
    disabled, 
    style,
    className="primary",
    id,
  }) => { 
  return (
    <button 
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={style}
      id={id}
    >
    {children}
    </button>
  );
}

export default CustomButton;