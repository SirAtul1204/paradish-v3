export const ROUTES = {
  HOME: "/",
  REGISTER: "/register",
  JOIN_CREATE_RESTAURANT: "/join-create-restaurant",
  SELECT_RESTAURANT: "/select-restaurant",
  DASHBOARD: (id: string) => `/${id}/dashboard`,
};
