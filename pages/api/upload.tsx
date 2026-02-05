import "server-only"

import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import prisma from "@/lib/prisma";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const config = {
  api: { bodyParser: false },
};

type NextApiRequestWithFile = NextApiRequest & {
  file?: Express.Multer.File;
};

const upload = multer({ dest: "uploads/" });

// Minimal middleware signature without `any`
type Middleware = (
  req: unknown,
  res: unknown,
  next: (result?: unknown) => void,
) => void;

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Middleware,
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result?: unknown) => {
      if (result instanceof Error) return reject(result);
      resolve();
    });
  });
}

export default async function handler(
  req: NextApiRequestWithFile,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await runMiddleware(
      req,
      res,
      upload.single("image") as unknown as Middleware,
    );

    if (!req.file?.path) {
      return res.status(400).json({ error: "No image provided" });
    }

    const { description } = req.body as { description?: string };

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "artverse",
    });

    const image = await prisma.art.create({
      data: {
        description: description || "",
        imageUrl: result.secure_url,
      },
    });

    return res.status(201).json(image);
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ error: "Image upload failed" });
  }
}
