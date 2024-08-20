type DivProps = {
  children: React.ReactNode;
};

const Div: React.FC<DivProps> = ({ children }) => (
  <div className="flex flex-col items-center justify-center h-screen w-full">
    {children}
  </div>
);

export default Div;
