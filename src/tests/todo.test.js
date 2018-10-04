import React from 'react';
import ReactDOM from 'react-dom';

import "./setupTests";
import "./root-test";

import {shallow} from 'enzyme';

import Todo from '../components/ToDo';

describe( "Test Todo fonctionnement", function(){
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Todo/>);
    });
    afterEach(() => {
        wrapper.unmount();
    })
    it("render le composant Todo sans erreur", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Todo/>, div);
    });
    it("Contient la chaine de caracteres 'Nouvelle tache' ", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Todo/>, div);
        expect(div.innerHTML).toContain("Nouvelle tâche")
    });
    it("render le composant Todo sans erreur avec shallow", () => {
        expect(wrapper.html()).toContain("Nouvelle tâche")
    });
    it("Possède un id 'addButton'", () => {
        expect(wrapper.find("#addButton").length).toEqual(1)
    });
    it("change valeur input", () => {
        wrapper.find("input").simulate("change", {
            target: {value: "Yo"}
        });
        expect(wrapper.find("input").prop("value")).toEqual("Yo")
    });
    it("saisie une valeur dans l'input clique sur le bouton et verifie que le texte est dans la liste ", () => {
        wrapper.find("input").simulate("change", {
            target: {value: "Yo"}
        });
        wrapper.find("button").simulate("click");
        expect(wrapper.find(".list-group-item").text()).toContain("Yo")
    });
});


