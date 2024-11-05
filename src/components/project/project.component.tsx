import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";

export interface ProjectComponentProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  openSource?: boolean;
  technologies?: string[];
}

export const ProjectComponent = ({
  icon,
  title,
  description,
  link,
  openSource = false,
  technologies = [],
}: ProjectComponentProps): JSX.Element => {
  return (
    <Card className="w-[360px] md:w-[420px] transition-all duration-300 hover:scale-105 hover:shadow-lg h-[230px] flex flex-col">
      <Link href={link} target="_blank" className="flex flex-col h-full">
        <CardHeader className="pb-3">
          <Flex align="center" gap="12px" justify="between">
            <Flex align="center" gap="12px">
              <Image
                src={icon}
                alt={title}
                width={32}
                height={32}
                className="rounded-md"
              />
              <CardTitle className="text-lg">{title}</CardTitle>
            </Flex>

            <ExternalLinkIcon className="h-5 w-5 text-muted-foreground" />
          </Flex>
        </CardHeader>
        <CardContent className="flex-grow">
          <Flex
            direction="column"
            gap="12px"
            align="start"
            justify="between"
            height="100%"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </Flex>
        </CardContent>
        <CardFooter className="mt-auto">
          <Flex gap="12px" align="center">
            {openSource && <Badge variant="secondary">Open Source</Badge>}
            {technologies.length > 0 && (
              <Flex gap="12px" align="center">
                {technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </Flex>
            )}
          </Flex>
        </CardFooter>
      </Link>
    </Card>
  );
};
