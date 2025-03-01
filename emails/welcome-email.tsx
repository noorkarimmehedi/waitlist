import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>welcome</Preview>
      <Container style={container}>
        <Section style={box}>
          <Text style={paragraph}>Hi Friend,</Text>

          <Text style={paragraph}>
            Thanks for subscribing to my newsletter! I'll be sending out emails
            at least once a month with newsletter-only content, updates on my
            work, updates on fancy components, and occasional thoughts about
            design and tech.
          </Text>

          <Text style={header}><Link href="https://fancycomponents.dev" style={header}>Fancy Components</Link></Text>

          <Link
            href="https://fancycomponents.dev"
            style={{ textDecoration: "none" }}
          >
            <Img
              src={`${baseUrl}/images/fancy-components-preview.png`}
              width="100%"
              height="auto"
              alt="Fancy Components Preview"
              style={{ marginBottom: "16px" }}
            />
          </Link>
          <Text style={paragraph}>
            Fancy components is a playground where I [re]create experimental ui
            components and funky microinteractions. Each component comes with
            source code and detailed write-ups about the implementation process.
          </Text>
          <Text style={paragraph}>
            Everything is open source and also available on{" "}
            <Link href="https://github.com/danielpetho/fancy" style={anchor}>
              GitHub
            </Link>
            .
          </Text>

          <Text style={header}>Socials</Text>

          <Text style={paragraph}>
            You can also find me posting ui, motion & other tech experiments
            regularly on{" "}
            <Link href="https://x.com/nonzeroexitcode" style={anchor}>
              X
            </Link>
            ,{" "}
            <Link href="https://threads.net/@nonzeroexitcode" style={anchor}>
              Threads
            </Link>
            , and{" "}
            <Link
              href="https://bsky.app/profile/danielpetho.com"
              style={anchor}
            >
              Bluesky
            </Link>
            .
          </Text>
          <Section style={signature}>
            <Text style={paragraph}>looking forward to sharing more</Text>
            <Text style={paragraph}>— daniel</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>UNSUBSCRIBE</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const header = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "32px",
  marginBottom: "16px",
  textDecoration: "none",
  textAlign: "left" as const,
  color: "#000000",
  ":visited": {
    color: "#000000"
  }
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const signature = {
  marginTop: "32px",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  textDecoration: "underline",
  color: "#525f7f",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
