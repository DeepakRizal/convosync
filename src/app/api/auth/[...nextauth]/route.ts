import NextAuth, { NextAuthOptions, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface GoogleProfile extends Profile {
  email_verified?: boolean;
  email?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // Ensure profile is of type GoogleProfile
      const googleProfile = profile as GoogleProfile | undefined;

      if (account?.provider === "google") {
        return googleProfile?.email_verified && googleProfile?.email_verified
          ? true
          : false;
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
