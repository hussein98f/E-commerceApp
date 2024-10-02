import { ProductCard } from "../components";
import {
  Grid,
  Container,
  Heading,
  Spacer,
  Box,
  Flex,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { IoArrowUndoOutline } from "react-icons/io5";
import { BsPatchCheck } from "react-icons/bs";

const ProductsPage = () => {
  const { colorMode } = useColorMode();
  return (
    <Container
      borderRadius="md"
      maxW="full"
      background={
        colorMode === "dark"
          ? "linear-gradient(186deg, #4158D0 2%, #C850C0 15%, #cd942e 30%,  transparent 50%),linear-gradient(180deg, #C850C9 20%, #1a202c 60%)"
          : "linear-gradient(186deg, #4158D0 2%, #C850C0 15%, #cd942e 30%,  transparent 50%),linear-gradient(180deg, #C850C9 20%, #fff 60%)"
      }
    >
      <Flex py={4} px={2}>
        <Box display="flex" alignItems="center" gap={2} color="white">
          <BsPatchCheck size="23px" />
          <Heading as="h2" fontWeight={400} size="md">
            المنتجات المميزة
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button
            rightIcon={<IoArrowUndoOutline size="19px" />}
            variant="ghost"
            size="sm"
            fontSize="sm"
            fontWeight={400}
            color="white"
            _hover={{ bg: "#fffff929" }}
          >
            كل المنتجات
          </Button>
        </Box>
      </Flex>
      <Grid templateColumns="repeat(auto-fill,minmax(200px, 1fr))" gap={4}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Container>
  );
};

export default ProductsPage;
