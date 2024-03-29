import { useDispatch } from 'react-redux';
import * as appActionCreators from './app/app.actionCreators';
import * as loginActionCreators from './login/login.actionCreators';
import * as dashboardActionCreators from './dashboard/dashboard.actionCreators';
import { bindActionCreators } from 'redux';
// import * as loginActionCreators from './login/login.actionCreators';

// экспорт хука, в котором находятся все экшены приложения
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...appActionCreators,
      ...loginActionCreators,
      ...dashboardActionCreators,
    },
    dispatch,
  );
};
