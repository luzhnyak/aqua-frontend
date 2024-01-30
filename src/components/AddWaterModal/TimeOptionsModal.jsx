import React from 'react';

const generateTimeOptions = () => {
  const options = [];
  for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes += 5) {
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      options.push({
        value: `${formattedHours}:${formattedMinutes}`,
        label: `${formattedHours}:${formattedMinutes}`,
      });
    }
  }
  return options;
};

export const TimeOptionsModal = () => {
  return (
    <>
      <p>Welcome</p>
    </>
  );
};
