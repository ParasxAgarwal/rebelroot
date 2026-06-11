import styled from 'styled-components';
import Page from 'components/Page';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import OverTitle from 'components/OverTitle';
import Code from 'components/Code';
import { media } from 'utils/media';

export default function VedAstraPage() {
  const cloneCode = `git clone https://github.com/rebelroot/Openved.git
cd Openved`;

  const runBackend = `cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000`;

  const runFrontend = `cd frontend
npm install
npm run dev`;

  return (
    <Page
      title="Ved Astra"
      description="A premium, open-source Vedic astrology platform combining classical Kundli & Panchang computation with Google Gemini's reasoning. Built with Jetpack Compose, FastAPI, and Gemini AI."
    >
      <MainWrapper>
        {/* Hero Section */}
        <IntroSection>
          <IntroContent>
            <LogoWrapper>
              <LogoIcon>🌌</LogoIcon>
            </LogoWrapper>
            <OverTitle>Cosmic AI Navigator</OverTitle>
            <Title>Vedic Wisdom Powered by Modern Edge AI</Title>
            
            {/* Tech Badges */}
            <BadgeContainer>
              <Badge color="#8B7CF6">Kotlin Compose</Badge>
              <Badge color="#4CAF50">FastAPI</Badge>
              <Badge color="#FF9800">Gemini AI</Badge>
              <Badge color="#D4AF37">VedAstro Engine</Badge>
            </BadgeContainer>

            <Subtitle>
              Ved Astra (Openved) is a state-of-the-art Vedic astrology platform. By combining the absolute mathematical accuracy of the VedAstro engine with the cognitive power of Google Gemini, it delivers personalized Kundli analyses, 36-point compatibility matchmaking, and Lal Kitab ancestral debt readings.
            </Subtitle>

            <CTAWrapper>
              <Button href="https://github.com/rebelroot" target="_blank" rel="noopener noreferrer">
                Explore Openved GitHub <span>&rarr;</span>
              </Button>
            </CTAWrapper>
          </IntroContent>
        </IntroSection>

        {/* The Analysis Lifecycle */}
        <LifecycleSection>
          <Container>
            <SectionTitle>The Astrological Analysis Lifecycle</SectionTitle>
            <FlowContainer>
              <FlowStep>
                <StepNumber>01</StepNumber>
                <StepName>Birth Input</StepName>
                <StepDesc>Precise date, time, and coordinates</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>02</StepNumber>
                <StepName>Ephemeris Sync</StepName>
                <StepDesc>Calculate planetary coordinates via VedAstro</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>03</StepNumber>
                <StepName>Chart Render</StepName>
                <StepDesc>Draw D1 Kundli using custom canvas</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>04</StepNumber>
                <StepName>Astrology Logic</StepName>
                <StepDesc>Compute Ashtakoota, Sade Sati, and Manglik status</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>05</StepNumber>
                <StepName>Gemini context</StepName>
                <StepDesc>Inject Vedic wisdom and Lal Kitab parameters</StepDesc>
              </FlowStep>
              <FlowArrow>&rarr;</FlowArrow>
              <FlowStep>
                <StepNumber>06</StepNumber>
                <StepName>AI Chat</StepName>
                <StepDesc>Secure conversational insights</StepDesc>
              </FlowStep>
            </FlowContainer>
          </Container>
        </LifecycleSection>

        {/* Feature Highlights Grid */}
        <FeaturesSection>
          <Container>
            <SectionTitle>Platform Capabilities</SectionTitle>
            <FeaturesGrid>
              <FeatureCard>
                <CardIcon>☸️</CardIcon>
                <CardTitle>Verified Vedic Coordinates</CardTitle>
                <CardList>
                  <li><strong>Zodiac Calculations:</strong> Precise computing of Ascendant (Lagna) and planetary placements in houses.</li>
                  <li><strong>Nakshatra Details:</strong> Exact degree, minute, and second parsing matching lunar constellations.</li>
                  <li><strong>Avakhada Chakra:</strong> Phonetic syllables mapping by Pada (1 to 4) for name checking.</li>
                  <li><strong>Vimshottari Dasha:</strong> Multi-level Mahadasha and Antardasha remaining balance cycle calculations.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>💞</CardIcon>
                <CardTitle>Ashtakoota Matchmaking</CardTitle>
                <CardList>
                  <li><strong>36-Point Compatibility:</strong> Calculates detailed Kundli Milan parameters (Nadi, Bhakoot, Gana, Maitri, Yoni, Tara, Vashya, Varna).</li>
                  <li><strong>Yoni Analysis:</strong> Evaluates sexual compatibility, mapping nakshatras to animal archetypes.</li>
                  <li><strong>Dosha Detection:</strong> Spots critical blockages like Nadi Dosha, Bhakoot Dosha, and Gana mismatches.</li>
                  <li><strong>Relationship Grade:</strong> Clear mutual friend, enemy, and neutral planetary lord relationships.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>🔥</CardIcon>
                <CardTitle>Doshas & Transits Engine</CardTitle>
                <CardList>
                  <li><strong>Manglik Dosha:</strong> Evaluates Mars placements (1, 2, 4, 7, 8, 12) and checks sign cancellations (Ruchaka Yoga).</li>
                  <li><strong>Sade Sati & Dhaiya:</strong> Tracks Saturn transit phases relative to natal Moon sign.</li>
                  <li><strong>Kaal Sarp Dosha:</strong> Flags when all planets are hemmed between Rahu and Ketu.</li>
                  <li><strong>Lal Kitab Debts:</strong> Analyzes ancestral karmic debts like Pitra Rin, Matru Rin, and Stri Rin.</li>
                </CardList>
              </FeatureCard>

              <FeatureCard>
                <CardIcon>💬</CardIcon>
                <CardTitle>On-Device AI Astrologer</CardTitle>
                <CardList>
                  <li><strong>RAG Knowledge Base:</strong> Feeds local markdown Vedic guidelines directly into Gemini's context window.</li>
                  <li><strong>Zero Data Storage:</strong> No personal logs are stored. Chart data is analyzed in memory.</li>
                  <li><strong>Lal Kitab Remedies:</strong> Provides customized, actionable remedies for karmic imbalances.</li>
                  <li><strong>Natural Q&A:</strong> Ask complex questions about career, compatibility, and health in simple language.</li>
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
                      <td>FastAPI (Python) + Uvicorn server</td>
                    </tr>
                    <tr>
                      <td>Astrological Math</td>
                      <td>VedAstro SDK (ephemeris calculations)</td>
                    </tr>
                    <tr>
                      <td>AI Chat Model</td>
                      <td>Google Gemini API (google-generativeai)</td>
                    </tr>
                    <tr>
                      <td>Timezone Handler</td>
                      <td>pytz (precise offset calculations)</td>
                    </tr>
                    <tr>
                      <td>Data Validation</td>
                      <td>Pydantic (structured request models)</td>
                    </tr>
                  </tbody>
                </TechTable>
              </TechGridBlock>

              <TechGridBlock>
                <BlockHeader>Frontend & Android Client</BlockHeader>
                <TechTable>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Android App</td>
                      <td>Jetpack Compose + Clean Architecture</td>
                      {/* Kotlin Compose */}
                    </tr>
                    <tr>
                      <td>Web Client</td>
                      <td>React 19 + Vite</td>
                    </tr>
                    <tr>
                      <td>Design Tokens</td>
                      <td>CosmicTheme (Deep cosmic void #1A0D2E, surface card #2D1B4E, gold accent #D4AF37)</td>
                    </tr>
                    <tr>
                      <td>HTTP Client</td>
                      <td>Retrofit (Android) / Fetch API (Web)</td>
                    </tr>
                    <tr>
                      <td>Astrology Chart UI</td>
                      <td>Custom Canvas chart draw engine</td>
                    </tr>
                  </tbody>
                </TechTable>
              </TechGridBlock>
            </TechGrids>
          </Container>
        </TechStackSection>

        {/* Built For Scaling Highlights */}
        <HighlightsSection>
          <Container>
            <SectionTitle>Built For Cosmic Scale</SectionTitle>
            <HighlightsGrid>
              <HighlightItem>
                <h4>⚡ Sub-Second Calculations</h4>
                <p>Calculates full planetary positions and Ashtakoota metrics in milliseconds using cached ephemeris tables.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>🛡️ Zero Data Retention</h4>
                <p>Complete on-device focus: we do not store birth charts, queries, or chat history in backend databases.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>🧠 Hybrid Intelligence</h4>
                <p>Merges the mathematical precision of astronomical coordinate models with neural language reasoning.</p>
              </HighlightItem>
              <HighlightItem>
                <h4>📱 Modular Jetpack Compose</h4>
                <p>Android app utilizes clean architecture separates ui, data, and domain modules for rapid expansion.</p>
              </HighlightItem>
            </HighlightsGrid>
          </Container>
        </HighlightsSection>

        {/* Repository Structure Visualizer */}
        <RepoSection>
          <Container>
            <SectionTitle>Repository Hierarchy</SectionTitle>
            <RepoContainer>
              <RepoNode>
                <RepoFolder>📁 Openved/</RepoFolder>
                <RepoTree>
                  <RepoNode>
                    <RepoFolder>📁 android/ &mdash; Jetpack Compose Native App</RepoFolder>
                    <RepoTree>
                      <RepoFile>📂 app/ &mdash; Dependency injection, NavGraph, and main entry</RepoFile>
                      <RepoFile>📂 core/ &mdash; Shared components, typography, Retrofit clients</RepoFile>
                      <RepoFile>📂 feature/ &mdash; Onboarding, Home dashboard, Kundli canvas, Gemini chat</RepoFile>
                    </RepoTree>
                  </RepoNode>
                  <RepoNode>
                    <RepoFolder>📁 backend/ &mdash; FastAPI API Gateway</RepoFolder>
                    <RepoTree>
                      <RepoFile>📄 main.py &mdash; Ashtakoota matching, Sade Sati & Lal Kitab calculation logic</RepoFile>
                      <RepoFile>📄 requirements.txt &mdash; FastAPI, google-generativeai, and vedastro deps</RepoFile>
                    </RepoTree>
                  </RepoNode>
                  <RepoNode>
                    <RepoFolder>📁 frontend/ &mdash; React Web Application</RepoFolder>
                    <RepoTree>
                      <RepoFile>📂 src/ &mdash; App.jsx dashboard view, index.css styling, and assets</RepoFile>
                      <RepoFile>📄 package.json &mdash; React 19, Vite, and build settings</RepoFile>
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
            <SectionTitle>Building & Running From Source</SectionTitle>
            <BuildContainer>
              <BuildStepBlock>
                <h4>1. Setup Repository</h4>
                <Code code={cloneCode} language="bash" />
              </BuildStepBlock>
              <BuildStepBlock>
                <h4>2. Run Python Backend API</h4>
                <Code code={runBackend} language="bash" />
                <p>The FastAPI backend server will spin up locally on <code>http://localhost:8000/</code>.</p>
              </BuildStepBlock>
              <BuildStepBlock>
                <h4>3. Run React Frontend Webpage</h4>
                <Code code={runFrontend} language="bash" />
                <p>Open <code>http://localhost:5173/</code> in your browser to view the web dashboard.</p>
              </BuildStepBlock>
            </BuildContainer>
          </Container>
        </BuildSection>

        {/* Bottom Call To Action */}
        <BottomCTASection>
          <Container>
            <CTAInner>
              <h3>Contribute to Ved Astra</h3>
              <p>We welcome code audits, additional Astro-remedy formulations, translation updates, and mobile layout fixes.</p>
              <ButtonGroup>
                <Button href="https://github.com/rebelroot" target="_blank" rel="noopener noreferrer">
                  Explore Repository <span>&rarr;</span>
                </Button>
                <Button href="/vedastra/privacy-policy">
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

const LogoWrapper = styled.div`
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

const LogoIcon = styled.span`
  font-size: 6rem;
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
  margin-bottom: 4rem;
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  ${media('<=tablet')} {
    flex-direction: column;
    align-items: center;
  }
`;

const LifecycleSection = styled.section`
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
    flex-direction: column;
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
