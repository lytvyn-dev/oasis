import styled from "styled-components";
import { HiXMark, HiOutlineClipboardDocument, HiOutlinePencil } from "react-icons/hi2";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import EmDash from "../../ui/EmDash";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.p`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.p`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ data }) => {
  const { maxCapacity, name, regularPrice, discount, id, image } = data;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const formIsWorking = isDeleting || isCreating;

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <p>Fits up to {maxCapacity} guests</p>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{discount ? formatCurrency(discount) : <EmDash />}</Discount>
        <div>
          <button
            type="button"
            disabled={formIsWorking}
            onClick={() =>
              createCabin({
                ...data,
                id: (Math.random() * 1000).toFixed(),
                name: `Copy of ${name}`,
              })
            }
          >
            <HiOutlineClipboardDocument />
          </button>

          <Modal>
            <Modal.Open opens="edit-cabin">
              <button disabled={formIsWorking}>
                <HiOutlinePencil />
              </button>
            </Modal.Open>
            <Modal.Window name="edit-cabin">
              <CreateCabinForm edit={data} />
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open opens="edit-cabin">
              <button type="button" disabled={formIsWorking}>
                <HiXMark />
              </button>
            </Modal.Open>
            <Modal.Window name="edit-cabin">
              <ConfirmDelete
                resourceName="cabin"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(id)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
};

export default CabinRow;
