// src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UniversalCarousel from '../components/UniversalCarousel'; // Adjust the path to UniversalCarousel
import maharashtraMap from '../assets/images/map.jpg'; // Adjust the path to your image

// Styled components for styling
const HomePageContainer = styled.div`
  overflow-x: hidden; /* Prevent horizontal scrolling */
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* Black gradient */
    url(${maharashtraMap}); /* Your background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  color: #fff; /* Text color on top of the image */
  min-height: 100vh; /* Minimum viewport height */
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1; /* Grow to fill remaining space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JoinButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5); /* Black with 50% transparency */
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7); /* Darker on hover */
  }
`;

const CarouselContainer = styled.div<{ showCarousel: boolean }>`
  opacity: ${({ showCarousel }) => (showCarousel ? '1' : '0')};
  transition: opacity 1s ease-in-out;
`;

const Footer = styled.footer`
  background-color: #3b3a63;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: auto; /* Push footer to the bottom */
`;

const Home: React.FC = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const triggerOffset = window.innerHeight * 0.5; // Show carousel when user has scrolled down half of the viewport

      setShowCarousel(scrollTop > triggerOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Example media items for the carousel on the Home page
  const carouselMedia = [
    { type: 'image', src: '/assets/images/carousel1.jpg', alt: 'Image 1' },
    { type: 'image', src: '/assets/images/carousel2.jpg', alt: 'Image 2' },
    { type: 'image', src: '/assets/images/carousel3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];

  const handleJoinUsClick = () => {
    window.location.href = '/join-us'; // Navigate to JoinUs page
    // Alternatively, if 'join-us' is a relative path, you can use:
    // window.location.href = `${window.location.origin}/join-us`;
  };

  return (
    <HomePageContainer>
      <Content>
        <h1>Youth of Maharashtra</h1>
        <p>Connecting Youth Of Maharashtra For A Better Future.</p>
        <JoinButton onClick={handleJoinUsClick}>Join Us</JoinButton>
      </Content>
      <CarouselContainer showCarousel={showCarousel}>
        {showCarousel && <UniversalCarousel media={carouselMedia} />}
      </CarouselContainer>
      <Footer>
        &copy; {new Date().getFullYear()} Youth of Maharashtra. All rights reserved.
      </Footer>
    </HomePageContainer>
  );
};

export default Home;
