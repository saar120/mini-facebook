import styled from "styled-components";
import COLORS from "../../../../constants/colors";

const HeaderStyled = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  text-align: left;
  max-width: 400px;
  .header {
    color: ${COLORS.PRIMARY};
    font-size: 2.5rem;
  }
  .content {
    font-size: 1.2rem;
  }
`;

export default HeaderStyled;
