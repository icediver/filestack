import { IAuthResponse, IUser } from "@/providers/auth.interface";
import { hash, verify } from "argon2";
import axios from "axios";
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

        const response = await axios<IAuthResponse>({
          url: process.env.SERVER_URL + "/auth/login",
          method: "POST",
          data: {
            email: credentials.email,
            password: credentials.password,
          },
        });
        const user = response.data.user;

        if (!user) return null;
        return {
          id: String(user.id),
          email: user.email,
          name: user.name,
          role: "admin",
          image: user.avatarPath,
        };

        // const currentUser = {
        //   id: "1",
        //   email: "test@test.ru",
        //   name: "Lerry Kurniadi",
        //   password: await hash("12345"),
        //   role: "admin",
        //   image:
        //     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg",
        // };
        // const isValid = await verify(
        //   currentUser.password,
        //   credentials.password,
        // );
        // if (currentUser && isValid) {
        //   const { password, ...userWithoutPass } = currentUser;
        //
        //   return userWithoutPass as User;
        // }
        //
        // return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
