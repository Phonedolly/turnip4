import fs from "fs";
import Image from "next/image";
import path from "path";
import probe from "probe-image-size";

type ImgProps = {
  src: string;
  alt: string;
};

export default async function Img({ src, alt }: ImgProps) {
  const postId = src.split("/")[2];
  const imageName = src.split("/")[3];

  const imageStream = fs.createReadStream(
    path.join(process.cwd(), `posts/${postId}/${imageName}`),
  );
  const { width, height, mime } = await probe(imageStream);
  const imageBuffer = fs.readFileSync(
    path.join(process.cwd(), "posts", postId, imageName),
  );
  const dataUri = `data:${mime};base64,${imageBuffer.toString("base64")}`;

  return (
    <div className="my-4 flex w-full flex-row justify-center">
      <Image src={dataUri} alt={alt} width={width} height={height} />
    </div>
  );
}
