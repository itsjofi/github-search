import { Grid } from '@material-ui/core';
import styled from 'styled-components';

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
