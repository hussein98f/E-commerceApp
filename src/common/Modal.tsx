import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TbLayoutGridRemove } from "react-icons/tb";

interface IProps {}

const CustomModal = ({
  isOpen,
  onClose,
  title,
  cancelText,
  okText,
  children,
  onSubmitH,
}) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as={"form"} onSubmit={onSubmitH}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>

        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3}>
            {okText}
          </Button>
          <Button onClick={onClose}>{cancelText}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
