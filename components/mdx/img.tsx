import fs from "fs/promises";
import probe from "probe-image-size";

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

export default async function Img({ src: _src, alt, width }: ImgProps) {
  if (width && isProportionalWidth(width) !== true) {
    throw new Error("Invalid width");
  }
  const pathName = _src.split("/")[1];
  const imageName = _src.split("/")[2];

  const imageData = await fs.readFile(
    `${process.cwd()}/posts/${pathName}/${imageName}`,
  );
  const imageSize = probe.sync(imageData);
  if (imageSize === null) {
    throw new Error(`[Img] ${imageName} is invalid or not an image`);
  }
  const dataUrl = `data:${imageSize.mime};base64,${imageData.toString("base64")}`;

  // TODO: add lazy loading
  return (
    <img
      src={dataUrl}
      alt={alt}
      width={imageSize.width}
      height={imageSize.height}
    />
  );
}
