import styled from "styled-components";
import COLORS from "../../../../constants/colors";

const AddPostStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(300px, 40vw, 800px);
  padding: 1rem;
  background-color: ${COLORS.WHITE};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    background-color: ${COLORS.GREY};
  }
  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 70%;
    border: 1px solid #ccc;
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${COLORS.PRIMARY_LIGHT};
    }
  }
`;

export default AddPostStyled;
