import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";

export interface CardItemProps {
  id: string;
  title: string;
  image?: string;
  note?: number;
  func: () => void;
}

export function CardItem({ title, image, note, func }: CardItemProps) {
  return (
    <>
      <Card
        hoverable
        style={{ width: 350 }}
        cover={<Image width={350} height={200} src={`${image}`} />}
      >
        <div onClick={func}>
          <Meta title={title} description={`${Math.floor(note ?? 0)}/5`} />
        </div>
      </Card>
    </>
  );
}
