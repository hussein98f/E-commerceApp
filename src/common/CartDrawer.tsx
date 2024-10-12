import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { onCloseCartDrawer, selecGlobal } from "../app/features/globalSlice";
import { useAppDispatch } from "../app/hooks";
import CartProductCard from "../components/CartProductCard";
import { clearAllFromCart, selectCart } from "../app/features/shop/cartSlice";

const CartDrawer = () => {
  const dispatch = useAppDispatch();
  const btnRef = useRef();
  const { isOpenCartDrawer } = useSelector(selecGlobal);
  const onClose = () => dispatch(onCloseCartDrawer());
  const { product } = useSelector(selectCart);
  return (
    <Drawer
      isOpen={isOpenCartDrawer}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Shoping Cart</DrawerHeader>

        <DrawerBody>
          {product?.map((item) => (
            <CartProductCard key={item.documentId} product={item} />
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button
            colorScheme="red"
            variant="outline"
            mr={3}
            onClick={() => dispatch(clearAllFromCart())}
          >
            Clear All
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
