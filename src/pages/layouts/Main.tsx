import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../common";
import { Container } from "@chakra-ui/react";
import CartDrawer from "../../common/CartDrawer";
// interface IProps {}
// {}: IProps

const Main = () => {
  return (
    <>
      <Container as={"header"} px={0} minW="full">
        <Header />
      </Container>
      <Container as={"main"} px={0} py={5} maxW={1200}>
        <Outlet />
      </Container>
      <Container as={"footer"} px={0} maxW={1200}>
        <Footer />
      </Container>
      <CartDrawer />
    </>
  );
};

export default Main;
