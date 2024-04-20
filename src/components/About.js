import React from 'react';
import UserCard from './UserCard';
import UserCardClass from './UserCardClass';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-indigo-800">Food Delivery Application</h1>
      <p className="text-lg text-gray-800 w-8/12">Welcome to our food delivery service! We're dedicated to bringing you delicious meals right to your doorstep. Our team is passionate about providing high-quality food and excellent service to make your dining experience enjoyable and convenient.</p>
      <div className="mt-8">
      <p className='text-red-800 text-lg'>Contact - harshit.brizwasi@gmail.com</p>
      </div>
    </div>
  )
}

export default About;
