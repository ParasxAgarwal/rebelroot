import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const TECH_STACK = [
  { name: 'Kotlin', color: '#7F52FF' },
  { name: 'Android SDK', color: '#3DDC84' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Rust', color: '#DE5833' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Next.js', color: '#0070F3' },
  { name: 'Git & Open Source', color: '#F05032' },
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>POWERED BY MODERN OPEN-SOURCE STACKS</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1025: { slidesPerView: 5 },
        }}
        className="swiper-wrapper"
      >
        {TECH_STACK.map((tech) => (
          <SwiperSlide key={tech.name}>
            <TechBadge>
              <Dot color={tech.color} />
              <span>{tech.name}</span>
            </TechBadge>
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.1em;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;
  opacity: 0.7;
  font-weight: 700;
`;

const PartnersWrapper = styled(Container)`
  margin-top: 8rem;
  margin-bottom: 8rem;

  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
    align-items: center;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const TechBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--cardBackground));
  border: 1px solid rgba(var(--text), 0.1);
  border-radius: 3rem;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: rgb(var(--text));
  white-space: nowrap;
  box-shadow: var(--shadow-md);
`;

const Dot = styled.span<{ color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(p) => p.color};
  margin-right: 1.2rem;
  display: inline-block;
  box-shadow: 0 0 8px ${(p) => p.color};
`;
