import { StyleImg } from "./Image.style";
import { ImageType, ImgSizeType } from "./Image.type";

const sizeMode = {
  small: {
    height: "120px",
  },
  medium: {
    height: "160px",
  },
  large: {
    height: "220px",
  },
} as const;

type ImgProps = {
  src: string;
  alt: string;
  size: ImgSizeType;
  imgProps?: ImageType;
};

const Img = ({ src, size = "medium", alt, imgProps }: ImgProps) => {
  const propsWithMode = { ...imgProps, ...sizeMode[size] };
  return <StyleImg src={src} alt={alt} {...propsWithMode} draggable={false} />;
};

export default Img;
