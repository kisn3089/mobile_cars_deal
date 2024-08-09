import { StyleImg } from "./Image.style";
import { ImageType } from "./Image.type";

const sizeMode = {
  small: {
    height: "120px",
  },
  large: {
    height: "160px",
  },
} as const;

type ImgProps = {
  src: string;
  alt: string;
  size: "small" | "large";
  imgProps?: ImageType;
};

const Img = ({ src, size = "large", alt, imgProps }: ImgProps) => {
  const propsWithMode = { ...imgProps, ...sizeMode[size] };
  return <StyleImg src={src} alt={alt} {...propsWithMode} draggable={false} />;
};

export default Img;
