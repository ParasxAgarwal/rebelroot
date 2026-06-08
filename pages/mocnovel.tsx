import styled from 'styled-components';
import Page from 'components/Page';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function MocNovelPage() {
  return (
    <Page
      title="MOC Novel"
      description="A next-generation open-source web novel platform featuring conversational AI recommendations, real-time community tools, and unified edge deployment."
    >
      <MainWrapper>
        {/* Project Intro Section */}
        <IntroSection>
          <IntroContent>
            <OverTitle>Featured Product Showcase</OverTitle>
            <Title>Re-imagining the Reading & Publishing Experience</Title>
            <Subtitle>
              MOC Novel is a modern, zero-telemetry, zero-ad publishing platform designed to connect independent authors directly with their audience. Empowered by modern LLMs and real-time synchronization.
            </Subtitle>
            <CTAWrapper>
              <Button href="https://mocnovel.com" target="_blank" rel="noopener noreferrer">
                Visit mocnovel.com <span>&rarr;</span>
              </Button>
            </CTAWrapper>
          </IntroContent>
        </IntroSection>

        {/* User Flow Visualizer */}
        <VisualizerSection>
          <Container>
            <SectionTitle>The Unified Novel Lifecycle</SectionTitle>
            <FlowContainer>
              <FlowStep>
                <StepNumber>01</StepNumber>
                <StepName>Discover</StepName>
                <StepDesc>Explore lists & tags</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>02</StepNumber>
                <StepName>Read</StepName>
                <StepDesc>Custom, distraction-free reader</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>03</StepNumber>
                <StepName>Discuss</StepName>
                <StepDesc>Real-time community chats</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>04</StepNumber>
                <StepName>AI Recs</StepName>
                <StepDesc>Llama 3.3 70B suggestions</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>05</StepNumber>
                <StepName>Library</StepName>
                <StepDesc>Save & sync chapters</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>06</StepNumber>
                <StepName>Share</StepName>
                <StepDesc>Curated lists with friends</StepDesc>
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
                <CardIcon>🤖</CardIcon>
                <CardTitle>AI Recommendation System</CardTitle>
                <CardList>
                  <li><strong>Smart Library Analysis:</strong> Reads user library context to understand layout, genres, and themes.</li>
                  <li><strong>Personalized Chat Assistant:</strong> Conversational novel discovery in natural language.</li>
                  <li><strong>Groq Cloud Integration:</strong> Sub-second LLM inference responses utilizing Llama 3.3 70B.</li>
                  <li><strong>Context-Aware Suggestions:</strong> Recommendations fine-tuned based on specific tropes and patterns.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>📖</CardIcon>
                <CardTitle>Discovery & Management</CardTitle>
                <CardList>
                  <li><strong>Advanced Filtering:</strong> Search by precise rating ranges, tags, update status, and genres.</li>
                  <li><strong>Curated Collections:</strong> Organize custom public or private lists with seamless drag-and-drop.</li>
                  <li><strong>Progress Tracking:</strong> Automated chapter-level read position tracking.</li>
                  <li><strong>Offline Bookmark Vault:</strong> Write persistent notes on your favorite novels directly to browser memory.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>💬</CardIcon>
                <CardTitle>Real-Time Social Features</CardTitle>
                <CardList>
                  <li><strong>Live Chat Hub:</strong> Sub-millisecond WebSocket chats directly integrated on chapter screens.</li>
                  <li><strong>Threaded Forums:</strong> Full discussion forums per novel with markdown support.</li>
                  <li><strong>Rich User Profiles:</strong> Live reading stats, custom avatars, and recent activity feeds.</li>
                  <li><strong>Collaborative Sharing:</strong> Dynamic preview cards to export lists across external social channels.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>🚀</CardIcon>
                <CardTitle>Modern Unified Architecture</CardTitle>
                <CardList>
                  <li><strong>Reactive Web Client:</strong> Extremely light, high-performance web experience built with React 18 + Vite.</li>
                  <li><strong>Native iOS Experience:</strong> Lightweight SwiftUI mobile client with custom cached storage.</li>
                  <li><strong>Highly Parallel Backend:</strong> High-throughput Fastify API gateway backed by PostgreSQL.</li>
                  <li><strong>Secure Edge Routing:</strong> Encrypted, global-ready traffic load balancing configured through Nginx.</li>
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
                <BlockHeader>Backend Stack</BlockHeader>
                <TechTable>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>API Gateway</td>
                      <td>Fastify (Node.js)</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>PostgreSQL + Prisma ORM</td>
                    </tr>
                    <tr>
                      <td>Cache & Pub/Sub</td>
                      <td>Redis</td>
                    </tr>
                    <tr>
                      <td>AI Inference</td>
                      <td>Groq Cloud API (Llama 3.3)</td>
                    </tr>
                    <tr>
                      <td>Object Storage</td>
                      <td>MinIO (S3-Compatible)</td>
                    </tr>
                    <tr>
                      <td>Real-time Sync</td>
                      <td>WebSockets</td>
                    </tr>
                    <tr>
                      <td>Authentication</td>
                      <td>JWT Token Rotation</td>
                    </tr>
                  </tbody>
                </TechTable>
              </TechGridBlock>

              <TechGridBlock>
                <BlockHeader>Frontend & DevOps</BlockHeader>
                <TechTable>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Web App</td>
                      <td>React 18 + Vite</td>
                    </tr>
                    <tr>
                      <td>iOS Client</td>
                      <td>Native SwiftUI</td>
                    </tr>
                    <tr>
                      <td>State Management</td>
                      <td>React Query / SolidJS</td>
                    </tr>
                    <tr>
                      <td>Styling System</td>
                      <td>Tailwind CSS</td>
                    </tr>
                    <tr>
                      <td>Design Tokens</td>
                      <td>Lucide & Phosphor Icon sets</td>
                    </tr>
                    <tr>
                      <td>Orchestration</td>
                      <td>Docker Compose</td>
                    </tr>
                    <tr>
                      <td>Reverse Proxy</td>
                      <td>Nginx Secure Gateways</td>
                    </tr>
                  </tbody>
                </TechTable>
              </TechGridBlock>
            </TechGrids>
          </Container>
        </TechStackSection>

        {/* Built For Scale & Innovation Highlights */}
        <HighlightsSection>
          <Container>
            <SectionTitle>Built For Global Scale</SectionTitle>
            <HighlightsGrid>
              <HighlightItem>
                <h4>🚀 AI-Driven Recommendation</h4>
                <p>First web novel index utilizing conversational agent interactions to recommend user paths instead of cold metadata filters.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>⚡ Sub-Second Loading</h4>
                <p>Nginx gateway optimization, local cache caching, and optimized database indexing provide rapid response times under load.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>🛡️ Secure Access & E2EE</h4>
                <p>Strict JWT validation paired with end-to-end HTTPS encryption ensures reader and writer security is never compromised.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>📈 Horizontal Scaling</h4>
                <p>Ready to deploy across clusters using Docker Compose configs with built-in Redis Pub/Sub load balancing.</p>
              </HighlightItem>
            </HighlightsGrid>
          </Container>
        </HighlightsSection>

        {/* Bottom CTA */}
        <BottomCTA>
          <Container>
            <CTAContainer>
              <h3>Experience MOC Novel Live</h3>
              <p>Explore the reading catalog, try out the conversational AI advisor, and see the platform in action.</p>
              <Button href="https://mocnovel.com" target="_blank" rel="noopener noreferrer">
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
