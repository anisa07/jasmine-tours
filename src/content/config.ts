import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const heroCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hero" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      images: z.object({
        mainImage: image(),
        mainImageAlt: z.string(),
        secondaryImage: image(),
        secondaryImageAlt: z.string(),
      }),
    }),
});

const tourCategoriesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tour-categories" }),
  schema: ({ image }) =>
    z.object({
      categories: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          tours: z.array(
            z.object({
              title: z.string(),
              price: z.string(),
              duration: z.string(),
              image: image(),
              alt: z.string(),
              slug: z.string().optional(),
            })
          ),
        })
      ),
    }),
});

const toursCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/tours" }),
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
  loader: glob({ pattern: "**/about.md", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    profileImage: z.string().optional(),
  }),
});

const testimonialsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/testimonials" }),
  schema: ({ image }) =>
    z.object({
      testimonials: z.array(
        z.object({
          quote: z.string(),
          tour: z.string(),
          author: z.object({
            name: z.string(),
            avatar: image(),
          }),
          rating: z.number(),
        })
      ),
    }),
});

const galleryCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/gallery" }),
  schema: ({ image }) =>
    z.object({
      images: z.array(
        z.object({
          id: z.string(),
          src: image(),
          alt: z.string(),
          title: z.string(),
          description: z.string(),
          thumbnail: image(),
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
  gallery: galleryCollection,
};
