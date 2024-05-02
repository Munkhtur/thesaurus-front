import { apiUrl } from "./../helpers/variable.helper";
import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

type HTTPMethod = "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE";

export const useCustomFetch = async <T>(
  url: string,
  method: HTTPMethod,
  options: UseFetchOptions<T> = {},
  baseUrl: string = apiUrl
) => {
  const toast = useToast();
  try {
    const token = useCookie("token");
    const terminalToken = useCookie<string>("terminalToken");
    const headers: any = {};

    // headers["Authorization"] = `Bearer ${token.value || terminalToken.value}`;

    const defaults: UseFetchOptions<T> = {
      baseURL: baseUrl,
      key: baseUrl + url + method,
      method: method,
      headers: headers,
    };

    const params = defu(options, defaults);

    const { data: response, error } = await useFetch(url, params);

    if (error.value) {
      toast.add({
        title: "Амжилтгүй",
        color: "amber",
      });

      return null;
    }

    return response;
  } catch (e) {
    console.warn("use custom fetch warning: ", e);
    toast.add({
      title: "Амжилтгүй",
      color: "amber",
    });
  }
};
