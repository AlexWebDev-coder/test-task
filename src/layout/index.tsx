import DefaultLayoutFooter from "./default/footer";
import DefaultLayoutHeader from "./default/header";

interface IProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <DefaultLayoutHeader />
      {children}
      {/* <DefaultLayoutFooter /> */}
    </div>
  );
};

export default AppLayout;
