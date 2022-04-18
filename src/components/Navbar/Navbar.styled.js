import styled from "styled-components";

import COLORS from "../../constants/colors";

const NavbarStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background-color: ${COLORS.PRIMARY_LIGHT};
  font-size: 1.2rem;
  button {
    color: ${COLORS.WHITE};
  }
`;

export default NavbarStyled;
