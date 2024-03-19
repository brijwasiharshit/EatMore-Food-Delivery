import React, { useState } from 'react';

const UserCard = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
  return (
    <div className='user-card'>
      <h2>{name}</h2>
      <h2>count = {count}</h2>
      <h2>count2 = {count2}</h2>
    <h3>User Card Functional</h3>
      <h4>harshit.brizwasi@gmail.com</h4>
    </div>
  )
}

export default UserCard;
