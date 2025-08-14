import { cn } from "../lib/utils";
import Image from "next/image";

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div
      className={cn(
        "relative w-80 h-96 cursor-pointer overflow-hidden rounded-xl ",
        "bg-secondary"
      )}
    >
      <Image
        src={img}
        alt="Co-sponsor"
        layout="fill"
        objectFit="cover"
        className="rounded-xl object-center"
      />
    </div>
  );
};

export default ImageCard;
