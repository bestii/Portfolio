import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
} from "@react-email/components";
import { type FC } from "react";

type ContactFormEmailProps = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormEmailTemplate: FC<ContactFormEmailProps> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Body style={mainStyle}>
      <Container style={containerStyle}>
        <Heading style={headingStyle}>New Contact Form Submission</Heading>

        <Section>
          <Text style={labelStyle}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={labelStyle}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={labelStyle}>
            <strong>Message:</strong>
          </Text>
          <Text style={messageStyle}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmailTemplate;

const mainStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "0 auto",
};

const headingStyle = {
  color: "#333333",
  fontSize: "24px",
  marginBottom: "20px",
};

const labelStyle = {
  fontSize: "16px",
  color: "#555555",
  margin: "10px 0",
};

const messageStyle = {
  fontSize: "16px",
  color: "#333333",
  lineHeight: "1.5",
};
