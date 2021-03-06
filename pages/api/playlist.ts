import { NextApiResponse, NextApiRequest } from "next";
import { validateRoute } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const playlist = await prisma.playlist.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.json(playlist);
  }
);
