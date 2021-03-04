const actions = {
  FETCH_REPOSITORIES_REQUEST: 'FETCH_REPOSITORIES_REQUEST',
  FETCH_REPOSITORIES_SUCCESS: 'FETCH_REPOSITORIES_SUCCESS',
  FETCH_REPOSITORY_COMMIT_ACTIVITY_REQUEST: 'FETCH_REPOSITORY_COMMIT_ACTIVITY_REQUEST',
  FETCH_REPOSITORY_COMMIT_ACTIVITY_SUCCESS: 'FETCH_REPOSITORY_COMMIT_ACTIVITY_SUCCESS',
  CLEAN_COMMIT_ACTIVITY: 'CLEAN_COMMIT_ACTIVITY',

  fetchRepositories: () => ({
    type: actions.FETCH_REPOSITORIES_REQUEST,
  }),
  fetchRepositoryCommitActivity: (owner, repo, id, switchLoading) => ({
    type: actions.FETCH_REPOSITORY_COMMIT_ACTIVITY_REQUEST,
    owner,
    repo,
    switchLoading,
    id,
  }),
  cleanCommitActivity: () => ({
    type: actions.CLEAN_COMMIT_ACTIVITY,
  }),
};

export default actions;
