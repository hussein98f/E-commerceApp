import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const addItemToShopingCart = (cartItem, ShopingcartItems) => {
  const existsItem = ShopingcartItems.find((item) => item.id === cartItem.id);
  if (existsItem) {
    toast({
      title: "added to your cart",
      description: "disc.....",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    return ShopingcartItems.map((item) =>
      item.id === cartItem.id ? { ...item, qt: item.qt + 1 } : item
    );
  }
  toast({
    title: "added to your cart",
    description: "disc.....",
    status: "success",
    duration: 2000,
    isClosable: true,
  });
  return [...ShopingcartItems, { ...cartItem, qt: 1 }];
};
