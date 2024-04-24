import { Container } from "@mui/material";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const LayoutHeader = styled.header`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.26);
  height: 2.5rem;
  z-index: 10;
  padding: 0.625rem;
  img {
    width: 4.625rem;
  }
`;

export const LayoutMain = styled.main`
  background-color: var(--gray-100);
  padding: 2.5rem;
  flex: 1;
`;

export const CustomContainer = styled(Container)(
  () => `
  background-color: var(--white);
  padding: 0 !important;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.26);
`
);
