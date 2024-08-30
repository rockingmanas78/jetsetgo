import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
export const authOptions: NextAuthOptions = {
  providers: [
    Google({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? ''
    }),
    Github({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET ?? '',
    }),
  ],
}
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };