import React from 'react';

//UI
import { Tooltip, CircularProgress } from '@material-ui/core';
import * as styled from './index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCodeBranch,
  faFile,
  faCode,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

//UTILS
import dayjs from 'dayjs';

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

  const createTextLinks = text =>
    (text || '').replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi, (_, space, url) => {
      let hyperlink = url;

      if (!hyperlink.match('^https?://')) {
        hyperlink = 'http://' + hyperlink;
      }

      return (
        space + '<a style="color:white" target="_blank" href="' + hyperlink + '">' + url + '</a>'
      );
    });

  return (
    <styled.Container container>
      <styled.ListWrapper item md={6} sm={12} xs={12}>
        <styled.UnorderedList>
          {props.list.items.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                <styled.ListItem
                  cursor='pointer'
                  withBorder={true}
                  onClick={() => handleExpand(item.id)}>
                  <styled.Title>{item.full_name}</styled.Title>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: createTextLinks(item.description),
                    }}></span>
                </styled.ListItem>

                {expanded.includes(item.id) ? (
                  <>
                    <styled.ListItem backgroundColor='rgba(0, 0,0,0.1)'>
                      {item.language ? (
                        <Tooltip title='Linguagem' arrow={true}>
                          <span>
                            <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.3rem' }} />{' '}
                            {item.language}
                          </span>
                        </Tooltip>
                      ) : null}
                      <Tooltip title='Estrelas' arrow={true}>
                        <span>
                          <FontAwesomeIcon icon={faStar} style={{ marginRight: '0.3rem' }} />{' '}
                          {item.stargazers_count}
                        </span>
                      </Tooltip>
                      <Tooltip title='Forks' arrow={true}>
                        <span>
                          <FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: '0.3rem' }} />{' '}
                          {item.forks_count}
                        </span>
                      </Tooltip>
                      {item.license ? (
                        <Tooltip title='Licença' arrow={true}>
                          <span>
                            <FontAwesomeIcon icon={faFile} style={{ marginRight: '0.3rem' }} />{' '}
                            {item.license.name}
                          </span>
                        </Tooltip>
                      ) : null}
                      <Tooltip title='Criado em'>
                        <span>
                          <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '0.3rem' }} />{' '}
                          {dayjs(item.created_at).format('DD/MM/YYYY')}
                        </span>
                      </Tooltip>
                    </styled.ListItem>
                  </>
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
