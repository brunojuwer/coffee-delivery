import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ButtonContainer } from "./styles";

interface ProductId {
  id: string
}

export function RemoveButton({id}: ProductId) {
  const {handleRemoveProduct} = useContext(CartContext);

  return (
    <ButtonContainer onClick={() => handleRemoveProduct(id)}>
      <i><Trash size={16} /></i>
      REMOVER
    </ButtonContainer>
  )
}