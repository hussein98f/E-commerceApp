import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  useDeleteDashboardProductsMutation,
  useGetDashboardProductsQuery,
} from "../../app/services/products";
import { Link } from "react-router-dom";
import { AlertDialogGlobal, CustomModal } from "../../common";
import { useEffect, useState } from "react";

interface IProps {}

const ProductList = ({}: IProps) => {
  const [clickedProductId, setClickedProductId] = useState(null);
  const [productToEdite, setProductToEdite] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isModelOpen,
    onOpen: onModelOpen,
    onClose: onModelClose,
  } = useDisclosure();

  const [distroyProduct, { isLoading: isDestroy, isSuccess }] =
    useDeleteDashboardProductsMutation();
  const { isLoading, data, error } = useGetDashboardProductsQuery({ page: 1 });
  useEffect(() => {
    if (isSuccess) {
      setClickedProductId(null);
      onClose();
    }
  }, [isSuccess]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProductToEdite({
      ...productToEdite,
      [name]: value,
    });
  };
  const intigerChangeHandler = (value, name) => {
    setProductToEdite({
      ...productToEdite,
      [name]: +value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(productToEdite);
  };

  if (!data) return <h1>No data</h1>;

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Title</Th>
              <Th>Price</Th>
              <Th>Brand</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data?.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.Title}</Td>
                  <Td>{item.Price} SYP</Td>
                  <Td>{item.Brand}</Td>
                  <Td display={"flex"} gap={2}>
                    <Button
                      as={Link}
                      to={`/product/${item.documentId}`}
                      size={"sm"}
                      rounded={"sm"}
                      colorScheme="purple"
                      variant="solid"
                    >
                      <FaRegEye />
                    </Button>
                    <Button
                      size={"sm"}
                      rounded={"sm"}
                      colorScheme="blue"
                      variant="outline"
                      onClick={() => {
                        setProductToEdite(item);
                        onModelOpen();
                      }}
                    >
                      <FaPencilAlt />
                    </Button>
                    <Button
                      onClick={() => {
                        setClickedProductId(item.documentId);
                        onOpen();
                      }}
                      size={"sm"}
                      rounded={"sm"}
                      colorScheme="red"
                      variant="outline"
                    >
                      <MdDelete />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>id</Th>
              <Th>Title</Th>
              <Th>Price</Th>
              <Th>Brand</Th>
              <Th>Actions</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <AlertDialogGlobal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={"ok To delete"}
        desc={"u deleting product"}
        // cancelText={""}
        okText={"Destroy"}
        onOkHandler={() => distroyProduct(clickedProductId)}
        isLoading={isDestroy}
      />
      {/* isModelOpen onModelOpen onModelClose */}
      <CustomModal
        isOpen={isModelOpen}
        onClose={onModelClose}
        okText={"Ok"}
        title={"EditItem"}
        cancelText={"Cancel"}
        onSubmitH={onSubmitHandler}
      >
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Product Title"
            name="Title"
            value={productToEdite?.Title}
            onChange={onChangeHandler}
          />
        </FormControl>

        <FormControl my={3}>
          <FormLabel>Price</FormLabel>
          <NumberInput
            name="Price"
            defaultValue={productToEdite?.Price}
            onChange={(value) => {
              intigerChangeHandler(value, "Price");
            }}
            precision={2}
            step={0.2}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Count in Stock</FormLabel>
          <NumberInput
            name="Stock"
            defaultValue={productToEdite?.Stock}
            onChange={(value) => {
              intigerChangeHandler(value, "Stock");
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </CustomModal>
    </>
  );
};

export default ProductList;
