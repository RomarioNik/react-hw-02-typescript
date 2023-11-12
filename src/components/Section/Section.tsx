// styled
import { SectionContainer, Title } from "./Section.styled";
//types
import { ISectionProps } from "./Section.types";

export const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};
