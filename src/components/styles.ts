import styled from "styled-components";

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--green-700);
  padding: 0.625rem 1rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--white);
  }

  button {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--white);

    &:hover {
      background: #00a98e !important;
      color: var(--white) !important;
    }
  }
  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--white);

    &:hover {
      background: #00a98e !important;
      color: var(--white) !important;
    }
  }
`;

export const SelectOptions = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start !important;
  p {
    color: var(--gray-900);
  }
  small {
    color: var(--gray-800);
  }
`;
