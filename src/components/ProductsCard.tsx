import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import { IconButton } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

// interface IProps {}

const ProductsCard = () => {
  return (
    <Card borderRadius="md" maxW="sm">
      <CardBody p={2.5}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="md"
          position="relative"
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="red"
          aria-label="favorite"
          fontSize="15px"
          position="absolute"
          top={2.5}
          m={0.5}
          p={0}
          minW="30px"
          h="30px"
          icon={<FaRegHeart />}
        />
        <Stack spacing="1" pt={1}>
          <Box display="inline">
            <Text as="span" fontSize="0.8em" fontWeight={600} me={1}>
              جديد
            </Text>
            <Heading as="h3" display="inline" fontSize="0.8em" fontWeight={300}>
              هذا النص هو مثال لنص يمكن هذا النص هو مثال لنص يمكن
            </Heading>
          </Box>
          <Text fontWeight={200} fontSize="0.76em" textAlign="justify">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من ...
          </Text>
          <Box display="flex" mt="1" alignItems="center">
            <Box as="span" me={1.5} fontSize="sm">
              4.4
            </Box>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <IoIosStar
                  key={i}
                  style={{ color: `${i < 4 ? "#ffef15" : "#c7c7c7"}` }}
                />
              ))}
            <Text mx={1.5} fontSize="xs" fontWeight={300}>
              (4262)
            </Text>
            <MdPhotoLibrary size="14px" />
          </Box>
          <Box mt={2} mb={1} display="flex" alignItems="center" gap={1.5}>
            <Text fontSize="sm">250.20</Text>
            <Text as="span" fontSize="0.8em" fontWeight={400} me={1}>
              ل.س
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter px={2.5} py={0} pb={2.5}>
        <Button size="sm" rounded="md" w="full" fontWeight={300} fontSize={13}>
          عرض المنتج
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
