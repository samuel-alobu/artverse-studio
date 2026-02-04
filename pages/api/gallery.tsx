import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const images = await prisma.art.findMany();
    return res.status(200).json(images);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({
      error: "Failed to fetch images",
    });
  }
}
