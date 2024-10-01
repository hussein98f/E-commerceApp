import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../common";

// interface IProps {}
// {}: IProps

const Main = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
