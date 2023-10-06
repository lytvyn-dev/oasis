import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";

import { HiXMark, HiOutlineClipboardDocument, HiOutlinePencil } from "react-icons/hi2";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import EmDash from "../../ui/EmDash";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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

  const [isEdit, setIsEdit] = useState(false);

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const formIsWorking = isDeleting || isCreating;

  return (
    <>
      <TableRow role="row">
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
          <button type="button" disabled={formIsWorking} onClick={() => setIsEdit(true)}>
            <HiOutlinePencil />
          </button>
          <button type="button" disabled={formIsWorking} onClick={() => deleteCabin(id)}>
            <HiXMark />
          </button>
        </div>
      </TableRow>
      {isEdit && (
        <Modal onClose={() => setIsEdit(false)}>
          <CreateCabinForm edit={data} onClose={() => setIsEdit(false)} />
        </Modal>
      )}
    </>
  );
};

export default CabinRow;
