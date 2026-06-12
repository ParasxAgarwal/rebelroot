import Head from 'next/head';
import styled from 'styled-components';
import Page from 'components/Page';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function CampCartPage() {
  return (
    <Page
      title="CampCart"
      description="A secure peer-to-peer campus exchange marketplace for colleges and universities built with React, Cloudflare Workers, and Stripe/Juspay payments."
    >
      <Head>
        <meta name="keywords" content="CampCart, RebelRoot, campus marketplace, student exchange, textbook exchange, buy sell college, campus classifieds, student e-commerce, Cloudflare Workers marketplace" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "CampCart",
              "operatingSystem": "Web",
              "applicationCategory": "BusinessApplication",
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
              "downloadUrl": "https://github.com/RebelRoot/CAMPCART",
              "description": "A secure peer-to-peer campus exchange marketplace for colleges and universities built with React, Cloudflare Workers, and Stripe/Juspay payments."
            })
          }}
        />
      </Head>
      <MainWrapper>
        {/* Project Intro Section */}
        <IntroSection>
          <IntroContent>
            <OverTitle>Featured Product Showcase</OverTitle>
            <Title>The Safe, Trusted Campus Exchange Marketplace</Title>
            <Subtitle>
              CampCart is a decentralized peer-to-peer marketplace built specifically for college and university students. Buy, sell, and rent textbooks, dorm gear, and campus essentials within a secure campus-only network.
            </Subtitle>
            <CTAWrapper>
              <Button href="https://campcart.online" target="_blank" rel="noopener noreferrer">
                Visit campcart.online <span>&rarr;</span>
              </Button>
            </CTAWrapper>
          </IntroContent>
        </IntroSection>

        {/* User Flow Visualizer */}
        <VisualizerSection>
          <Container>
            <SectionTitle>The CampCart Exchange Lifecycle</SectionTitle>
            <FlowContainer>
              <FlowStep>
                <StepNumber>01</StepNumber>
                <StepName>Verify</StepName>
                <StepDesc>Sign up with student (.edu) email</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>02</StepNumber>
                <StepName>List</StepName>
                <StepDesc>List gear with photos in seconds</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>03</StepNumber>
                <StepName>Chat</StepName>
                <StepDesc>Negotiate via real-time chat</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>04</StepNumber>
                <StepName>Pay</StepName>
                <StepDesc>Secure escrow via Stripe/Juspay</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>05</StepNumber>
                <StepName>Meet</StepName>
                <StepDesc>Exchange at designated safe zones</StepDesc>
              </FlowStep>
            </FlowContainer>
          </Container>
        </VisualizerSection>

        {/* Core Features Grid */}
        <FeaturesSection>
          <Container>
            <SectionTitle>Platform Capabilities</SectionTitle>
            <FeaturesGrid>
              <FeatureCard>
                <CardIcon>🎓</CardIcon>
                <CardTitle>Verified Student Network</CardTitle>
                <CardList>
                  <li><strong>EDU Domain Check:</strong> Restricts accounts to verified college/university emails.</li>
                  <li><strong>Trust Seals:</strong> Profiles show verified student badges and rating reviews.</li>
                  <li><strong>Zero Spam:</strong> Prevents commercial sellers and outside scammers from listings.</li>
                  <li><strong>Campus Circles:</strong> Users can browse listings exclusively within their own campus.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>💳</CardIcon>
                <CardTitle>Multi-Gateway Payments</CardTitle>
                <CardList>
                  <li><strong>Stripe Integration:</strong> Support for global credit card billing and checkout.</li>
                  <li><strong>Juspay Hyper SDK:</strong> Integrated UPI, Net Banking, and local Indian wallet support.</li>
                  <li><strong>Escrow Settlement:</strong> Funds are safely held until both parties confirm exchange.</li>
                  <li><strong>Zero Hidden Fees:</strong> Free peer-to-peer cash transactions with low card processing rates.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>💬</CardIcon>
                <CardTitle>Real-Time Campus Chat</CardTitle>
                <CardList>
                  <li><strong>Instant Messaging:</strong> Live WebSockets chat connection to arrange item pickups.</li>
                  <li><strong>Offer Router:</strong> Send, accept, or reject monetary offers directly within the chat.</li>
                  <li><strong>Push Alerts:</strong> Receive system notifications on offers and messages.</li>
                  <li><strong>Image Attachments:</strong> Share live product conditions and photos privately.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>📍</CardIcon>
                <CardTitle>Campus Safety Maps</CardTitle>
                <CardList>
                  <li><strong>Safe Meeting Zones:</strong> Highlights campus lobbies, police stations, and libraries.</li>
                  <li><strong>Geolocation:</strong> Coordinates meeting spots precisely on interactive campus maps.</li>
                  <li><strong>Confirmation Pin:</strong> Transaction locks and confirms exchange via a secure 4-digit PIN.</li>
                  <li><strong>Safety Checklist:</strong> Reminds students of safety guidelines before meeting.</li>
                </CardList>
              </FeatureCard>
            </FeaturesGrid>
          </Container>
        </FeaturesSection>

        {/* Technical Stack Section */}
        <TechStackSection>
          <Container>
            <SectionTitle>Technical Specifications</SectionTitle>
            <TechGrids>
              <TechGridBlock>
                <BlockHeader>Backend &amp; API Stack</BlockHeader>
                <TechTable>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>API Gateway &amp; Workers</td>
                      <td>Cloudflare Workers (Edge Serverless)</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>MongoDB Atlas (via FerretDB)</td>
                    </tr>
                    <tr>
                      <td>Real-time Chat Engine</td>
                      <td>PM2 + WebSocket Services (Node.js)</td>
                    </tr>
                    <tr>
                      <td>Security &amp; Tunneling</td>
                      <td>Cloudflare Tunnel (Cloudflared config)</td>
                    </tr>
                    <tr>
                      <td>Storage Bucket</td>
                      <td>Cloudinary API (Optimized image hosting)</td>
                    </tr>
                    <tr>
                      <td>Verification Services</td>
                      <td>Cloudflare Turnstile (Anti-bot protection)</td>
                    </tr>
                  </tbody>
                </TechTable>
              </TechGridBlock>

              <TechGridBlock>
                <BlockHeader>Frontend &amp; Client Stack</BlockHeader>
                <TechTable>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Web Application</td>
                      <td>Vite + React 18 + TypeScript</td>
                    </tr>
                    <tr>
                      <td>Query &amp; Cache State</td>
                      <td>TanStack React Query</td>
                    </tr>
                    <tr>
                      <td>Network Requests</td>
                      <td>Axios Client</td>
                    </tr>
                    <tr>
                      <td>Stripe Provider</td>
                      <td>React Stripe JS / Stripe SDK</td>
                    </tr>
                    <tr>
                      <td>Juspay Provider</td>
                      <td>Juspay Hyper React SDK</td>
                    </tr>
                    <tr>
                      <td>Styling Layouts</td>
                      <td>Vanilla CSS / Styled Components</td>
                    </tr>
                  </tbody>
                </TechTable>
              </TechGridBlock>
            </TechGrids>
          </Container>
        </TechStackSection>

        {/* Scalability Highlights */}
        <HighlightsSection>
          <Container>
            <SectionTitle>Built For Zero Latency</SectionTitle>
            <HighlightsGrid>
              <HighlightItem>
                <h4>⚡ Edge Execution</h4>
                <p>Deploying API handlers on Cloudflare Workers guarantees sub-10ms response times globally near students.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>🛡️ Secure Payments</h4>
                <p>Built-in PCI compliance through Stripe Elements and Juspay SDK ensures payment numbers are never stored locally.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>🔄 High Throughput</h4>
                <p>Chat routers operate on persistent Node.js WebSockets, handling thousands of simultaneous connections easily.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>📈 Dynamic Scaling</h4>
                <p>MongoDB database handles read-heavy queries cleanly while cloud image resizing optimizes mobile data usage.</p>
              </HighlightItem>
            </HighlightsGrid>
          </Container>
        </HighlightsSection>

        {/* Bottom CTA */}
        <BottomCTA>
          <Container>
            <CTAContainer>
              <h3>Experience CampCart Live</h3>
              <p>Explore listings on your campus, test secure checkout channels, and buy/sell securely.</p>
              <Button href="https://campcart.online" target="_blank" rel="noopener noreferrer">
                Launch Platform <span>&rarr;</span>
              </Button>
            </CTAContainer>
          </Container>
        </BottomCTA>
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

const Subtitle = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 4rem;
  font-weight: 400;

  ${media('<=tablet')} {
    font-size: 1.8rem;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const VisualizerSection = styled.section`
  background: rgb(var(--secondBackground));
  border-top: 1px solid rgba(var(--text), 0.05);
  border-bottom: 1px solid rgba(var(--text), 0.05);
`;

const FlowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  gap: 2rem;

  ${media('<=desktop')} {
    justify-content: center;
  }
`;

const FlowStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgb(var(--background));
  padding: 2.5rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(var(--text), 0.08);
  flex: 1;
  min-width: 16rem;
  max-width: 20rem;
  box-shadow: var(--shadow-md);
`;

const StepNumber = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: rgb(var(--primary));
  opacity: 0.8;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
`;

const StepName = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  font-size: 1.3rem;
  opacity: 0.6;
  line-height: 1.4;
`;

const FlowArrow = styled.div`
  font-size: 2.4rem;
  color: rgb(var(--primary));
  font-weight: bold;

  ${media('<=desktop')} {
    display: none;
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

const TechStackSection = styled.section`
  background: rgb(var(--secondBackground));
  border-top: 1px solid rgba(var(--text), 0.05);
`;

const TechGrids = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-top: 5rem;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const TechGridBlock = styled.div`
  background: rgb(var(--background));
  border-radius: 1rem;
  border: 1px solid rgba(var(--text), 0.05);
  padding: 3.5rem;
  box-shadow: var(--shadow-md);
`;

const BlockHeader = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: rgb(var(--primary));
  letter-spacing: -0.01em;
`;

const TechTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;

  th, td {
    padding: 1.5rem 1rem;
    text-align: left;
  }

  th {
    border-bottom: 2px solid rgba(var(--text), 0.1);
    font-weight: 700;
    opacity: 0.9;
  }

  td {
    border-bottom: 1px solid rgba(var(--text), 0.05);
    opacity: 0.8;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const HighlightsSection = styled.section`
  border-bottom: 1px solid rgba(var(--text), 0.05);
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-top: 5rem;

  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=phone')} {
    grid-template-columns: 1fr;
  }
`;

const HighlightItem = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
    opacity: 0.7;
  }
`;

const BottomCTA = styled.section`
  background: rgb(var(--background));
`;

const CTAContainer = styled.div`
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
