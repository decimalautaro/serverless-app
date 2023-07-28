module.exports.hello = async (event) => {
  // code 
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello word!',
      },
      null,
      2
    ),
  };
};
