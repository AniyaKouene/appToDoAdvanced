import {combineReducers} from 'redux';

import {reducer as form} from 'redux-form';

import AuthentificationReducer from './authentificationReducer';
import ActionInfoReducer from './actionInfoReducer';
import RessourcesReducer from './ressourcesReducer';
import ErrorsReducer from './errorsReducer';


const rootReducer = combineReducers({
authentification: AuthentificationReducer,
actionInfo: ActionInfoReducer,
ressources: RessourcesReducer,
errors: ErrorsReducer,
form,
});

export default rootReducer;