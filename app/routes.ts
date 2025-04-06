import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("context-bug", "routes/context-bug-one/context-bug-one.tsx"),
] satisfies RouteConfig;
