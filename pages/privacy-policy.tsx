import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function PrivacyPolicyPage() {
  return (
    <Page title="Privacy Policy">
      <PrivacyPolicyContainer>
        <RichText>
          <h2>Our Commitment to Privacy</h2>
          <p>
            RebelRoot is an independent, developer-led collective. We design all of our software around a core principle: **digital sovereignty**. We believe that your data belongs entirely to you. Consequently, we maintain a strict stance on user privacy.
          </p>

          <h3>1. Zero Telemetry & Tracking</h3>
          <p>
            None of our applications (including Omni Browser, MOCNovel, and CampCart) contain hidden analytics trackers, crash-reporting SDKs, or background telemetry. We do not inspect, log, aggregate, or sell your browsing history, read lists, search queries, or transaction items.
          </p>

          <h3>2. Local-First Storage</h3>
          <p>
            By default, all user data—such as bookmarks, reading history, shopping carts, and logs—is stored directly on your physical device. We have no backend system database that collects this information.
          </p>

          <h3>3. Optional End-to-End Encrypted Synchronization</h3>
          <p>
            If you choose to use our synchronization features to link devices, your data is encrypted client-side using industry-standard cryptographic keys before it ever leaves your device. RebelRoot servers act strictly as transit brokers and cannot decrypt your data.
          </p>

          <h3>4. Open Source Verification</h3>
          <p>
            Since all of our codebases are open source under permissive licenses, you can inspect the compile scripts, review network call configurations, and verify these claims independently.
          </p>

          <p>
            If you have questions about our privacy practices or security audits, contact us at <strong>contact@rebelroot.org</strong>.
          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
