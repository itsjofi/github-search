import React from 'react';

//CHART
import { Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

//UTILS
import { months } from './static';
import { parseData } from './helper';

//UI
import * as styled from './index.style';

//REDUX
import { connect } from 'react-redux';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <styled.TooltiContainer className='custom-tooltip'>
        <span>{months[label]}</span>
        <span>Quantidade: {payload[0].payload.value}</span>
      </styled.TooltiContainer>
    );
  }

  return null;
};

const Chart = props => {
  if (props.list && props.list[props.id]) {
    return (
      <styled.ChartContainer>
        <styled.Title>Commits por semana:</styled.Title>
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
    );
  }

  return null;
};

export default connect(state => ({
  list: state.Repositories.activity,
}))(Chart);
