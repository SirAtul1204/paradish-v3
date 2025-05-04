import { generateId } from "better-auth";
import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  integer,
  timestamp,
  boolean,
  decimal,
  pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["OWNER", "MANAGER", "WAITER"]);

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const restaurant = pgTable("restaurant", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  name: text().notNull(),
  address: text().notNull(),
});

export const employee = pgTable("employee", {
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  restaurantId: integer("restaurant_id")
    .notNull()
    .references(() => restaurant.id, { onDelete: "cascade" }),
  role: roleEnum().notNull(),
  joinedAt: timestamp("joinedAt").notNull().defaultNow(),
  payPerMonth: decimal(),
  employeeId: text("employee_id")
    .primaryKey()
    .$defaultFn(() => generateId(5)),
  image: text(),
  identification: text(),
});

export const userRelations = relations(user, ({ many }) => ({
  employee: many(employee),
}));

export const restaurantRelations = relations(restaurant, ({ many }) => ({
  employee: many(employee),
}));

export const employeeRelations = relations(employee, ({ one, many }) => ({
  user: one(user, {
    fields: [employee.userId],
    references: [user.id],
  }),
  restaurant: one(restaurant, {
    fields: [employee.restaurantId],
    references: [restaurant.id],
  }),
  employeeInvitations: many(employeeInvitation),
}));

export const employeeInvitation = pgTable("employee_invitation", {
  invitedBy: text("invited_by")
    .notNull()
    .references(() => employee.employeeId, { onDelete: "cascade" }),
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  email: text().notNull(),
  role: roleEnum().notNull(),
  identification: text().notNull(),
});

export const employeeInvitationRelations = relations(
  employeeInvitation,
  ({ one }) => ({
    employee: one(employee, {
      fields: [employeeInvitation.invitedBy],
      references: [employee.employeeId],
    }),
  }),
);
