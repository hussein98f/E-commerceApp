import {
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  AlertDialog,
} from "@chakra-ui/react";
import { useRef } from "react";

interface IProps {
  isOpen: boolean;
  onOpen: boolean;
  onClose: boolean;
}

const AlertDialogGlobal = ({
  isOpen,
  onClose,
  title,
  desc,
  cancelText = "Cancel",
  okText = "Ok",
  onOkHandler,
  isLoading,
}: IProps) => {
  const cancelRef = useRef();
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{desc}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            colorScheme="red"
            ml={3}
            onClick={onOkHandler}
            isLoading={isLoading}
          >
            {okText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogGlobal;
