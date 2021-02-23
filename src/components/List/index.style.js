import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UnorderedList = styled.ul`
  width: 100%;
  background-color: #2f363d;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
`;

export const ListItem = styled.li`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Divider = styled.li`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`;
