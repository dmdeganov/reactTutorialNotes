import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name');
  const { personID } = useParams();
  console.log(personID);

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(personID));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
