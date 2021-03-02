import React from 'react';

//COMPONENTS
import Chart from '../Chart';

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
import repositoriesActions from '../../redux/repositories/actions';

//TODO juntar de quatro em quatro semanas e formar os meses e mostra a quantidade commits por mes
const List = props => {
  const [expanded, setExpanded] = React.useState([]);
  const [isChartLoading, setIsChartLoading] = React.useState(false);

  const handleExpand = ({ id, owner, name }) => {
    let newExpanded = [...expanded],
      indexOfCurrentId = expanded.indexOf(id);

    if (expanded.includes(id)) {
      newExpanded.splice(indexOfCurrentId, 1);
    } else {
      newExpanded.push(id);

      props.fetchRepositoryCommitActivity(owner.login, name, id, loading =>
        setIsChartLoading(loading)
      );
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
                  onClick={() => handleExpand(item)}>
                  <styled.HeaderWrapper>
                    <styled.Title>{item.full_name}</styled.Title>
                    <Tooltip title='Estrelas' arrow={true}>
                      <span>
                        <FontAwesomeIcon icon={faStar} style={{ marginRight: '0.3rem' }} />{' '}
                        {item.stargazers_count}
                      </span>
                    </Tooltip>
                  </styled.HeaderWrapper>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: createTextLinks(item.description),
                    }}></span>
                </styled.ListItem>

                {expanded.includes(item.id) ? (
                  <>
                    <styled.ListItem backgroundColor='rgba(0, 0, 0, 0.1)'>
                      <styled.DetailsWrapper>
                        {item.language ? (
                          <Tooltip title='Linguagem' arrow={true}>
                            <styled.Text>
                              <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.3rem' }} />{' '}
                              {item.language}
                            </styled.Text>
                          </Tooltip>
                        ) : null}

                        <Tooltip title='Forks' arrow={true}>
                          <styled.Text>
                            <FontAwesomeIcon
                              icon={faCodeBranch}
                              style={{ marginRight: '0.3rem' }}
                            />{' '}
                            {item.forks_count}
                          </styled.Text>
                        </Tooltip>
                        <Tooltip title='Licença' arrow={true}>
                          <styled.Text>
                            <FontAwesomeIcon icon={faFile} style={{ marginRight: '0.3rem' }} />{' '}
                            {item.license ? item.license.name : 'Sem licença'}
                          </styled.Text>
                        </Tooltip>
                        <Tooltip title='Criado em'>
                          <styled.Text>
                            <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '0.3rem' }} />{' '}
                            {dayjs(item.created_at).format('DD/MM/YYYY')}
                          </styled.Text>
                        </Tooltip>
                      </styled.DetailsWrapper>
                      {isChartLoading ? <CircularProgress /> : <Chart id={item.id} />}
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

const { fetchRepositoryCommitActivity } = repositoriesActions;

export default connect(
  state => ({
    list: state.Repositories.list,
    isLoading: state.App.isLoading,
  }),
  { fetchRepositoryCommitActivity }
)(List);
