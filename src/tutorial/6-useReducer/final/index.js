import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
};
const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    console.log(state);

    //NOTE:so in our case action = {type: 'TESTING'}
    //NOTE: so we choose the operation we gonna do with the state through setting type, and the n we catch this type and do the operation in reducer
    const newPeople = [...state.people, action.payload];
    //NOTE: here we add new items from dispatcher

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };

    //NOTE: if we don't return anything state will be undefined, so we always always have to return something
    //NOTE: whatever we return here will be a new state
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  //NOTE:common practice to call the function 'dispatch'
  //NOTE: it takes two arguments: reducer funtion and state that is defined by reducer function
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: Date.now(), name };

      //NOTE: so we always, always need to pass in the object with a property by the name of type. So that is going to be our action. Action is an object and there has to be a property with the name of type and value in uppercase(common practice) and between words we use underscore
      //NOTE:and once we call the dispatch function the argument of this function will go to reducer as action parameter
      //NOTE: we can pass in reducer new items if we add more arguments in reduce function common practise is to call the new item 'payload'

      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add item </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
