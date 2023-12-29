// import NextAuth from 'next-auth';

// const options = {
//   providers: [],
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token = {
//           ...token,
//           id: user.id,
//           username: user.username,
//           accessToken: user.accessToken,
//         };
//       }
//       return token;
//     },
//     session: async ({ session, token }) => {
//       if (token) {
//         session.user = {
//           id: token.id,
//           username: token.username,
//         };
//         session.accessToken = token.accessToken;
//       }
//       return session;
//     },
//   },
//   secret: 'your-secret-key',
//   session: {
//     jwt: true,
//   },
// };

// export default (req, res) => NextAuth(req, res, options);
