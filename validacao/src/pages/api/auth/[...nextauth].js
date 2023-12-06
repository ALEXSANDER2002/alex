import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ account, profile }) {
      const allowedEmails = [
        "nilcebrelaz@unifesspa.edu.br",
        "gaudencio@unifesspa.edu.br",
        "marcela.alves@unifesspa.edu.br",
        "jhon.randler@unifesspa.edu.br",
      ];

      if (account.provider === "google") {
        return profile.email_verified && allowedEmails.includes(profile.email);
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
