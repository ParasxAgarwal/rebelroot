import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion title="Who is behind RebelRoot?">
        RebelRoot is an independent, developer-led collective. We are a global group of software engineers, designer advocates, and privacy proponents focused on building user-centric, open-source software that gives you back control over your digital identity and data sovereignty.
      </Accordion>
      <Accordion title="Is Omni Browser really free and open source?">
        Yes, Omni Browser is completely open-source and released under the permissive MIT license. You can audit the code, run your own builds, and contribute directly to our repositories on GitHub. We do not charge fees, run ads, or sell your data.
      </Accordion>
      <Accordion title="How does RebelRoot fund its projects?">
        We are funded entirely through user donations, sponsorships, and voluntary community support. We do not have venture capital backing or corporate stakeholders, ensuring that our priority remains solely on user privacy and product quality.
      </Accordion>
      <Accordion title="Is my synced data secure?">
        Yes. If you choose to enable the optional synchronization features, all your data (such as bookmarks, history, and lockers) is encrypted client-side using your own private keys before leaving your device. RebelRoot servers only act as transit brokers and cannot decrypt your data.
      </Accordion>
      <Accordion title="How can I contribute to the collective?">
        We welcome contributions of all types! You can submit bug reports, write feature implementations, translate the apps, update blocklists, or support us financially via GitHub Sponsors or other platforms listed on our Pricing page.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
