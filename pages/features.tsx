import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Omni Browser',
    description:
      'A lightweight, secure, and resource-efficient web browser for Android and Desktop. Built for privacy, content blocking, and speed.',
    href: '/omnibrowser',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'MOCNovel',
    description:
      'A decentralized publishing and immersive reading platform for independent authors and readers. Zero ads, tracking, or fees.',
    href: '/mocnovel',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'CampCart',
    description:
      'A lightning-fast, offline-first e-commerce cart widget that easily plugs into static blogs, sites, and custom platforms.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'More Projects Incoming',
    description:
      'We are constantly prototyping new utility toolkits for secure messaging, local sync engines, and developer utilities.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Products" description="Explore RebelRoot's open-source suite of privacy-preserving and highly optimized applications.">
      <Wrapper>
        <SectionTitle>Our Product Suite</SectionTitle>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
