// src/pages/AboutUsPage.tsx

import React from 'react';
import styled from 'styled-components';
import AboutUsSection from '../components/AboutUsSection';
import MissionSection from '../components/MissionSection';
import ValuesSection from '../components/ValuesSection';
import TeamMember from '../components/TeamMember';

const PageContainer = styled.div`
  padding: 20px;
`;

const SectionContainer = styled.div`
  padding: 40px;
`;

const TeamMembersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const AboutUsPage: React.FC = () => {
  // Example team members data
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', image: '/assets/images/john-doe.jpg' },
    { name: 'Jane Smith', role: 'COO', image: '/assets/images/jane-smith.jpg' },
    // Add more team members as needed
  ];

  return (
    <PageContainer>
      <AboutUsSection />
      <MissionSection />
      <ValuesSection />
      <SectionContainer>
        <h2>Meet the Team</h2>
        <TeamMembersContainer>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </TeamMembersContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default AboutUsPage;
