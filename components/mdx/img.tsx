import Image from "next/image";

type ProportionalWidth = number;
function isProportionalWidth(width?: number): width is ProportionalWidth {
  return (
    width !== null &&
    width !== undefined &&
    typeof width === "number" &&
    width >= 0 &&
    width <= 1
  );
}

type ImgProps = {
  src: string;
  alt: string;
  width?: ProportionalWidth;
};

export default function Img({ src, alt, width }: ImgProps) {
  if (isProportionalWidth(width) !== true) {
    throw new Error("Invalid width");
  }
  return <Image src={src} alt={alt} />;
}
