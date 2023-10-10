import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const StyledButton = styled(Button)`
  align-self: flex-start;
`;

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="create-cabin">
        <StyledButton size="medium" variation="primary">
          Add new Cabin
        </StyledButton>
      </Modal.Open>
      <Modal.Window name="create-cabin">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
