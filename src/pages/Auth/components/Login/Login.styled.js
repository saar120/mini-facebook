import styled from "styled-components";
import COLORS from "../../../../constants/colors";

const LoginStyled = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  height: clamp(400px, 30vh, 500px);
  width: clamp(300px, 25vw, 400px);
  background-color: ${COLORS.WHITE};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export default LoginStyled;
