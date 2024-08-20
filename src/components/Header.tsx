import React from "react";
import Footer from "./Footer";

type HeaderProps = {
  title: string;
  age?: string;
  footerTitle: string;
  handleClick: (value: string) => void;
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  title,
  footerTitle,
  handleClick,
  children,
}) => (
  <>
    <h1 className="text-rose-800 font-medium text-4xl">{title}</h1>
    <Footer title={footerTitle} handleClick={handleClick} />
    {children}
  </>
);

export default Header;
