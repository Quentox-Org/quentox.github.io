import { Box } from "@mui/material";
import {
  LegalEmailLink,
  LegalIntro,
  LegalParagraph,
  LegalSection,
  LegalTitle,
} from "./legal/LegalTypography";

export const CookiePolicy = () => {
  return (
    <Box sx={{ maxWidth: "48rem" }}>
      <LegalTitle>Cookie Policy</LegalTitle>

      <LegalIntro>
        This Cookie Policy explains how Quentox JSC uses cookies and similar
        technologies on quentox.com.
      </LegalIntro>

      <LegalSection>What Are Cookies</LegalSection>
      <LegalParagraph>
        Cookies are small files that a website or a third-party service may store on
        your computer or mobile device. They are commonly used to operate a site,
        remember preferences, or measure usage. This page describes what we do and
        do not use cookies for.
      </LegalParagraph>

      <LegalSection>How We Use Cookies</LegalSection>
      <LegalParagraph>
        This website is a static marketing site. We do not set first-party cookies
        for analytics, advertising, or user tracking. Your browser may still keep
        its own technical data, and third-party services may use cookies when you
        interact with a specific feature, such as submitting the contact form.
      </LegalParagraph>

      <LegalSection>Disabling Cookies</LegalSection>
      <LegalParagraph>
        You can prevent the setting of cookies by adjusting the settings on your
        browser (see your browser Help for how to do this). Disabling cookies may
        affect the functionality of this and many other websites that you visit.
      </LegalParagraph>

      <LegalSection>Third Party Services</LegalSection>
      <LegalParagraph>
        When you submit our contact form, your message is processed by Formspree
        (formspree.io), a third-party form handling service. Formspree may set
        cookies or collect technical data on their domain in accordance with their
        own privacy policy. We do not currently use Google Analytics, advertising
        pixels, or other analytics cookies on this site. Fonts are served from this
        website rather than from a third-party font host.
      </LegalParagraph>

      <LegalSection>More Information</LegalSection>
      <LegalParagraph>
        If you have questions about this Cookie Policy, contact us by email:{" "}
        <LegalEmailLink />
      </LegalParagraph>
    </Box>
  );
};
