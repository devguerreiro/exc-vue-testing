export default {
  // eslint-disable-next-line no-undef
  post: jest.fn().mockImplementation((url, body) => {
    return new Promise(resolve => {
      if (Object.keys(body).length == 0) throw Error();

      resolve({ token: "123", refresh_token: "321" });
    });
  })
};
