import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const heroCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hero" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      themeColor: z.number().min(0).max(360).default(260),
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
              description: z.string(),
              shortDescription: z.string().optional(),
            })
          ),
        })
      ),
    }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/about.md", base: "src/content/pages" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      profileImage: image().optional(),
      introduction: z.string().optional(),
      services: z
        .object({
          tours: z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
          }),
          events: z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
          }),
        })
        .optional(),
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
  about: aboutCollection,
  testimonials: testimonialsCollection,
  gallery: galleryCollection,
};
