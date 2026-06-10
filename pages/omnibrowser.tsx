import styled from 'styled-components';
import Page from 'components/Page';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import OverTitle from 'components/OverTitle';
import Code from 'components/Code';
import { media } from 'utils/media';

export default function OmniBrowserPage() {
  const cloneCode = `git clone https://github.com/rebelroot/omni-browser.git
cd omni-browser`;

  const buildCode = `./gradlew compileDebugKotlin
./gradlew assembleDebug`;

  return (
    <Page
      title="Omni Browser"
      description="A premium, privacy-first mobile web browser for Android built with Jetpack Compose & GeckoView engine."
    >
      <MainWrapper>
        {/* Hero Section */}
        <IntroSection>
          <IntroContent>
            <BrowserLogoWrapper>
              <BrowserLogo src="/ic_omni_logo.webp" alt="Omni Browser Logo" />
            </BrowserLogoWrapper>
            <OverTitle>Secure Android Navigator</OverTitle>
            <Title>Desktop-Grade Performance in Your Pocket</Title>
            
            {/* Tech Badges */}
            <BadgeContainer>
              <Badge color="#4F73E6">Kotlin 1.9.24</Badge>
              <Badge color="#4CAF50">Compose Material 3</Badge>
              <Badge color="#FF9800">GeckoView v145</Badge>
              <Badge color="#9C27B0">MIT License</Badge>
            </BadgeContainer>

            <Subtitle>
              Omni Browser is a state-of-the-art mobile browser developed by the RebelRoot collective. Powered by Mozilla&apos;s GeckoView engine, it provides built-in ad blocking, Firefox extensions, offline ML translation, and secure sandbox mechanics.
            </Subtitle>

            <ScreenshotWrapper>
              <ScreenshotImage src="/omni-browser-screenshot.png" alt="Omni Browser Mobile User Interface" />
            </ScreenshotWrapper>
          </IntroContent>
        </IntroSection>

        {/* Unidirectional Architecture Flow */}
        <ArchitectureSection>
          <Container>
            <SectionTitle>Unidirectional Data Architecture</SectionTitle>
            <ArchFlow>
              <ArchNode>
                <h5>Jetpack Compose UI</h5>
                <p>Observe state, dispatch interactions</p>
              </ArchNode>
              <ArchConnector>&rarr;</ArchConnector>
              <ArchNode>
                <h5>BrowserViewModel</h5>
                <p>State repository & command handler</p>
              </ArchNode>
              <ArchConnector>&rarr;</ArchConnector>
              <ArchNode>
                <h5>GeckoSession</h5>
                <p>Direct hook into GeckoView rendering</p>
              </ArchNode>
              <ArchConnector>&rarr;</ArchConnector>
              <ArchNode>
                <h5>MediaInterceptor</h5>
                <p>ExoPlayer hardware stream interception</p>
              </ArchNode>
            </ArchFlow>
          </Container>
        </ArchitectureSection>

        {/* Feature Highlights Grid */}
        <FeaturesSection>
          <Container>
            <SectionTitle>Engineered Features</SectionTitle>
            <FeaturesGrid>
              <FeatureCard>
                <CardIcon>🛡️</CardIcon>
                <CardTitle>Privacy & Hardened Security</CardTitle>
                <CardList>
                  <li><strong>uBlock Origin:</strong> Embedded blocker strips ads, malicious analytics, cookie modals, and telemetry.</li>
                  <li><strong>Incognito Sandbox:</strong> Private Browsing isolates storage, ensuring session tracking data is completely deleted.</li>
                  <li><strong>Instant Session Burn:</strong> One-tap trigger purges active session cache, cookies, and system memory.</li>
                  <li><strong>Keystore Locker:</strong> Local down folder encrypted using hardware-backed AES-256 standards.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>🔌</CardIcon>
                <CardTitle>Extensibility & Add-ons</CardTitle>
                <CardList>
                  <li><strong>WebExtensions Support:</strong> Direct compatibility with standard Firefox mobile add-ons (.xpi files).</li>
                  <li><strong>Native Options Router:</strong> Access and configure extension panels directly within standard browser tabs.</li>
                  <li><strong>Custom Pre-bundling:</strong> Add your favorite productivity extensions into assets prior to deployment.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>🎥</CardIcon>
                <CardTitle>Decoded Playback & Sniffer</CardTitle>
                <CardList>
                  <li><strong>Stream Interception:</strong> Sniffer service detects HLS, DASH, Blob, and MSE media streams dynamically.</li>
                  <li><strong>Gesture ExoPlayer:</strong> Fully featured custom video player utilizing hardware acceleration.</li>
                  <li><strong>Premium UI Controls:</strong> Gestures for brightness, audio levels, picture-in-picture, and background playback.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>🧠</CardIcon>
                <CardTitle>On-Device Intelligence</CardTitle>
                <CardList>
                  <li><strong>Offline Translator:</strong> Secure, local translation powered by neural models (Google ML Kit).</li>
                  <li><strong>Smart Scanner:</strong> Scan documents with perspective alignment and edge detection.</li>
                  <li><strong>QR / Barcode Utility:</strong> Instant extraction of Wi-Fi credentials, contact cards, and URLs.</li>
                </CardList>
              </FeatureCard>
            </FeaturesGrid>
          </Container>
        </FeaturesSection>

        {/* Browser Comparison Table */}
        <ComparisonSection>
          <Container>
            <SectionTitle>Browser Comparison Table</SectionTitle>
            <TableWrapper>
              <ComparisonTable>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Omni Browser (RebelRoot)</th>
                    <th>Google Chrome</th>
                    <th>Brave</th>
                    <th>Firefox Android</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Engine</strong></td>
                    <td>GeckoView v145 (Firefox)</td>
                    <td>Blink (Chromium)</td>
                    <td>Blink (Chromium)</td>
                    <td>GeckoView (Firefox)</td>
                  </tr>
                  <tr>
                    <td><strong>Open Source</strong></td>
                    <td>Yes</td>
                    <td>No (Proprietary)</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Adblocking</strong></td>
                    <td>Yes (uBlock Origin built-in)</td>
                    <td>No</td>
                    <td>Yes (Brave Shields)</td>
                    <td>Yes (Add-ons only)</td>
                  </tr>
                  <tr>
                    <td><strong>Unlimited Add-ons</strong></td>
                    <td>Yes (Firefox store .xpi)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes (Curated list)</td>
                  </tr>
                  <tr>
                    <td><strong>Extension Options UI</strong></td>
                    <td>Yes (Direct settings tabs)</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>Limited</td>
                  </tr>
                  <tr>
                    <td><strong>Aggressive Stream Sniffer</strong></td>
                    <td>Yes (Auto-captures HLS/DASH)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Native Video Player</strong></td>
                    <td>Yes (ExoPlayer with download)</td>
                    <td>No (Basic WebView)</td>
                    <td>No (Basic WebView)</td>
                    <td>No (Basic WebView)</td>
                  </tr>
                  <tr>
                    <td><strong>Offline Translator</strong></td>
                    <td>Yes (On-device ML Kit)</td>
                    <td>Yes (Cloud/On-device)</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Document Scanner</strong></td>
                    <td>Yes (ML Kit Document API)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Private Locker</strong></td>
                    <td>Yes (Biometric & Pin encrypted)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>One-Tap Session Burn</strong></td>
                    <td>Yes (Instant memory wipe)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes (Firefox Focus only)</td>
                  </tr>
                </tbody>
              </ComparisonTable>
            </TableWrapper>
          </Container>
        </ComparisonSection>

        {/* Repository Structure Visualizer */}
        <RepoSection>
          <Container>
            <SectionTitle>Repository Hierarchy</SectionTitle>
            <RepoContainer>
              <RepoNode>
                <RepoFolder>📁 omni-browser/</RepoFolder>
                <RepoTree>
                  <RepoNode>
                    <RepoFolder>📁 app/</RepoFolder>
                    <RepoTree>
                      <RepoNode>
                        <RepoFolder>📁 src/main/</RepoFolder>
                        <RepoTree>
                          <RepoNode>
                            <RepoFolder>📁 assets/</RepoFolder>
                            <RepoFile>&emsp;📄 Pre-bundled WebExtensions (uBlock Origin, Sniffer)</RepoFile>
                          </RepoNode>
                          <RepoNode>
                            <RepoFolder>📁 java/com/rebelroot/omni/</RepoFolder>
                            <RepoTree>
                              <RepoFile>📂 browser/ &mdash; Compose Layouts & ViewModels</RepoFile>
                              <RepoFile>📂 history/ &mdash; Local JSON-based History Store</RepoFile>
                              <RepoFile>📂 media/ &mdash; ExoPlayer Playback & Interceptor Engine</RepoFile>
                              <RepoFile>📂 privacy/ &mdash; Encryption Lockers & Session Incineration</RepoFile>
                              <RepoFile>📂 tools/ &mdash; ML Kit Local Translation & Scan Helpers</RepoFile>
                              <RepoFile>📂 vpn/ &mdash; WireGuard Tunnel Integration Settings</RepoFile>
                            </RepoTree>
                          </RepoNode>
                        </RepoTree>
                      </RepoNode>
                      <RepoFile>📄 proguard-rules.pro &mdash; Optimization, obfuscation & shrinking rules</RepoFile>
                      <RepoFile>📄 build.gradle.kts &mdash; Build dependencies & target configurations</RepoFile>
                    </RepoTree>
                  </RepoNode>
                </RepoTree>
              </RepoNode>
            </RepoContainer>
          </Container>
        </RepoSection>

        {/* Build & Compile Instructions */}
        <BuildSection>
          <Container>
            <SectionTitle>Building From Source</SectionTitle>
            <BuildContainer>
              <BuildStepBlock>
                <h4>1. Setup Repository</h4>
                <Code code={cloneCode} language="bash" />
              </BuildStepBlock>
              <BuildStepBlock>
                <h4>2. Compile Kotlin & Assemble APK</h4>
                <Code code={buildCode} language="bash" />
                <p>The compiled debug APK package will be generated at <code>app/build/outputs/apk/debug/app-debug.apk</code>.</p>
              </BuildStepBlock>
            </BuildContainer>
          </Container>
        </BuildSection>

        {/* Bottom Call To Action */}
        <BottomCTASection>
          <Container>
            <CTAInner>
              <h3>Contribute to Omni Browser</h3>
              <p>We welcome code audits, battery optimizations, adblock list updates, and localization translations.</p>
              <ButtonGroup>
                <Button href="https://github.com/rebelroot/omni-browser" target="_blank" rel="noopener noreferrer">
                  GitHub Repository <span>&rarr;</span>
                </Button>
                <Button href="/omnibrowser/privacy-policy">
                  Privacy Policy <span>&rarr;</span>
                </Button>
              </ButtonGroup>
            </CTAInner>
          </Container>
        </BottomCTASection>
      </MainWrapper>
    </Page>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > section {
    padding: 8rem 0;

    ${media('<=tablet')} {
      padding: 5rem 0;
    }
  }
`;

const IntroSection = styled.section`
  text-align: center;
  background: linear-gradient(180deg, rgba(var(--secondary), 0.05) 0%, rgba(var(--background), 0) 100%);
`;

const IntroContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80rem;
`;

const ScreenshotWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  max-width: 32rem;
  display: flex;
  justify-content: center;
  perspective: 1000px;
`;

const ScreenshotImage = styled.img`
  width: 100%;
  border-radius: 3rem;
  border: 10px solid rgb(var(--secondBackground));
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(var(--primary), 0.1);
  transform: rotateX(5deg);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: rotateX(0deg) scale(1.02);
    box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.6), 0 0 50px rgba(var(--primary), 0.2);
  }
`;

const BrowserLogoWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  background: rgb(var(--secondBackground));
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(var(--text), 0.05);
  margin-bottom: 3rem;
`;

const BrowserLogo = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 1.15;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  letter-spacing: -0.02em;

  ${media('<=tablet')} {
    font-size: 3.6rem;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Badge = styled.span<{ color: string }>`
  background-color: ${(props) => props.color};
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  border-radius: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  letter-spacing: 0.02em;
`;

const Subtitle = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  opacity: 0.8;
  font-weight: 400;
`;

const ArchitectureSection = styled.section`
  background: rgb(var(--secondBackground));
  border-top: 1px solid rgba(var(--text), 0.05);
  border-bottom: 1px solid rgba(var(--text), 0.05);
`;

const ArchFlow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  gap: 2rem;

  ${media('<=desktop')} {
    flex-direction: column;
    justify-content: center;
  }
`;

const ArchNode = styled.div`
  background: rgb(var(--background));
  padding: 2.5rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(var(--text), 0.08);
  flex: 1;
  min-width: 18rem;
  max-width: 24rem;
  box-shadow: var(--shadow-md);
  text-align: center;

  h5 {
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: rgb(var(--primary));
  }

  p {
    font-size: 1.3rem;
    opacity: 0.7;
    line-height: 1.4;
  }
`;

const ArchConnector = styled.div`
  font-size: 2.4rem;
  color: rgb(var(--primary));
  font-weight: bold;

  ${media('<=desktop')} {
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
`;

const FeaturesSection = styled.section``;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-top: 5rem;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgb(var(--secondBackground));
  border: 1px solid rgba(var(--text), 0.05);
  border-radius: 1rem;
  padding: 4rem;
  box-shadow: var(--shadow-md);
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(var(--primary), 0.3);
  }

  ${media('<=tablet')} {
    padding: 2.5rem;
  }
`;

const CardIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    opacity: 0.85;

    strong {
      color: rgb(var(--text));
    }
  }
`;

const RepoSection = styled.section`
  background: rgb(var(--secondBackground));
  border-top: 1px solid rgba(var(--text), 0.05);
  border-bottom: 1px solid rgba(var(--text), 0.05);
`;

const RepoContainer = styled.div`
  background: rgb(var(--background));
  border: 1px solid rgba(var(--text), 0.05);
  border-radius: 1rem;
  padding: 4rem;
  margin-top: 5rem;
  font-family: monospace;
  font-size: 1.5rem;
  box-shadow: var(--shadow-md);
  overflow-x: auto;

  ${media('<=tablet')} {
    padding: 2.5rem;
    font-size: 1.3rem;
  }
`;

const RepoNode = styled.div`
  margin-left: 2rem;

  ${media('<=tablet')} {
    margin-left: 1rem;
  }
`;

const RepoFolder = styled.div`
  color: rgb(var(--primary));
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const RepoFile = styled.div`
  color: rgb(var(--text));
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const RepoTree = styled.div`
  border-left: 1px dashed rgba(var(--text), 0.2);
  margin-left: 1rem;
  padding-left: 1rem;

  ${media('<=tablet')} {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
  }
`;

const BuildSection = styled.section``;

const BuildContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 5rem;
`;

const BuildStepBlock = styled.div`
  h4 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: rgb(var(--text));
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.4rem;
    opacity: 0.7;
  }
`;

const BottomCTASection = styled.section`
  background: rgb(var(--background));
`;

const CTAInner = styled.div`
  background: linear-gradient(135deg, rgba(var(--primary), 0.1) 0%, rgba(var(--secondary), 0.1) 100%);
  border: 1px solid rgba(var(--primary), 0.2);
  border-radius: 1.5rem;
  padding: 6rem;
  text-align: center;
  max-width: 90rem;
  margin: 0 auto;
  box-shadow: var(--shadow-lg);

  h3 {
    font-size: 3.2rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.8rem;
    opacity: 0.8;
    margin-bottom: 3.5rem;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  ${media('<=tablet')} {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const ComparisonSection = styled.section`
  background: rgb(var(--background));
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 5rem;
  border: 1px solid rgba(var(--text), 0.08);
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 1.5rem;
  background: rgb(var(--secondBackground));

  th, td {
    padding: 1.8rem 2rem;
    border-bottom: 1px solid rgba(var(--text), 0.08);
    white-space: nowrap;
  }

  th {
    background: rgba(var(--secondary), 0.1);
    font-weight: 700;
    color: rgb(var(--text));
  }

  tr:last-child td {
    border-bottom: none;
  }

  /* Sticky first column */
  th:first-child, td:first-child {
    position: sticky;
    left: 0;
    background: rgb(var(--secondBackground));
    z-index: 1;
    border-right: 1px solid rgba(var(--text), 0.08);
    box-shadow: 2px 0 5px -2px rgba(0, 0, 0, 0.1);
  }

  th:first-child {
    background: rgb(var(--secondBackground));
    background-image: linear-gradient(rgba(var(--secondary), 0.1), rgba(var(--secondary), 0.1));
    z-index: 2;
  }

  /* Highlight Omni Browser column */
  td:nth-child(2), th:nth-child(2) {
    background: rgba(var(--primary), 0.05);
    font-weight: 500;
  }
  
  td:nth-child(2) {
    color: rgb(var(--text));
  }
`;

