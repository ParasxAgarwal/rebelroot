import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: '100% Open Source',
    description:
      'All of our source code is public and freely licensed. You can inspect it, modify it, compile it yourself, or contribute back to the community.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Zero Tracking & Adware',
    description:
      'We never bundle tracker SDKs, telemetry, or invasive ads. Your data remains on your device under your complete ownership.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Resource Optimized',
    description:
      'We write efficient code designed to minimize memory usage, conserve battery, and maintain lightweight installation sizes across all devices.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Developer Centric',
    description:
      'Built by developers, for developers. Every product comes with extensive docs, structured APIs, and customizable configuration frameworks.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Self-Hostable',
    description:
      'Own your own infrastructure. Easily self-host backends for synchronization, databases, or cart processing on your own server nodes.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Community Funded',
    description:
      'We do not answer to venture capital boards or corporate shareholders. We are supported directly by individual backers and open-source grants.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Secure Syncing',
    description:
      'Sync your library, bookmarks, or application states securely with end-to-end encryption across all your active environments.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Premium UX Design',
    description:
      'Open-source software doesn\'t have to look ancient. We pair robust under-the-hood optimization with slick, modern, responsive aesthetics.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Extensible & Modular',
    description:
      'Extend any application using modular plugins, customized styles, or API integrations without needing to fork the entire codebase.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
