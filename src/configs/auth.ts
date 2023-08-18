import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // const currentUser = users.find(
        //   (user) => user.email === credentials.email,
        // );
        const currentUser = {
          id: "1",
          email: "test@test.ru",
          name: "Lerry Kurniadi",
          password: "12345",
          role: "admin",
          image:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg",
        };
        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
