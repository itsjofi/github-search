import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled(Grid)`
  margin: 1rem 0 !important;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 70vh;
`;

export const LoaderWrapper = styled(Grid)`
  margin: 1rem 0 !important;
  overflow: hidden;
  max-height: 70vh;
  min-height: 70vh;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${props => (props.direction ? 'flex-start' : 'center')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'unset')};
  border-bottom: ${props => (props.backgroundColor ? 'none' : '1px solid rgba(0,0,0,0.2)')};
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 1rem;
  cursor: ${props => (props.cursor ? props.cursor : 'default')};
  min-height: ${props => (props.direction ? 'unset' : '4.7rem')};

  & > span {
    margin: ${props => (props.direction ? '0.5rem 0.5rem 0.5rem 0' : '0.5rem 0 0 0')};
  }
`;

export const Divider = styled.li`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: #fff;
`;

export const Title = styled.span`
  font-weight: 800;
`;
