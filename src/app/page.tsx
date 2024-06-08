import { ProfileComponent } from "@/components/profile";
import { ProjectComponent } from "@/components/project";
import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      p="36px"
      gap="64px"
      direction={{ initial: "column" }}
      maxWidth="1200px"
    >
      <Flex align="center" justify="center" pl={{ initial: "0px" }}>
        <ProfileComponent />
      </Flex>
      <Flex gap="24px" align="center" justify="center" wrap="wrap" px="128px">
        <ProjectComponent
          icon="https://getmarketerai.com/favicon.ico"
          title="Marketer AI"
          description="A SaaS product that automatically generates high quality, engaging content for your brand."
          link="https://getmarketerai.com"
        />
        <ProjectComponent
          icon="https://framerusercontent.com/images/H2v2tj7CBr7ujFq34VDVEKAhUzE.png"
          title="GoPasswordless"
          description="Passwordless Authentication as a Service for web apps."
          link="https://gopasswordless.dev"
        />
        <ProjectComponent
          icon="https://github.githubassets.com/favicons/favicon.png"
          title="GoPt"
          description="A small library for loading PyTorch image classificaion models into Go code."
          link="https://github.com/jbloxsome/gopt"
        />
        <ProjectComponent
          icon="https://github.githubassets.com/favicons/favicon.png"
          title="Raptor"
          description="Go library for retrieving orderbook data from Crypto exchanges in real-time."
          link="https://github.com/jbloxsome/raptor"
        />
      </Flex>
    </Flex>
  );
}
