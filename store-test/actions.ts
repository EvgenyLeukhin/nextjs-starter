import { useDispatch } from 'react-redux';
import * as appActionCreators from './app/app.actionCreators';
import { bindActionCreators } from 'redux';
// import * as loginActionCreators from './login/login.actionCreators';

// экспорт хука, в которомнаходятся все экшены приложения
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...appActionCreators,
      // ...loginActionCreators,
    },
    dispatch,
  );
};
