import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, Route, Switch} from 'react-router-dom'
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import "./style.css";
import {mediaQueries} from "../shared/config"

const Container = styled.div` 
background-color: #FFF8E4;
`

const TextBox = styled.div `
font-family: 'Mate SC', serif;
border: 2px solid black;


background: white;
margin-bottom: 20px;
padding: 10px 30px;
${mediaQueries.mobile}{
    padding: 5px 20px;
  }
`

const Headline = styled.div ` 
font-size: 50px;
margin-bottom: 10px;
${mediaQueries.mobile}{
    font-size: 30px;
  }
`

const Intro = styled.div`
font-size: 20px;
font-family: 'Prompt', sans-serif;
${mediaQueries.mobile}{
    font-size: 10px;
  }
`


const CardContainer = styled(motion.ul)` 
  ${mediaQueries.mobile}{
    padding: 0;
  }
`

const Title = styled(motion.div)` 
margin: 10px 10px;
font-size: 30px;
${mediaQueries.mobile}{
    font-size: 20px;
  }
`

const Text = styled(motion.div)` 
margin: 10px 10px;
font-size: 20px;
font-family: 'Prompt', sans-serif;
${mediaQueries.mobile}{
    font-size: 15px;
  }

`
function Item({ text, content}) {
    const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <Title layout>{text}</Title>
        <AnimatePresence>{isOpen && <Content content={content} />}</AnimatePresence>
      </motion.li>
    );
  }


  function Content({content}) {
    return (
      <Text
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
          {content}
        
      </Text>
    );
  }

export default function Introduction(){
    return(
    <Container>
        <TextBox>
            <Headline>About</Headline>
        </TextBox>
        <AnimateSharedLayout>
        <CardContainer layout>
        {items.map(({ text, id, content}) => (
            <Item text={text} key={id} content={content}/>
        ))}
        </CardContainer>
        </AnimateSharedLayout>
    </Container>
        

    )
}

const items = [
    { text: "Mission", id: 1, 
    content:"The mission of UCLA’s learning assistant program is to EMPOWER STUDENTS through inclusive STEM teaching. By facilitating collaborative and inclusive learning, LAs transform the STEM classroom into one that encourages EVERY student to ask, interact, explain, and deepen their own understanding."},
    { text: "What is LA Program?", id: 2,
    content: "The Learning Assistants (LA) Program in the Sciences at UCLA is an evidence-based, multidisciplinary instructional strategy, in which undergraduate students who have succeeded in a given course receive credit to learn how to help the next group of students succeed in that course. It is specifically geared toward large introductory science, engineering and math courses.  LAs thus help facilitate active learning and collaborative instruction in lecture, discussion and/or lab."},
    
];