import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  type Emoji = {
    [key: number]: ImageProps;
  };

  const emojiMap: Emoji = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "recommended", boxSize: "32px" },
    5: { src: thumbsUp, alt: "exceptional", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
