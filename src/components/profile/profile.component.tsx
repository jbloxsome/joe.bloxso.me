import { Flex } from "@radix-ui/themes";
import { TypographyH1 } from "../typography";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const ProfileComponent = (): JSX.Element => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="36px"
      style={{ textAlign: "center" }}
    >
      <TypographyH1>Joe Bloxsome</TypographyH1>
      <Flex gap="36px" justify="center">
        <Link href="https://github.com/jbloxsome" target="_blank">
          <GitHubLogoIcon width={36} height={36} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joe-bloxsome-49366396/"
          target="_blank"
        >
          <LinkedInLogoIcon width={36} height={36} />
        </Link>
        <Link href="https://x.com/JoeBloxsome" target="_blank">
          <TwitterLogoIcon width={36} height={36} />
        </Link>
      </Flex>
    </Flex>
  );
};
