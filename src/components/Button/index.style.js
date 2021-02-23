import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  height: 2.375rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.5;
    `}
`;

export const EndIcon = styled.span`
  margin-left: 0.5rem;
`;
