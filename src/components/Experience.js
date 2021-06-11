import React, { useState } from "react";
import styled from 'styled-components';
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
function Item({ text, contentJ, contentS }) {
    const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <Title layout>{text}</Title>
        <AnimatePresence>{isOpen && <Content contentJ={contentJ} contentS={contentS}/>}</AnimatePresence>
      </motion.li>
    );
  }


  function Content({contentJ, contentS}) {
    return (
      <Text
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
          <div>{contentJ}</div>
          <br/>
          <div>{contentS}</div>
        
      </Text>
    );
  }
  const items = [
    { text: "What is the most memorable/rewarding experience you have had in the LA Program?", id: 1, 
    contentJ:"J: One time a student from my content course reached out to me privately during lecture. Having recognized that the student is one of the less active students in my discussion session, I realized that it was a great opportunity for me to support and interact with the student. I arranged a zoom meeting for us to go over the questions that the student had. It was really a rewarding experience. That was the first time that I started to really understand what it means to be a learning assistant.", 
    contentS:"this is Sunny" },

    { text: "How does being an LA affect your views on teaching and learning?", id: 2, 
    contentJ:"J: One of the most valuable lessons I learned from the LA Program is the difference between equity and equality. Before the LA seminar, I thought it would be fair to spend equal amount of time on both the higher-performing and the lower-performing students. However, with the Microaggression and Stereotype Threat Activities, I realized the importance of achieving “equity”, that is, spending more time with lower-performing students and withdrawn students. Before I started assisting in discussions, I thought that my biggest challenge would be explaining problems to students, but I soon realized that the real challenge is to build an inclusive classroom environment for all students.", 
    contentS:"this is Sunny"  },

    { text: "What skills have you developed/improved on during your time in the LA Program?", id: 3, 
    contentJ:"J: I have improved so much in utilizing LA core strategies. I have always been a little uncomfortable with the awkwardness of waiting for someone to speak up on zoom. Therefore, in my first few weeks’ of discussion sessions, I was a little impatient when guiding the students through a problem, and I sometimes tend to provide an explanation instead of directing the students through questions. However, after learning from seminars and observing how other LAs perform in breakout rooms, I challenged myself to use wait time more, and I have made a lot of progress. I developed a set of formulas that work best for me: 1. Start with a closed question at the beginning to check for understanding; 2. Always ask if someone else can try explaining his/her thoughts; 3. After asking an open question, wait till a student responds or reacts. (2a, 2b, 2c, 2d, 9) Moreover, I have achieved personal growth while helping others. I used to be troubled by imposter syndrome unconsciously. However, knowing that I could help others being an LA, I have gained much confidence in my academic achievements. Moreover, taking from what I learned in the LA seminar, setting SMART goals for my time being an LA and achieving them helped a lot with building self-confidence ", 
    contentS:"this is Sunny" },

    { text: "In the future, would you expect to implement these skills outside the LA Program?", id: 4, 
    contentJ:"J: Definitely! I have already started to implement some of the core strategies in my other courses, such as facilitating discussions. I used to be “the quiet one” in a group discussion because I am afraid to be wrong and because of my foreign accent. However, I gained a lot of confidence from interacting with students, instructors, and other LAs. My communication skills have improved a lot for the same reason.(7) In group work, I do not hesitate to ask help from my partners and I encourage them to express their thoughts verbally.", 
    contentS:"this is Sunny"  },

    { text: "Do you have any suggestions on how the LA Program could improve?", id: 5, 
    contentJ:"J: In week 2, noticing that the “invite host” function is not very effective during discussion, I made suggestions to the TA and built a Google spreadsheet to track the breakout room progress. I found that students are more comfortable asking for help non-verbally. Also, the spreadsheet allows them to ask questions as a group, so students who are shy to ask questions individually can get help more easily. It would be great if this could be incorporated into the LA Program seminar/practices.", 
    contentS:"this is Sunny"  },

    { text: "Would you recommend the LA Program to others (friends/instructors/peers)? If so, why?", 
    id: 6, 
    contentJ:"J: YES. I have already recommended the LA Program to several students in my content course. Not only have I learned a lot about teaching and learning in the LA Program,(4) I also developed a stronger sense of belonging to the student community of UCLA. Moreover, I am constantly reflecting on myself while helping others, so I discovered a lot of blind spots in my learning methods which I have not noticed before.", 
    contentS:"this is Sunny"  }
  ];

  export default function Experience() {
    return (
        <Container>
            <TextBox>
                <Headline>Q&A</Headline>
                <Intro>Jiayi Wu: </Intro>
                <Intro>Sunny Li: </Intro>
            </TextBox>
            <AnimateSharedLayout>
                <CardContainer layout>
                {items.map(({ text, id, contentJ, contentS }) => (
                    <Item text={text} key={id} contentJ={contentJ} contentS={contentS} />
                ))}
                </CardContainer>
            </AnimateSharedLayout>
        </Container>
      
    );
  }