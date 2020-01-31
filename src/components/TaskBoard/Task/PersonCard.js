import React from 'react';

const PersonCard = ({name, department}) => (
    <span className={`person-card ${department}`}>
        <span className="name">{name}</span>
        <span className="department">{department}</span>
    </span>
);

export default PersonCard;