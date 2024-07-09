// AboutUsSection.tsx

import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 40px;
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SectionContent = styled.p`
  line-height: 1.6;
`;

const AboutUsSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionHeader>About Us</SectionHeader>
      <SectionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget leo
        placerat, a ultricies velit ullamcorper. Sed vehicula vestibulum sodales. Donec feugiat
        lectus a nisl dictum, quis sodales augue ullamcorper.
      </SectionContent>
    </SectionContainer>
  );
};

export default AboutUsSection;
