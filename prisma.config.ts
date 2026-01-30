// prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
    // optional (Postgres often):
    // directUrl: env("DATABASE_URL_UNPOOLED"),
    // shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
});
