import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {mediaQueries} from "../shared/config"

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF8E4;
  padding:0 4rem;
  padding-bottom: 3rem;
  ${mediaQueries.mobile}{
    padding: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  /* overflow-y: hidden; */
  @media screen and (max-width: 768px) {
    grid-template-columns: 0.5fr 1fr;
    /* display: block;
    padding: 0 calc((100vw - 1300px) / 2); */
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* overflow-y: hidden; */
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-family: 'Mate SC', serif;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    z-index: 999;
    font-family: 'Mate SC', serif;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: black;
  font-family: 'Gloria Hallelujah', cursive;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  overflow-y: hidden;
  ${mediaQueries.mobile}{
    width:70px;
    height: 70px;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  /* overflow-y:hidden; */

  ${Image}:nth-child(1) {
    top: 100px;
    left: 10px;
    @media screen and (max-width: 768px) {
    left: 0px;
    top: -10px;

  }
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
    @media screen and (max-width: 768px) {
    left: 0px;
  }
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const Landing = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            LA Program@UCLA
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Ready to explore?
          </motion.p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Get Started
          </Button>
        </ColumnLeft>
        <ColumnRight>
          {/* <Image
            src="https://cdn.freebiesupply.com/images/large/2x/ucla-logo-png-transparent.png"
            alt='UCLA'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          /> */}
          <Image
            src="https://i.pinimg.com/originals/ff/04/28/ff0428f28d314c1aab327500252e3b62.png"
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src="https://cdn.freebiesupply.com/logos/large/2x/ucla-bruins-1-logo-png-transparent.png"
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 10, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src="https://tofasakademi.com/wp-content/uploads/2019/06/growth-mindset3.png"
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Landing;
