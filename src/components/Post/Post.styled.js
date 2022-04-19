import styled from "styled-components";

import COLORS from "../../constants/colors";

const PostStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  width: clamp(300px, 40vw, 800px);
  padding: 1rem;
  background-color: ${COLORS.WHITE};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  .creator {
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-size: 0.9rem;
    cursor: pointer;
    color: ${COLORS.GREY_DARK};
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${COLORS.PRIMARY};
    }
  }
  p {
    font-size: 1.1rem;
  }
`;

export default PostStyled;
