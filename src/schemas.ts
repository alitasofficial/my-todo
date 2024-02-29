import { z } from "zod";

export const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional(),
  remindAt: z.date().optional(),
  dueAt: z.date().optional(),
  archived: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tagIds: z.array(z.string()),
  createdBy: z.object({
    id: z.string(),
  }),
});

export const todoCreateInputSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  remindAt: z.date().optional(),
  dueAt: z.date().optional(),
  tagIds: z.array(z.string()),
});

export const todoUpdateInputSchema = z.object({
  id: z.number(),
  title: z.string().optional(),
  description: z.string().optional(),
  remindAt: z.date().optional(),
  dueAt: z.date().optional(),
  tagIds: z.array(z.string()).optional(),
});

export const todoSoftDeleteInputSchema = z.object({
  id: z.number(),
});

export const tagSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.object({
    id: z.string(),
  }),
});

export const tagCreateInputSchema = z.object({
  name: z.string(),
});

export const tagUpdateInputSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
});
