import NextAuth from 'next-auth';
//import Provider from 'next-auth/providers';//----------------
import CredentialsProvider from "next-auth/providers/credentials";


import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');
        console.log('credentials', credentials)
        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        console.log('user', user)
        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email };

      },
    }),
  ],
});