import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function VedAstraPrivacyPolicyPage() {
  return (
    <Page
      title="Privacy Policy &amp; Data Safety | Ved Astra"
      description="Ved Astra is built on a strict privacy-first, on-device-first architecture. Read our full data declarations and privacy guidelines."
    >
      <PrivacyPolicyContainer>
        <RichText>
          <MetaDataBlock>
            <p><strong>Last Updated:</strong> June 11, 2026</p>
            <p><strong>Publisher:</strong> RebelRoot</p>
            <p><strong>App Name:</strong> Ved Astra</p>
            <p><strong>Package Name:</strong> <code>com.rebelroot.vedastra.astro</code></p>
          </MetaDataBlock>

          <IntroParagraph>
            This document details the Privacy Policy and Data Security configurations for Ved Astra. Because Ved Astra is built on a strict privacy-first architecture, the application does not collect, monitor, store, or share any user personal information on remote databases or servers.
          </IntroParagraph>

          <hr />

          <h2>1. Privacy Policy</h2>

          <h3>1.1 Data Collection &amp; Transmission</h3>
          <ul>
            <li>
              <strong>Zero Remote Databases:</strong> RebelRoot does not host any backend databases, account servers, or analytical user profiling pipelines for Ved Astra. All calculations, chart generations, and chat queries are processed in-memory or kept entirely on your local device.
            </li>
            <li>
              <strong>No Telemetry / User Analytics:</strong> The app does not include advertising SDKs, background trackers, or third-party usage analytics (e.g., Firebase Analytics). Your birth details, coordinates, and questions remain strictly confidential.
            </li>
          </ul>

          <h3>1.2 Permissions &amp; Usage Disclosure</h3>
          <p>
            Ved Astra requests only the minimal permissions required to function. All data processed via these permissions remains on-device or is sent to APIs only as needed to perform calculations (like calculating planetary coordinates or generating AI responses):
          </p>

          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Purpose</th>
                  <th>Data Safety Context</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>INTERNET</strong></td>
                  <td>Enabling core app functions, including fetching ephemeris coordinates from the VedAstro API, querying the FastAPI backend, and communicating with the Google Gemini API for the AI Astrologer.</td>
                  <td>All API calls are processed securely. RebelRoot does not log, track, or share your input parameters or chat conversations.</td>
                </tr>
                <tr>
                  <td><strong>ACCESS_NETWORK_STATE</strong></td>
                  <td>Checking connection availability before sending requests to the API backend.</td>
                  <td>Processed locally to handle offline states gracefully (e.g., displaying offline warnings). No network state logs are uploaded.</td>
                </tr>
              </tbody>
            </StyledTable>
          </TableWrapper>

          <h3>1.3 Third-Party Services &amp; APIs</h3>
          <p>
            Ved Astra leverages external APIs to perform complex astrological math and natural language processing:
          </p>
          <ul>
            <li>
              <strong>VedAstro Engine / API:</strong> Used to compute high-accuracy planetary coordinates and Nakshatra placements. The API takes date, time, and coordinates of birth and returns planetary positions. No user-identifiable data (such as name or email) is sent to this engine.
            </li>
            <li>
              <strong>Google Gemini API:</strong> Powers the AI Astrologer chat feature. Input context (including generated chart properties and user queries) is sent to Google's API to generate conversational astrology responses.
            </li>
          </ul>

          <h3>1.4 Data Deletion &amp; Management</h3>
          <p>
            Since no user accounts or persistent remote profiles are created, there is no data stored on RebelRoot servers to delete. Uninstalling the application completely wipes all local configurations, cache, and cached astrological charts from your device.
          </p>

          <hr />

          <h2>2. Data Safety &amp; Security Commitment</h2>
          <p>
            RebelRoot is committed to absolute transparent data policies. The app conforms to the following guidelines:
          </p>

          <h3>2.1 Zero Personal Identifiers</h3>
          <p>
            You can use all features of Ved Astra without creating an account, registering an email, or logging in. Calculations are performed on birth inputs which are processed instantly and are never linked to any personal identity.
          </p>

          <h3>2.2 Encryption in Transit</h3>
          <p>
            All network communication between the Android application, the FastAPI backend gateway, and third-party APIs (VedAstro and Google Gemini) is encrypted using industry-standard HTTPS (TLS 1.2/1.3) protocols.
          </p>

          <h3>2.3 Open Source Transparency</h3>
          <p>
            Ved Astra (Openved) is fully open-source. Anyone can audit the backend API gateway code and the Jetpack Compose Android client repository to verify the absence of telemetry or data-harvesting mechanisms.
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

const MetaDataBlock = styled.div`
  background: rgb(var(--secondBackground));
  padding: 2rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(var(--text), 0.08);
  margin-bottom: 3rem;
  
  p {
    margin: 0.5rem 0;
    font-size: 1.6rem;
  }
`;

const IntroParagraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  opacity: 0.9;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 3rem 0;
  border: 1px solid rgba(var(--text), 0.08);
  border-radius: 0.8rem;
`;

const StyledTable = styled.table`
  width: 100% !important;
  border-collapse: collapse !important;
  font-size: 1.5rem;

  th, td {
    padding: 1.5rem 2rem !important;
    border: 1px solid rgba(var(--text), 0.08) !important;
    text-align: left;
    vertical-align: top;
  }

  tr:nth-child(even) {
    background: rgba(var(--text), 0.04) !important;
  }

  tr:nth-child(odd) {
    background: transparent !important;
  }

  th {
    background: rgba(var(--secondary), 0.2) !important;
    font-weight: bold;
    color: rgb(var(--text)) !important;
  }

  tr:last-child td {
    border-bottom: 1px solid rgba(var(--text), 0.08) !important;
  }
  
  td:first-child {
    font-weight: bold;
    white-space: nowrap;
  }
`;
