import React from "react";

interface props {
  name: string;
  date: string;
  topic: string;
  thumbnail: string;
}
interface data {
  cardData: props;
}

export default function DocumentCard({ cardData }: data) {
  return (
    <div className=" flex flex-row gap-3 flex-wrap justify-start  @lg:justify-start ">
      <div className="flex flex-col  min-w-[8rem] max-w-[14rem]  rounded-xl shadow-sm hover:shadow-md border  transition-all cursor-pointer">
        <div className="w-full aspect-[16/10] overflow-hidden rounded-t-xl">
          <img
            src={
              cardData.thumbnail
                ? `${cardData.thumbnail}`
                : `https://youlearn-content-uploads.s3.amazonaws.com/thumbnails/pdf/x6R0LzzLtedX069.png`
            }
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-3 flex flex-col">
          <div className="text-sm font-medium line-clamp-1">
            {cardData.name}
          </div>
          <div className="text-xs text-muted-foreground">{cardData.topic}</div>
          <div className="text-xs text-muted-foreground">{cardData.date}</div>
        </div>
      </div>
    </div>
  );
}
