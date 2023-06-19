import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export interface CardItemProps {
  title: string;
  image?: string;
  note?: number;
}

export function CardItem({ title, image, note }: CardItemProps) {
  return (
    <>
      <Card hoverable style={{ width: 240 }} cover={<img src={`${image}`} />}>
        <Meta title={title} description={`${Math.floor(note ?? 0)}/5`} />
      </Card>
    </>
  );
}
