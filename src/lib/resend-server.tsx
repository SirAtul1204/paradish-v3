import {
  Body,
  Column,
  Container,
  Heading,
  Html,
  Row,
  Tailwind,
  Text,
} from "@react-email/components";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_SECRET);

const WelcomeEmail = ({ userName }: { userName: string }) => {
  return (
    <Html lang="en">
      <Tailwind>
        <Body>
          <Container align="left">
            <Column>
              <Row>
                <Heading className="text-xl text-black font-medium">
                  Welcome to Paradish
                </Heading>
              </Row>
              <Row>
                <Text className="text-black">Dear {userName},</Text>
              </Row>
              <Row>
                <Text className="text-black">
                  We are thrilled to have you join Paradish! Get ready to
                  explore. Head over to your Dashboard to get started.
                </Text>
              </Row>
              <Row>
                <Text className="text-black">
                  If you have any questions, feel free to reach out to our
                  support team.
                </Text>
              </Row>
              <Row>
                <Text className="text-black">Best regards,</Text>
                <Text className="text-black">The Paradish Team</Text>
              </Row>
            </Column>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

type EmailType = "WELCOME";

const getEmail = (emailType: EmailType, userName: string) => {
  switch (emailType) {
    case "WELCOME":
      return <WelcomeEmail userName={userName} />;
    default:
      return <></>;
  }
};

const getSubject = (emailType: EmailType) => {
  switch (emailType) {
    case "WELCOME":
      return "Welcome to Paradish";
    default:
      return "";
  }
};

type SendEmail = {
  to: string;
  emailType: EmailType;
  userName: string;
};

export const sendEmail = ({ to, emailType, userName }: SendEmail) => {
  resend.emails
    .send({
      from: "Paradish@mail.atul.website",
      to,
      subject: getSubject(emailType),
      react: getEmail(emailType, userName),
    })
    .catch((e) => {});
};
