import { Trash } from "phosphor-react";
import { ButtonContainer } from "./styles";

export function RemoveButton() {
  return (
    <ButtonContainer>
      <i><Trash size={16} /></i>
      REMOVER
    </ButtonContainer>
  )
}