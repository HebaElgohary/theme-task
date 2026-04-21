import Images from "../atoms/Images";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  alt: string;
  title: string;
  text: string;
}
export default function Card({ src, alt, title, text }: Props) {
  return (
    <div className="w-76 px-5 py-5 ds-bg flex justify-center items-center flex-col rounded-lg">
      <Images src={src} alt={alt} width={300} height={300} />
      <Title center={true} className="mt-3">
        {title}
      </Title>
      <Text center={true} className="my-3">
        {text}
      </Text>
      <Button size="md">use template</Button>
    </div>
  );
}
