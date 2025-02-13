import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config();

// config({ path: ".env" }); // or .env.local

export default defineConfig({
  out: "./drizzle",
  schema: ["./auth-schema.ts", "./src/db/schema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
