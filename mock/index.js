export default [
  {
    type: 'get',
    url: '/user/login',
    response: () => {
      return { isAuth: true, code: 200, msg: 'ζεδΊ' };
    },
  },
];
