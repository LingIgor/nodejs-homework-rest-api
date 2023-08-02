const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  console.log(status);
  console.log(error.status);
  return error;
};

export default HttpError;
