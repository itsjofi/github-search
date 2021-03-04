import React from 'react';

//CHART
import { Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { CircularProgress } from '@material-ui/core';

//UTILS
import { parseData } from './helper';

//UI
import * as styled from './index.style';

//REDUX
import { connect } from 'react-redux';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <styled.TooltiContainer className='custom-tooltip'>
        <span>{payload[0].payload.name}</span>
        <span>Quantidade: {payload[0].payload.value}</span>
      </styled.TooltiContainer>
    );
  }

  return null;
};

const Chart = props => {
  if (props.isLoading) {
    return (
      <styled.LoaderWrapper>
        <CircularProgress />
      </styled.LoaderWrapper>
    );
  }

  if (props.list && props.list[props.id]) {
    const hasSomeCommits = Object.values(props.list[props.id]).some(item => item > 0);

    return (
      <>
        {hasSomeCommits ? (
          <styled.ChartContainer>
            <span>Commits das últimas 52 semanas</span>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                width={150}
                height={40}
                data={parseData(props.list[props.id])}
                margin={{
                  top: 16,
                  bottom: 16,
                  left: 0,
                  right: 0,
                }}>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey='value' fill='#8884d8' />
              </BarChart>
            </ResponsiveContainer>
          </styled.ChartContainer>
        ) : (
          <styled.ImageContainer>
            <span>Nenhum histórico de commits encontrado</span>
            <img src='/notFound.svg' height={450} width={350} />
          </styled.ImageContainer>
        )}
      </>
    );
  }

  return null;
};

export default connect(state => ({
  list: state.Repositories.activity,
}))(Chart);
