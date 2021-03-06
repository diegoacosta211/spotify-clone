import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  if (req.method === "POST" && email && password) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          time: Date.now(),
        },
        process.env.MUSIFY_SECRET_KEY,
        { expiresIn: "8h" }
      );

      res.setHeader(
        "Set-Cookie",
        cookie.serialize(process.env.MUSIFY_TOKEN_NAME, token, {
          httpOnly: true,
          maxAge: 8 * 60 * 60,
          path: "/",
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
        })
      );
      res.json(user);
    } else {
      res.status(401).json({ error: "Email or password are incorrect" });
    }
  } else {
    res.status(401).json({ error: "Email or password are missing" });
  }
};
