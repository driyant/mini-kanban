import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const DialogModal = ({
  title,
  children,
  modalIsOpen,
  modalIsClose,
  createTaskHandler,
  deleteHandler,
  updateHandler
}) => {
  const getFirstTitle = title.split(" ")[0].toLowerCase();
  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={modalIsClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" alignItems="center">
            {getFirstTitle === "delete" && (
              <DeleteIcon boxSize={5} color="red" marginRight="0.5rem" />
            )}
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter paddingRight="0">
            <Button marginRight="1rem" onClick={modalIsClose}>
              Close
            </Button>
            {(getFirstTitle === "create" || getFirstTitle === "edit") && (
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                onClick={getFirstTitle === "create" ? createTaskHandler : updateHandler}
              >
                Save Task
              </Button>
            )}
            {getFirstTitle === "delete" && (
              <Button colorScheme="red" mr={3} onClick={deleteHandler}>
                Delete
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DialogModal;
