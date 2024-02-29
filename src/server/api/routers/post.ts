import {
  todoCreateInputSchema,
  todoSoftDeleteInputSchema,
  todoUpdateInputSchema,
} from "@/schemas";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const todoRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.todo.findMany({
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
  create: protectedProcedure
    .input(todoCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.todo.create({
        data: {
          title: input.title,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
  update: protectedProcedure
    .input(todoUpdateInputSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.todo.update({
        where: { id: input.id },
        data: { title: input.title },
      });
    }),
  softDelete: protectedProcedure
    .input(todoSoftDeleteInputSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.todo.update({
        where: { id: input.id },
        data: { archived: true },
      });
    }),
});
