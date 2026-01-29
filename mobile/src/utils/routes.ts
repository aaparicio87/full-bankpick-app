import { TEXTS } from "./texts";
import { router } from "expo-router";

export const authConfig = {
  login: {
    title: TEXTS.sign_in,
    footerText: TEXTS.new_user,
    footerLinkText: TEXTS.sign_up,
    footerLinkUrl: "/register",
  },
  register: {
    title: TEXTS.sign_up,
    footerText: TEXTS.existing_user,
    footerLinkText: TEXTS.sign_in,
    footerLinkUrl: "(auth)",
  },
};

type AuthRoute = keyof typeof authConfig;

export function getAuthRoute(segments: string[]): AuthRoute {
  const last = segments.at(-1);

  if (last && last in authConfig) {
    return last as AuthRoute;
  }

  return "login";
}

export const handleBack = () => {
  router.back();
};
