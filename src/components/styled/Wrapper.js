import styled from "styled-components";

const setVariant = {
  small: "400px",
  medium: "800px",
  large: "1200px",
};

const Wrapper = styled.div`
  display: flex;
  width: ${(props) => setVariant[props.variant || "medium"]};
  margin: 0 auto;
  margin-top: 8px;
`;

export default Wrapper;
