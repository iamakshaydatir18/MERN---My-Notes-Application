import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Notes</h1>
        <p className="text-lg">Your personalized notes dashboard</p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
