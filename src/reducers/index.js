import {combineReducers} from 'redux';

import AuthentificationReducer from './authentificationReducer';
import ActionInfoReducer from './actionInfoReducer';
import RessourcesReducer from './ressourcesReducer';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
authentification: AuthentificationReducer,
actionInfo: ActionInfoReducer,
ressources: RessourcesReducer,
form,
});

export default rootReducer;