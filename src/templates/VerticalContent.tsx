import { VerticalContentRow } from '../feature/VerticalContentRow';
import { Section } from '../layout/Section';

const VerticalContent = () => (
  <Section title={''} description={''}>
    <VerticalContentRow
      image="/assets/images/image_hero.webp"
      imageAlt="Image Content"
    />
  </Section>
);

export { VerticalContent };
