import { createServerFn } from "@tanstack/react-start";
import {
  getRequest,
  getRequestHeader,
  getRequestIP,
} from "@tanstack/react-start/server";

export const getClientIp = createServerFn().handler(async () => {
  const request = getRequest();
  const requestForwarded = request.headers.get("x-forwarded-for");
  const requestRealIp = request.headers.get("x-real-ip");
  const forwarded = getRequestHeader("x-forwarded-for");
  const realIp = getRequestHeader("x-real-ip");
  const getIp = getRequestIP();

  return {
    requestForwarded,
    requestRealIp,
    forwarded,
    realIp,
    getIp,
  };
});
