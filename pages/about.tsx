import styled from 'styled-components';
import Page from 'components/Page';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Button from 'components/Button';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function AboutPage() {
  return (
    <Page
      title="About RebelRoot"
      description="Learn about the RebelRoot collective, our privacy-first mindset, and the founder building the next generation of software."
    >
      <AboutWrapper>
        {/* Mission / Mindset Section */}
        <Section>
          <Container>
            <OverTitle>Our Mindset &amp; Philosophy</OverTitle>
            <SectionTitle>Empowering Digital Sovereignty</SectionTitle>
            <ContentText>
              RebelRoot is an independent, developer-led collective born out of a simple conviction: <strong>your data belongs to you</strong>. 
              In an era of unchecked tracking, intrusive advertising, and centralized corporate data storage, we stand for digital sovereignty. 
              We build tools that respect your privacy, work offline-first, and run entirely under your own control.
            </ContentText>

            <PhilosophyGrid>
              <PhilosophyCard>
                <CardIcon>🔒</CardIcon>
                <CardTitle>Local-First By Design</CardTitle>
                <p>
                  We build apps that store data directly on your physical device. We host no massive databases, no cloud accounts, and no logging systems for your activity.
                </p>
              </PhilosophyCard>

              <PhilosophyCard>
                <CardIcon>🚫</CardIcon>
                <CardTitle>Zero Telemetry &amp; Trackers</CardTitle>
                <p>
                  We completely strip out all diagnostic telemetry, usage tracking, analytics, and crash-reporting SDKs. Our applications never report back.
                </p>
              </PhilosophyCard>

              <PhilosophyCard>
                <CardIcon>📂</CardIcon>
                <CardTitle>Verified Open Source</CardTitle>
                <p>
                  All of our codebases are open-source. Anyone can audit our compile scripts, inspect network behavior, and compile our apps directly from source.
                </p>
              </PhilosophyCard>
            </PhilosophyGrid>
          </Container>
        </Section>

        {/* Founder Section */}
        <FounderSection>
          <Container>
            <FounderCard>
              <FounderImageWrapper>
                <FounderImage src="/paras-agarwal.jpg" alt="Paras Agarwal" />
              </FounderImageWrapper>
              <FounderInfo>
                <OverTitle>The Founder</OverTitle>
                <FounderName>Paras Agarwal</FounderName>
                <FounderBio>
                  Paras Agarwal founded RebelRoot to establish an ecosystem of digital tools that prioritize the user above all else. 
                  As an open-source advocate and developer, he believes that software should serve its users honestly, transparently, and securely without hiding backdoors or profit-driven analytics trackers. 
                  He coordinates the development of flagship products like Omni Browser and MOCNovel, pushing for a future built on sovereign code.
                </FounderBio>
                <ButtonGroup>
                  <Button href="https://github.com/ParasxAgarwal" target="_blank" rel="noopener noreferrer">
                    Follow on GitHub <span>&rarr;</span>
                  </Button>
                  <Button href="https://1i81vatywd5bjk3l.public.blob.vercel-storage.com/Paras_Resume.pdf" target="_blank" rel="noopener noreferrer" transparent>
                    View Resume <span>&rarr;</span>
                  </Button>
                </ButtonGroup>
              </FounderInfo>
            </FounderCard>
          </Container>
        </FounderSection>
      </AboutWrapper>
    </Page>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > section {
    padding: 8rem 0;
  }
`;

const Section = styled.section`
  background: rgb(var(--background));
`;

const ContentText = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  opacity: 0.85;
  margin-top: 3rem;
  max-width: 80rem;
  margin-bottom: 5rem;
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 5rem;

  ${media('<=desktop')} {
    grid-template-columns: 1fr;
  }
`;

const PhilosophyCard = styled.div`
  background: rgb(var(--secondBackground));
  border: 1px solid rgba(var(--text), 0.05);
  border-radius: 1rem;
  padding: 3.5rem;
  box-shadow: var(--shadow-md);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;
    opacity: 0.8;
  }
`;

const CardIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: rgb(var(--primary));
`;

const FounderSection = styled.section`
  background: rgb(var(--secondBackground));
  border-top: 1px solid rgba(var(--text), 0.05);
  border-bottom: 1px solid rgba(var(--text), 0.05);
`;

const FounderCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6rem;
  background: rgb(var(--background));
  border: 1px solid rgba(var(--text), 0.05);
  border-radius: 1.5rem;
  padding: 6rem;
  box-shadow: var(--shadow-lg);

  ${media('<=tablet')} {
    flex-direction: column;
    padding: 4rem;
    text-align: center;
  }
`;

const FounderImageWrapper = styled.div`
  flex-shrink: 0;
  width: 15rem;
  height: 15rem;
  background: rgb(var(--secondBackground));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(var(--primary), 0.2);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

const FounderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FounderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FounderName = styled.h3`
  font-size: 3.2rem;
  font-weight: 800;
  margin-top: 1rem;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  color: rgb(var(--text));
`;

const FounderBio = styled.p`
  font-size: 1.7rem;
  line-height: 1.7;
  opacity: 0.8;
  margin-bottom: 3rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  
  ${media('<=tablet')} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
