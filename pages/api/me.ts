import { validateRoute } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next/types";

export default validateRoute(
  (req: NextApiRequest, res: NextApiResponse, user) => {
    res.json(user);
  }
);
