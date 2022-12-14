import React, { useState } from 'react';
import items from './Project';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';

const styles = {
  pic: {
  padding: '10px',
  height: '100',
  width: '200'
  },
  btn: {
    background: '#72859a',
    border: 'none',
    color: 'white',
    marginLeft: 400,
    marginRight: 400,
    display: 'flex',
    justifyContent: 'center'
  },
}


function Portfolio(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
      >
      <Button style={styles.btn} href={item.repo} target='_blank' variant="link">View the repository</Button>
            <Button style={styles.btn} href={item.link} target='_blank' variant="link">View the live site/tutorial</Button>
        <img className="d-block w-100" style={styles.pic} src={item.image} alt={item.name} />
        <CarouselCaption 
          captionHeader={item.name}
          captionText={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Portfolio;