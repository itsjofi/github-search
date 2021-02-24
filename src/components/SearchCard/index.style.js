import { Grid } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > svg {
    margin: 0 1rem;
  }
`;

export const Container = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Paper = styled.div`
  padding: 2rem;
  background-color: #2f363d;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0.5rem;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  height: 2.375rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  cursor: pointer;
  width: 100%;

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.5;
    `}
`;

export const ButtonEndIcon = styled.span`
  margin-left: 0.5rem;
`;
