import React from 'react';
import {shallow, mount} from 'enzyme';
import "./setupTests";
import "./root-test";

import Header from '../containers/Header';
import {setAuthentification} from '../actions';
import {incrementActionCount} from '../actions';
import AuthentificationReducer from '../reducers/authentificationReducer';
import {SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT} from '../actions/action-types';

import RootTest from './root-test';

describe("Test sur header", () => {
    it("render du composant connecté sans erreur", () => {
        const wrapper = shallow(
            <RootTest>
                <Header/>
            </RootTest>
        );
    });
    it("Test du libellé du bouton connexion est bien 'connexion' puis 'deconnexion' apres chaque clic", () => {
        const wrapper = mount(
            <RootTest>
                <Header/>
            </RootTest>
        );
        expect(wrapper.find("a").at(2).text()).toEqual("Connexion");
        wrapper.find("a").at(2).simulate("click");
        expect(wrapper.find("a").at(2).text()).toEqual("Deconnexion");
    });
    it("test le payload d'une action", () => {
        const action = incrementActionCount();
        expect(action.type).toEqual(INCREMENT_ACTION_COUNT)

    });
    it("test le reducer authentification", () => {
        
        const action = {type: SET_AUTHENTIFICATION, payload: true};
        const initialState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initialState, action).isLoggedIn).toEqual(true);

    });
});

