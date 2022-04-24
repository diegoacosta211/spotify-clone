import { validateRoute } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next/types";
import prisma from "@/lib/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const playlistCount = await prisma.playlist.count({
      where: {
        userId: user.id,
      },
    });
    res.json({ ...user, playlistCount });
  }
);
