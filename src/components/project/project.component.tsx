import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export interface ProjectComponentProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectComponent = ({
  icon,
  title,
  description,
  link,
}: ProjectComponentProps): JSX.Element => {
  return (
    <Card className="initial:w-[360px] md:w-[420px]">
      <Link href={link} target="_blank">
        <CardHeader>
          <Flex align="center" gap="12px">
            <Image src={icon} alt={title} width={32} height={32} />
            <CardTitle>{title}</CardTitle>
          </Flex>
        </CardHeader>
      </Link>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
