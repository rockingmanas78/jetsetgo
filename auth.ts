import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { 
  handlers: { GET, POST }, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : "",
      clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : "",
    }),
    Github({
      clientId: process.env.GITHUB_ID? process.env.GITHUB_ID : '',
      clientSecret: process.env.GITHUB_SECRET? process.env.GITHUB_SECRET : '',
    }),
  ],
});