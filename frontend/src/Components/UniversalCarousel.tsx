// src/components/UniversalCarousel.tsx

import React from 'react';
import styled from 'styled-components';

interface Media {
  type: string;
  src: string;
  alt: string;
}

interface UniversalCarouselProps {
  media: Media[];
}

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Snap to each image */
`;

const CarouselItem = styled.div`
  scroll-snap-align: start; /* Align items to the start of the viewport */
  flex: 0 0 auto; /* Prevent items from stretching */
  margin-right: 10px; /* Add space between items */
`;

const CarouselImage = styled.img`
  max-width: 100%; /* Ensure images do not exceed container width */
  object-fit: cover; /* Cover the entire space with image */
`;

const UniversalCarousel: React.FC<UniversalCarouselProps> = ({ media }) => {
  return (
    <CarouselContainer>
      {media.map((item, index) => (
        <CarouselItem key={index}>
          {item.type === 'image' && <CarouselImage src={item.src} alt={item.alt} />}
          {/* Add support for other media types as needed */}
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default UniversalCarousel;
