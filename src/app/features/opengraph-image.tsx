import { SHARE_IMAGE_SIZE, shareImage, shareImageAlt } from "@/lib/og";

export const size = SHARE_IMAGE_SIZE;
export const contentType = "image/png";
export const alt = shareImageAlt("features");

export default function Image() {
  return shareImage("features");
}
