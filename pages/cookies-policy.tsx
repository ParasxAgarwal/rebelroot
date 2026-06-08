import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function CookiesPolicyPage() {
  return (
    <Page title="Cookies Policy">
      <CookiesPolicyContainer>
        <RichText>
          <h2>Our Policy on Cookies</h2>
          <p>
            RebelRoot values your right to browse the web without constant tracking. We believe the internet has been ruined by intrusive tracking scripts and cookie wall banners.
          </p>

          <h3>1. Do We Use Cookies?</h3>
          <p>
            **No.** RebelRoot does not write any tracking, advertising, profiling, or third-party cookies on your device when you visit our website.
          </p>

          <h3>2. Essential Local State</h3>
          <p>
            We use the browser&apos;s standard <code>localStorage</code> mechanisms strictly to store your active preferences. This includes:
          </p>
          <ul>
            <li>
              <strong>Theme Preference</strong>: Saving your selection of Light Mode or Dark Mode.
            </li>
            <li>
              <strong>Newsletter States</strong>: Remembering if you have closed the newsletter drawer to avoid bothering you again.
            </li>
          </ul>
          <p>
            This data never leaves your browser and is not uploaded to any analytics endpoint.
          </p>

          <h3>3. Third-Party Web Links</h3>
          <p>
            Our site contains links to other independent platforms (e.g., GitHub, Twitter, Sponsor pages). These services have their own cookie policies once you navigate to their domains.
          </p>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
