export const handleApiError = error => {
  if (error.response && error.response.status) {
    const errorMessage = error.response.data.message || 'Unknown error';
    const errorCode = error.response.status;
    return { errorMessage, errorCode };
  } else {
    return { errorMessage: 'Server error', errorCode: 500 };
  }
};
