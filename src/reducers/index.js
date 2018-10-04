import {combineReducers} from 'redux';

import AuthentificationReducer from './authentificationReducer';
import ActionInfoReducer from './actionInfoReducer';
import RessourcesReducer from './ressourcesReducer';

const rootReducer = combineReducers({
authentification: AuthentificationReducer,
actionInfo: ActionInfoReducer,
ressources: RessourcesReducer,
});

export default rootReducer;