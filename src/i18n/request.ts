//i18n//request.ts
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(() => {
  const locale = "en"; // for static export

  return {
    locale,
    messages: require(`../../messages/${locale}.json`)
  };
});
