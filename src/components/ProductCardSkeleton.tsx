import {
  Card,
  CardBody,
  Stack,
  CardFooter,
  Box,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card borderRadius="md" maxW="sm">
      <CardBody p={2.5}>
        <Skeleton w="100%" h="156px" />

        <Stack spacing="1" pt={1} gap={3}>
          <SkeletonText
            my={1.5}
            noOfLines={2}
            spacing="3"
            skeletonHeight="11px"
          />
          <Skeleton height="18px" w="180px" />
          <SkeletonText
            noOfLines={1}
            w="70px"
            spacing="2"
            skeletonHeight="21px"
          />
          <Box flexWrap="wrap" display="flex" alignItems="center" gap={1}>
            <Skeleton w="70px" h="20px" rounded="sm" />
            <Skeleton w="100px" h="20px" rounded="sm" />
            <Skeleton w="120px" h="20px" rounded="sm" />
          </Box>
        </Stack>
      </CardBody>
      <CardFooter px={2.5} py={0} pb={2.5}>
        <Skeleton w={"100%"} height="32px" rounded="md" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
