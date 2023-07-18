import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          const client = await MongoClient.connect(
            "mongodb+srv://SalmaQassem:Salma499@cluster0.xeioklz.mongodb.net/FeaneDatabase?retryWrites=true&w=majority"
          );
          const db = client.db();
          const usersCollection = db.collection("Users");
          const users = await usersCollection.find().toArray();
          client.close();
          const user = users.find((user) => user.email === email);
          if (user) {
            const checkPassword = password === user.password;
            if (checkPassword) {
              return user;
            } else {
              console.log("incorrect password");
            }
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/Login",
  },
});
