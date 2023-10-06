import CabinsHeader from "../features/cabins/CabinsHeader";
import CabinTable from "../features/cabins/CabinTable";
import ButtonGroup from "../ui/ButtonGroup";
import Button from "../ui/Button";
import PageLayout from "../ui/PageLayout";
import styled from "styled-components";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";

const AddCabinBtn = styled(Button)`
  align-self: flex-start;
`;

function Cabins() {
  const [isForm, setIsForm] = useState(false);

  const onCloseForm = () => {
    setIsForm(false);
  };

  return (
    <PageLayout>
      <CabinsHeader />
      <CabinTable />
      <AddCabinBtn onClick={() => setIsForm(!isForm)} variation="primary" size="medium">
        Add new Cabin
      </AddCabinBtn>
      {isForm && (
        <Modal onClose={onCloseForm}>
          <CreateCabinForm onClose={onCloseForm} />
        </Modal>
      )}
    </PageLayout>
  );
}

export default Cabins;
