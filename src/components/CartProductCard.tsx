import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IProduct } from "../interfaces";
import { removeFromCart } from "../app/features/shop/cartSlice";
import { useAppDispatch } from "../app/hooks";

interface IProps {
  product: IProduct;
}

const CartProductCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <Card variant="outline">
      <Stack display={"flex"} alignItems={"center"} flexDirection={"row"}>
        <Image
          rounded={"full"}
          objectFit="cover"
          height={"80px"}
          minW={"80px"}
          src={`${import.meta.env.VITE_BASE_URL}${
            product.Thumbnail?.formats.thumbnail.url
          }`}
          alt=""
        />
        <CardBody p={2} m={0}>
          <Heading size="xs">{product.Title}</Heading>
          <Text size="xs">{product.qt}</Text>
          <Text size="xs">{product.Price}ل.س</Text>
        </CardBody>
      </Stack>
      <CardFooter p={2}>
        <Button
          onClick={() => dispatch(removeFromCart(product.id))}
          size={"sm"}
          width={"full"}
          p={2}
          variant="outline"
          colorScheme="red"
          rounded={"sm"}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartProductCard;
