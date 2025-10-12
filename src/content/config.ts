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

const tourCategoriesCollection = defineCollection({
  type: "content",
  schema: z.object({
    categories: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        tours: z.array(
          z.object({
            title: z.string(),
            price: z.string(),
            duration: z.string(),
            image: z.string(),
            alt: z.string(),
            slug: z.string().optional(),
          })
        ),
      })
    ),
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

const testimonialsCollection = defineCollection({
  type: "content",
  schema: z.object({
    testimonials: z.array(
      z.object({
        quote: z.string(),
        author: z.object({
          name: z.string(),
          title: z.string(),
          company: z.string(),
          avatar: z.string(),
        }),
        rating: z.number(),
        featured: z.boolean().default(false),
      })
    ),
  }),
});

export const collections = {
  hero: heroCollection,
  "tour-categories": tourCategoriesCollection,
  tours: toursCollection,
  pages: pagesCollection,
  testimonials: testimonialsCollection,
};
