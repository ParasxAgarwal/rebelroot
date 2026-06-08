import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Support RebelRoot Open Source Development</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Community"
          description="Free use of all our products"
          benefits={['Access to all source code', 'Comprehensive self-hosting guides', 'Community discussions & Matrix chat', 'Standard bug reporting']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Developer Sponsor"
          description="Help fund active feature development"
          benefits={['Backer badge on GitHub & site', 'Prioritized bug & feature requests', 'Early beta builds of new projects', 'Access to exclusive dev channels']}
          isOutlined
        >
          $15<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Enterprise Partner"
          description="For companies running on our stack"
          benefits={[
            'Technical advisory consultations',
            'Custom integration assistance',
            'Priority security disclosures',
            'Corporate logo placement on site & repos',
            'Dedicated chat channel with main developers'
          ]}
        >
          $150<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
