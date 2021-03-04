import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: inherit;
  height: 35vh;

  & > span {
    margin: 1rem;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TooltiContainer = styled.div`
  background-color: #fff;
  color: #2f363d;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  & > span {
    text-align: center;
  }
`;
