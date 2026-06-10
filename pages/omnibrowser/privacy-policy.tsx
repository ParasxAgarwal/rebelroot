import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function OmniBrowserPrivacyPolicyPage() {
  return (
    <Page
      title="Privacy Policy &amp; Data Safety"
      description="Omni Browser is built on a strict privacy-first, on-device-first architecture. Read our full data declarations and Google Play Safety guidelines."
    >
      <PrivacyPolicyContainer>
        <RichText>
          <MetaDataBlock>
            <p><strong>Last Updated:</strong> June 8, 2026</p>
            <p><strong>Publisher:</strong> RebelRoot</p>
            <p><strong>App Name:</strong> Omni Browser</p>
            <p><strong>Package Name:</strong> <code>com.rebelroot.omni</code></p>
          </MetaDataBlock>

          <IntroParagraph>
            This document details the Privacy Policy and Data Security configurations for Omni Browser. Because Omni Browser is built on a strict privacy-first, on-device-first architecture, the application does not collect, monitor, store, or share any user personal information on remote servers.
          </IntroParagraph>

          <hr />

          <h2>1. Privacy Policy</h2>

          <h3>1.1 Data Collection &amp; Transmission</h3>
          <ul>
            <li>
              <strong>Zero Remote Storage:</strong> RebelRoot does not host any backend databases, account servers, or analytics pipelines for Omni Browser. All browsing history, bookmarks, open tabs, cookies, and locker files remain entirely on your local device.
            </li>
            <li>
              <strong>No Telemetry / Analytics:</strong> All analytics and diagnostic telemetry inside secondary components have been deactivated:
              <ul>
                <li>
                  <strong>Google ML Kit Telemetry Opt-Out:</strong> Omni Browser opts out of ML Kit telemetry tracking. No translation strings, scanner logs, or device details are sent to Google.
                </li>
                <li>
                  <strong>No Third-Party SDKs:</strong> The app contains no advertisement SDKs, crash reporters (like Firebase Crashlytics), or telemetry tracking code.
                </li>
              </ul>
            </li>
          </ul>

          <h3>1.2 Permissions &amp; Usage Disclosure</h3>
          <p>
            Omni Browser requests permissions only when necessary to perform core browser and utility features. All data processed via these permissions remains on-device:
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
                  <td>Core web browsing, loading websites, and downloading web resources.</td>
                  <td>No URL requests or browsing traffic are logged or shared by RebelRoot.</td>
                </tr>
                <tr>
                  <td><strong>USE_BIOMETRIC</strong></td>
                  <td>Authenticating user access to the secure Locker feature.</td>
                  <td>Handled via Android&apos;s Secure Biometric API. Biometric credentials are stored securely in the device&apos;s hardware (TEE/StrongBox) and are never accessible to the app.</td>
                </tr>
                <tr>
                  <td><strong>CAMERA</strong></td>
                  <td>Allowing websites to access the camera for in-browser video calls (WebRTC), scanning QR codes, or document scanning.</td>
                  <td>Processing is local. Video frames are only streamed to web destinations explicitly approved by the user.</td>
                </tr>
                <tr>
                  <td><strong>RECORD_AUDIO</strong></td>
                  <td>Allowing websites to capture audio for voice calls (WebRTC) and audio recordings.</td>
                  <td>Streams are peer-to-peer or sent directly to websites explicitly authorized by the user.</td>
                </tr>
                <tr>
                  <td><strong>ACCESS_FINE_LOCATION</strong> &amp;<br /><strong>ACCESS_COARSE_LOCATION</strong></td>
                  <td>Sharing your device location with websites that request it (e.g., maps, local delivery).</td>
                  <td>Geolocation coordinates are only accessed after explicit user prompt approvals and are sent directly to the requesting site. RebelRoot never collects location history.</td>
                </tr>
                <tr>
                  <td><strong>READ / WRITE STORAGE</strong> &amp;<br /><strong>READ_MEDIA_...</strong></td>
                  <td>Accessing the device storage to save file downloads or import/export files from/into the secure Locker.</td>
                  <td>Uses MediaStore and Scoped Storage APIs to restrict permission scopes to media folders only.</td>
                </tr>
                <tr>
                  <td><strong>POST_NOTIFICATIONS</strong></td>
                  <td>Displaying progress bars and completion statuses for active file downloads.</td>
                  <td>Local system notifications only.</td>
                </tr>
              </tbody>
            </StyledTable>
          </TableWrapper>

          <h3>1.3 Third-Party Services &amp; Libraries</h3>
          <p>
            Omni Browser incorporates open-source and Google libraries for local utilities:
          </p>
          <ul>
            <li>
              <strong>Mozilla GeckoView Engine:</strong> Renders web pages. It operates locally and adheres to standard Web API protocols.
            </li>
            <li>
              <strong>WireGuard VPN:</strong> Operates locally to encrypt external web traffic. Omni Browser does not monitor, route, or decrypt network traffic passing through the tunnel.
            </li>
            <li>
              <strong>Google Play Services (Code &amp; Document Scanners):</strong> Utilizes zero-permission clients where Google Play Services handles OCR and scanning operations locally on-device.
            </li>
          </ul>

          <h3>1.4 Data Deletion</h3>
          <p>
            All local data can be incinerated instantly using the built-in <strong>Fire Button</strong> (data incinerator), which executes clean database and memory wipes. Uninstalling the application completely deletes all browser records, encrypted lockers, and database files.
          </p>

          <hr />

          <h2>2. Google Play Console Data Safety Form Guide</h2>
          <p>
            When publishing Omni Browser on the Google Play Console, use the following guide to fill out the <strong>Data Safety Form</strong> based on the app&apos;s technical implementation:
          </p>

          <h3>Section 1: Data Collection and Sharing</h3>
          <ul>
            <li>
              <strong>Does your app collect or share any of the required user data types?</strong><br />
              Select <strong>No</strong>. (Omni Browser does not collect or share any user data. All data resides locally).
            </li>
          </ul>

          <h3>Section 2: Security Practices</h3>
          <ul>
            <li>
              <strong>Is all of the user data collected by your app encrypted in transit?</strong><br />
              Select <strong>Yes</strong> (or N/A, since no data is collected. If Yes, disclose that all web traffic uses industry-standard HTTPS protocols, and the app enforces TLS for WebExtension APIs).
            </li>
            <li>
              <strong>Do you provide a way for users to request that their data be deleted?</strong><br />
              Select <strong>Yes</strong>. Disclose that users can delete all data instantly in-app using the &quot;Fire Button&quot; or by uninstalling the application.
            </li>
          </ul>

          <h3>Section 3: Device or Other IDs</h3>
          <ul>
            <li>
              <strong>Does your app collect or share Device or other IDs?</strong><br />
              Select <strong>No</strong>. (We do not collect Android ID, IMEI, MAC address, or advertising IDs).
            </li>
          </ul>

          <hr />

          <h2>3. Data Security Implementation Details (Technical)</h2>
          <p>
            To back up the Data Safety declarations, Omni Browser incorporates the following security controls at the code level:
          </p>
          <ol>
            <li>
              <strong>SQLCipher Database Encryption:</strong><br />
              All SQLite databases (history, settings, bookmarks) are encrypted using <strong>SQLCipher (AES-256)</strong> via the Android Room library. The encryption key is derived securely and stored using Android Keystore.
            </li>
            <li>
              <strong>EncryptedFile Storage:</strong><br />
              Imported locker files are encrypted on-disk using AndroidX Security-Crypto wrapper around AES-256 GCM encryption.
            </li>
            <li>
              <strong>No Cleartext Traffic:</strong><br />
              Cleartext HTTP requests from the Android Application layers are blocked (HTTPS enforcement).
            </li>
            <li>
              <strong>Log Stripping:</strong><br />
              Production release builds run aggressive R8 optimizations to strip out all debug and informative log outputs, preventing sensitive browser variables from being dumped into the system logcat.
            </li>
          </ol>
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
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;

  th, td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(var(--text), 0.08);
    text-align: left;
    vertical-align: top;
  }

  th {
    background: rgba(var(--secondary), 0.08);
    font-weight: bold;
  }

  tr:last-child td {
    border-bottom: none;
  }
  
  td:first-child {
    font-weight: bold;
    white-space: nowrap;
  }
`;
