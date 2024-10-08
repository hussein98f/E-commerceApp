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
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { MdPhotoLibrary } from "react-icons/md";
import { IconButton } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { IProduct } from "../interfaces";
import ProductRate from "./ProductRate";
import { Link } from "react-router-dom";

interface IProps {
  data: IProduct;
}

const ProductsCard = ({ data }: IProps) => {
  return (
    <Card borderRadius="md" maxW="sm">
      <CardBody p={2.5}>
        <Image
          mx="auto"
          src={`${import.meta.env.VITE_BASE_URL}${
            data.Thumbnail?.formats.thumbnail.url
          }`}
          alt="Green double couch with wooden legs"
          borderRadius="md"
          position="relative"
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="blue"
          aria-label="favorite"
          fontSize="14px"
          position="absolute"
          top={2.5}
          m={0.5}
          p={0}
          minW="30px"
          h="30px"
          icon={<FaRegHeart />}
        />
        <Stack spacing="1" pt={1}>
          <Box overflow="hidden" noOfLines={2}>
            <Text as="span" fontSize="0.8em" fontWeight={600} me={1}>
              {data.Brand}
            </Text>
            <Heading as="h3" display="inline" fontSize="0.8em" fontWeight={300}>
              {data.Title}
            </Heading>
          </Box>
          <Box display="flex" mt="1" alignItems="center">
            <Box as="span" me={1.5} fontSize="sm">
              {data.Rating}
            </Box>
            <ProductRate averageRating={data.Rating} />

            <Text mx={1.5} fontSize="xs" fontWeight={300}>
              (4262)
            </Text>
            <MdPhotoLibrary size="14px" />
          </Box>
          <Box mt={1.5} mb={1.5} display="flex" alignItems="center" gap={1.5}>
            <Text fontSize={15}>{data.Price}</Text>
            <Text as="span" fontSize="0.8em" fontWeight={400} me={1}>
              ل.س
            </Text>
          </Box>
          <Box flexWrap="wrap" display="flex" alignItems="center" gap={1}>
            <Tag size="sm" rounded="sm" variant="subtle" colorScheme="orange">
              <TagLeftIcon m={1} boxSize="11px" as={FaRegHeart} />
              <TagLabel noOfLines={2} fontWeight={300} fontSize={12}>
                تنزيلات 50%
              </TagLabel>
            </Tag>
            <Tag size="sm" rounded="sm" variant="subtle" colorScheme="blue">
              <TagLeftIcon m={1} boxSize="11px" as={FaRegHeart} />
              <TagLabel fontWeight={300} fontSize={12}>
                منتج متميز
              </TagLabel>
            </Tag>
            <Tag size="sm" rounded="sm" variant="subtle" colorScheme="red">
              <TagLeftIcon m={1} boxSize="11px" as={FaRegHeart} />
              <TagLabel fontWeight={300} fontSize={12}>
                يباع بكثرة
              </TagLabel>
            </Tag>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter px={2.5} py={0} pb={2.5}>
        <Button
          as={Link}
          to={`/product/${data.documentId}`}
          size="sm"
          rounded="md"
          w="full"
          fontWeight={300}
          fontSize={13}
        >
          عرض المنتج
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
