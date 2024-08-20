type FooterProps = {
  title: string;
  handleClick: (title: string) => void;
};

const Footer: React.FC<FooterProps> = ({ title, handleClick }) => (
  <h2 onClick={() => handleClick(title)}>{title}</h2>
);

export default Footer;
