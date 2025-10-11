import { defineCollection, z } from "astro:content";

const heroCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    images: z.object({
      mainImage: z.string(),
      mainImageAlt: z.string(),
      secondaryImage: z.string(),
      secondaryImageAlt: z.string(),
    }),
  }),
});

const toursCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.string(),
    groupSize: z.string(),
    rating: z.number(),
    reviewCount: z.number(),
    mainImage: z.string(),
    gallery: z.array(z.string()).optional(),
    location: z.string(),
    country: z.string().default("Indonesia"),
    highlights: z.array(z.string()).optional(),
    itinerary: z
      .array(
        z.object({
          day: z.number(),
          title: z.string(),
          activities: z.array(z.string()),
        })
      )
      .optional(),
    included: z.array(z.string()).optional(),
    notIncluded: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    profileImage: z.string().optional(),
  }),
});

export const collections = {
  hero: heroCollection,
  tours: toursCollection,
  pages: pagesCollection,
};
