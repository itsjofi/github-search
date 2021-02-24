import React from 'react';

//UI
import { Tooltip, CircularProgress } from '@material-ui/core';
import * as styled from './index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch, faFile } from '@fortawesome/free-solid-svg-icons';

//REDUX
import { connect } from 'react-redux';

const List = props => {
  const [expanded, setExpanded] = React.useState([]);

  const handleExpand = id => {
    let newExpanded = [...expanded],
      indexOfCurrentId = expanded.indexOf(id);

    if (expanded.includes(id)) {
      newExpanded.splice(indexOfCurrentId, 1);
    } else {
      newExpanded.push(id);
    }

    setExpanded([...newExpanded]);
  };

  if (props.isLoading) {
    return (
      <styled.Container container>
        <styled.LoaderWrapper item md={6} sm={12} xs={12}>
          <CircularProgress size={70} />
        </styled.LoaderWrapper>
      </styled.Container>
    );
  }

  return (
    <styled.Container container>
      <styled.ListWrapper item md={6} sm={12} xs={12}>
        <styled.UnorderedList>
          {props.list.items.map(item => {
            return (
              <React.Fragment key={item.id}>
                <styled.ListItem cursor='pointer' onClick={() => handleExpand(item.id)}>
                  <styled.Title>{item.full_name}</styled.Title>
                  <span>{item.description}</span>
                </styled.ListItem>
                <styled.Divider />
                {expanded.includes(item.id) ? (
                  <styled.ListItem direction='row'>
                    <Tooltip title='Estrelas' arrow={true}>
                      <span>
                        <FontAwesomeIcon icon={faStar} style={{ marginRight: '0.5rem' }} />{' '}
                        {item.stargazers_count}
                      </span>
                    </Tooltip>
                    <Tooltip title='Forks' arrow={true}>
                      <span>
                        <FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: '0.5rem' }} />{' '}
                        {item.forks_count}
                      </span>
                    </Tooltip>
                    {item.license ? (
                      <Tooltip title='Licença' arrow={true}>
                        <span>
                          <FontAwesomeIcon icon={faFile} style={{ marginRight: '0.5rem' }} />{' '}
                          {item.license.name}
                        </span>
                      </Tooltip>
                    ) : null}
                  </styled.ListItem>
                ) : null}
              </React.Fragment>
            );
          })}
        </styled.UnorderedList>
      </styled.ListWrapper>
    </styled.Container>
  );
};

export default connect(state => ({
  list: state.Repositories.list,
  isLoading: state.App.isLoading,
}))(List);
