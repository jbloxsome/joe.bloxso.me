import { ProfileComponent } from "@/components/profile";
import { ProjectComponent } from "@/components/project";
import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      height="auto"
      p="36px"
      gap="64px"
      direction={{ initial: "column" }}
      maxWidth="1200px"
      style={{ minHeight: "100vh" }}
    >
      <Flex align="center" justify="center">
        <ProfileComponent />
      </Flex>
      <Flex gap="24px" align="center" justify="center" wrap="wrap">
        <ProjectComponent
          icon="https://github.githubassets.com/favicons/favicon.png"
          title="Roboant"
          description="A custom firmware for the Freenove Robot Ant Kit, written in Rust. The ant walks autonomously and avoids obstacles using data from an ultrasonic sensor."
          link="https://github.com/jbloxsome/roboant"
          openSource={true}
          technologies={["Rust", "Arduino Uno"]}
        />
        <ProjectComponent
          icon="https://disprse.com/favicon.ico"
          title="Disprse"
          description="A SaaS product that automatically generates high quality, targeted, and engaging marketing content for any brand."
          link="https://getmarketerai.com"
          technologies={["React", "NestJS", "AI"]}
        />
        <ProjectComponent
          icon="https://instastock.studio/favicon.ico"
          title="Instastock"
          description="A small web application for generating stock images using AI. The system uses LLMs to enhance the user's prompt and then uses text to image models to generate the image."
          link="https://instastock.studio"
          technologies={["Next.js", "NestJS", "AI"]}
        />
        <ProjectComponent
          icon="https://framerusercontent.com/images/H2v2tj7CBr7ujFq34VDVEKAhUzE.png"
          title="GoPasswordless"
          description="A SaaS product and JavaScript library to enable passwordless authentication using WebAuthn for web apps."
          link="https://gopasswordless.dev"
          technologies={["React", "NestJS", "WebAuthn"]}
        />
        <ProjectComponent
          icon="https://github.githubassets.com/favicons/favicon.png"
          title="GoPt"
          description="A small library for loading PyTorch image classificaion models into Go code."
          link="https://github.com/jbloxsome/gopt"
          openSource={true}
          technologies={["Go", "PyTorch"]}
        />
        <ProjectComponent
          icon="https://github.githubassets.com/favicons/favicon.png"
          title="Raptor"
          description="A Go library for constructing orderbooks using real time market data from a collection of crypto exchanges."
          link="https://github.com/jbloxsome/raptor"
          openSource={true}
          technologies={["Go"]}
        />
      </Flex>
    </Flex>
  );
}
