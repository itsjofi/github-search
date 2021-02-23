import React from 'react';

//UI
import { Grid } from '@material-ui/core';
import * as styled from './index.style';

//REDUX
import { connect } from 'react-redux';

//TODO da para fazer um expandable para ver mais detalhes do repositorio e o grafico

const List = props => {
  return (
    <styled.Container container>
      <Grid item md={6} sm={12} xs={12} style={{ margin: '1rem 0' }}>
        <styled.UnorderedList>
          {props.list.items.map(item => {
            return (
              <React.Fragment key={item.id}>
                <styled.ListItem>
                  <span>{item.full_name}</span>
                  <span>{item.description}</span>
                </styled.ListItem>
                <styled.Divider />
              </React.Fragment>
            );
          })}
        </styled.UnorderedList>
      </Grid>
    </styled.Container>
  );
};

export default connect(state => ({
  list: state.Repositories.list,
}))(List);
