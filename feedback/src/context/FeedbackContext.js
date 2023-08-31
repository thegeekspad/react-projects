import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1',
      rating: '5',
    },
  ]);
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
