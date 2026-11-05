import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const robots = defineCollection({
  type:"content_layer",
  loader: glob({ pattern: "**/*.md", base: "./src/content/robots" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      price: z.string(),
      image: image(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { robots };