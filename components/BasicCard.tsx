import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href?: string;
}

export default function BasicCard({ title, description, imageUrl, href }: BasicCardProps) {
  const content = (
    <>
      <NextImage src={imageUrl} width={128} height={128} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );

  if (href) {
    return (
      <NextLink href={href} passHref>
        <Card as="a" clickable>
          {content}
        </Card>
      </NextLink>
    );
  }

  return <Card>{content}</Card>;
}

const Card = styled.div<{ clickable?: boolean }>`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  text-decoration: none;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    ${(props) =>
      props.clickable &&
      `
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    `}
  }

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;

