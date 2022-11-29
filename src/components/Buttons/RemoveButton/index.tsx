import { Trash } from "phosphor-react";
import { ButtonContainer } from "./styles";

export function RemoveButton() {
  return (
    <ButtonContainer>
      <Trash size={16} />
    </ButtonContainer>
  )
}