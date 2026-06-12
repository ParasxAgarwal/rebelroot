import Head from 'next/head';
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
      <Head>
        <meta name="keywords" content="Omni Browser, RebelRoot, privacy browser, Android browser, GeckoView browser, uBlock Origin mobile, local ML translation, private vault app, secure mobile browser" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Omni Browser",
              "operatingSystem": "Android",
              "applicationCategory": "BrowserApplication",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              },
              "publisher": {
                "@type": "Organization",
                "name": "RebelRoot",
                "url": "https://rebelroot.xyz"
              },
              "downloadUrl": "https://github.com/rebelroot/omni-browser",
              "description": "A premium, privacy-first mobile web browser for Android built with Jetpack Compose & GeckoView engine. Features built-in uBlock Origin, offline ML translation, safe locker vault, and document scanner."
            })
          }}
        />
      </Head>
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

            <CTAWrapper>
              <Button href="https://play.google.com/store/apps/details?id=com.rebelroot.omni" target="_blank" rel="noopener noreferrer">
                Download on Google Play <span>&rarr;</span>
              </Button>
              <Button href="https://github.com/rebelroot/omni-browser" target="_blank" rel="noopener noreferrer" transparent>
                View Source on GitHub <span>&rarr;</span>
              </Button>
            </CTAWrapper>

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
                <CardIconWrapper>🔌</CardIconWrapper>
                <CardTitle>Extensions Manager</CardTitle>
                <CardDescription>
                  Desktop-Class Web Extensions Manager powered by GeckoView. Full mobile support for desktop add-ons, pre-bundled with <strong>uBlock Origin</strong>, <strong>Universal Text Copy</strong>, and <strong>Aggressive Media Grabber</strong>, complete with a dynamic "Syncing" toggle UI.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>🧠</CardIconWrapper>
                <CardTitle>On-Device ML Translator</CardTitle>
                <CardDescription>
                  Translate entire web pages via proxies or process private, 100% offline text translation across 14 languages utilizing local <strong>Google ML Kit</strong> models.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>🔐</CardIconWrapper>
                <CardTitle>Safe Locker Vault</CardTitle>
                <CardDescription>
                  A secure, biometric-protected private vault. A sandboxed directory that uses hardware-backed <strong>AES-256 encryption (EncryptedFile)</strong> and fingerprint/PIN credentials to safeguard sensitive files.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>📄</CardIconWrapper>
                <CardTitle>Doc Scanner (ML Edge)</CardTitle>
                <CardDescription>
                  Zero-permission document scanner powered by Google Play Services ML Kit. Automatically detects document edges, straightens, crops, and optimizes scans completely offline.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>🔍</CardIconWrapper>
                <CardTitle>QR Tools Suite</CardTitle>
                <CardDescription>
                  Built-in QR code scanner that requires zero camera permissions, paired with a custom QR code generator for instant URL and text sharing.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>📋</CardIconWrapper>
                <CardTitle>Universal Text Copy</CardTitle>
                <CardDescription>
                  Overrides annoying website copy protections (such as <code>user-select: none</code> or custom copy-blocker scripts) to force-enable text selection.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>📥</CardIconWrapper>
                <CardTitle>Aggressive Media Grabber</CardTitle>
                <CardDescription>
                  Automatically sniffs and intercepts background network streams (including HLS/m3u8, DASH, and video blobs) for offline play, routed directly to the native player.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>🛠️</CardIconWrapper>
                <CardTitle>Unified Quick Tools</CardTitle>
                <CardDescription>
                  A one-tap bottom sheet housing scanners, translators, lockers, bookmarks, configuration settings, and browsing history in a clean, unified drawer.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>📝</CardIconWrapper>
                <CardTitle>Interactive Page Editor</CardTitle>
                <CardDescription>
                  "Edit Site" utility turns any loaded webpage into an interactive edit workspace. Tap and modify text in-place for presentation mockups and layout adjustments.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>🖨️</CardIconWrapper>
                <CardTitle>Clean PDF Maker</CardTitle>
                <CardDescription>
                  "Save PDF" feature captures and prints clean PDF copies of webpages, automatically stripping header banners, footer bars, and margins.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>🎥</CardIconWrapper>
                <CardTitle>Advanced Video Player</CardTitle>
                <CardDescription>
                  Native ExoPlayer with swipe gesture controls for brightness (left margin) and volume (right margin), background audio play, and floating Picture-in-Picture (PiP) window overlay.
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <CardIconWrapper>📌</CardIconWrapper>
                <CardTitle>Instant Web App Pinning</CardTitle>
                <CardDescription>
                  "Pin Web App" generates shortcut icons on your Android home launcher screen to launch websites in dedicated, sandboxed WebApp containers.
                </CardDescription>
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
                  <tr>
                    <td><strong>Universal Text Copy</strong></td>
                    <td>Yes (Bypasses restriction)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Interactive Page Editor</strong></td>
                    <td>Yes (In-place tap-to-edit)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td><strong>Instant Web App Pinning</strong></td>
                    <td>Yes (Launcher shortcuts)</td>
                    <td>Yes (Standard PWA)</td>
                    <td>Yes (Standard PWA)</td>
                    <td>Limited</td>
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
                <Button href="https://play.google.com/store/apps/details?id=com.rebelroot.omni" target="_blank" rel="noopener noreferrer">
                  Get it on Google Play <span>&rarr;</span>
                </Button>
                <Button href="https://github.com/rebelroot/omni-browser" target="_blank" rel="noopener noreferrer" transparent>
                  GitHub Repository <span>&rarr;</span>
                </Button>
                <Button href="/omnibrowser/privacy-policy" transparent>
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
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 5rem;

  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgb(var(--secondBackground));
  border: 1px solid rgba(var(--text), 0.05);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(var(--primary), 0.4);
    box-shadow: 0 15px 30px -10px rgba(var(--primary), 0.15);
  }
`;

const CardIconWrapper = styled.div`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(135deg, rgba(var(--primary), 0.1) 0%, rgba(var(--secondary), 0.1) 100%);
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(var(--primary), 0.15);
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: rgb(var(--text));
`;

const CardDescription = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: rgba(var(--text), 0.75);

  strong {
    color: rgb(var(--text));
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

const CTAWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;

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

