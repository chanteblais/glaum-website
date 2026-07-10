import {
  pgTable,
  text,
  boolean,
  timestamp,
  serial,
} from "drizzle-orm/pg-core";

export const glaumers = pgTable("glaumers", {
  id: text("id").primaryKey(),
  regNo: serial("reg_no"),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  location: text("location"),
  sigil: text("sigil").notNull().default("eye"),
  attunement: text("attunement").notNull(),
  glaumise: text("glaumise"),
  testimony: text("testimony"),
  editToken: text("edit_token").notNull(),
  hidden: boolean("hidden").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Glaumer = typeof glaumers.$inferSelect;
