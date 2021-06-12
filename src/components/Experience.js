import React, { useState } from "react";
import styled from 'styled-components';
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import "./style.css";
import {Link, Route, Switch} from 'react-router-dom'
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
display: ${props=>props.display};
${mediaQueries.mobile}{
    font-size: 10px;
  }
`

const ReadMore = styled.div`
font-size: 20px;
font-family: 'Prompt', sans-serif;
font-style: italic;
cursor: pointer;
display: ${props=>props.display};
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
    contentJ:"J: One time a student from my content course reached out to me privately during a lecture. Having recognized that the student is one of the less active students in my discussion session, I realized that it was a great opportunity for me to support and interact with the student. I arranged a zoom meeting for us to go over the questions that the student had. It was such a rewarding experience. That was the first time that I started to understand what it means to be a learning assistant.", 
    contentS:"S: Having virtual high fives to celebrate the completion of the worksheet! I came up with this because I found it hard to interact with students on zoom. I understood how difficult it was to be sedentary for 50 minutes and people tend to get really tired and quiet at the end of the discussion. I was quite nervous when I first decided to try it because it would be so awkward if no one responded. But I did it anyway and it worked amazingly! Some students even turned their cameras on to high five with me! It looked really silly because in the end we were just slapping the camera but we were all laughing and doing it and it was awesome. Since then we’d done it every time they finished the worksheet and it was a lot of FUN." },

    { text: "How does being an LA affect your views on teaching and learning?", id: 2, 
    contentJ:"J: One of the most valuable lessons I learned from the LA Program is the difference between equity and equality. Before the LA seminar, I thought it would be fair to spend an equal amount of time on both the higher-performing and the lower-performing students. However, after the Microaggression and Stereotype Threat activities, I realized the importance of achieving “equity”. I started to spend more time with lower-performing students and withdrawn students. Before I started assisting in discussions, I thought that my biggest challenge would be explaining problems to students, but I soon realized that the real challenge is to build an inclusive classroom environment for all students.", 
    contentS:"S: Growing up with a parent who is involved in academia, watching her lecture classes from the back of the classroom and grading papers and exams at home, I really thought teaching was no stranger to me, and I can do it well naturally. But it only came to the point where you became the one, the LA, who is going to hop around different breakout rooms and answer questions the next day, that you realized: “Oh maybe I underestimated this job” and “there is still so much for me to learn.” By the end of the first week of being an LA, I’d felt frustrated from consciously knowing my weakness— failing to foster group collaboration, and struggling to find a way to best convey the explanation of math concepts to the students. My head LA also confirmed my self-assessment in the week 2 of LA observation feedback, “Sunny could maybe address withdrawn students more/check in with groups more often, use more student names…” However, through attending our weekly pedagogy seminar, simulating scenarios with my fellow LAs and learning about different pedagogical techniques such as asking question sandwich and having growth mindset, my another head LA commented in the week 8 of LA observation that “The LA also calls students by name, making sure all students, even those with their cameras off, have a chance to talk.” As the quarter progressed, I also became highly aware of different cultural and economical backgrounds that all the students came from and acknowledged there are many hardships going on in this difficult time. I tried my best to help those withdrawn or quiet students by addressing their names with others’ and private messaging them."  },

    { text: "What skills have you developed/improved on during your time in the LA Program?", id: 3, 
    contentJ:"J: I have improved so much in utilizing LA core strategies. I have always been a little uncomfortable with the awkwardness of waiting for someone to speak up on zoom. Therefore, in my first few weeks of discussion sessions, I was a little impatient when guiding the students through a problem, and I sometimes tend to explain directly instead of directing the students through questions. However, after learning from seminars and observing how other LAs perform in breakout rooms, I challenged myself to use wait time more, and I have made a lot of progress. I developed a set of formulas that work best for me: 1. Start with a closed question at the beginning to check for understanding; 2. Always ask if someone else can try explaining his/her thoughts; 3. After asking an open question, wait till a student responds or reacts. Moreover, I have achieved personal growth while helping others. I used to be troubled by imposter syndrome unconsciously. However, knowing that I could help others being an LA, I have gained much confidence in my academic achievements. Moreover, taking from what I learned in the LA seminar, setting SMART goals for my time being an LA and achieving them helped a lot with building self-confidence.", 
    contentS:"S: Honestly there are so many, way more than I expected. First of all, I think the most important skill that I learned during this time is to foster group collaboration. I really felt short on this skill at the beginning of the quarter, part of the reason being the discussion was remote, but the main reason being I am an introvert and I was not used to being the center of spotlight who tries to glue everyone together. One of the goals I’d always written down in the first four weeks of the in-seminar assignment was to “ask more open and close ended questions [to foster collaboration].” And later, the progress has finally shown. Coming along with my improvement in handling collaboration was my better grasp in checking for understanding and redirecting questions. In week 5 in-seminar assignment, I wrote “I am getting used to asking students various open and close-ended questions to guide students or check their understanding about certain concepts or definitions.” And I described one of instances that I implemented redirecting questions in my week 4 teaching reflection: after a team was stuck on a question, I “suggested them to think back of what Roman, the TA, has said in the beginning of the discussion, which is the rank-nullity theorem, and applied that to the question.” Also, I “tried to break down a question into smaller tasks so that it would not be too overwhelming.” One another strategy that I found I improved a lot is the use of wait time and bearing with awkwardness and silence. Even though most of the students I’d engaged with in this past quarter always had their camera on, my fellow LA complimented me on my good use of wait time during the LA observation “Sunny did a great job at utilizing wait time so that students have space to process their thoughts.” " },

    { text: "In the future, would you expect to implement these skills outside the LA Program?", id: 4, 
    contentJ:"J: Definitely! I have already started to implement some of the core strategies in my other courses, such as facilitating discussions. I used to be “the quiet one” in a group discussion because I am afraid to be wrong and because of my foreign accent. However, I gained a lot of confidence from interacting with students, instructors, and other LAs. My communication skills have improved a lot for the same reason. In group work, I do not hesitate to ask for help from my partners and I encourage them to express their thoughts verbally.", 
    contentS:"S: Yes definitely! I found that all the skills I learned throughout the course as I mentioned above can also be applied to our daily social scenarios. Using wait time to give others more time to organize their thoughts and response, being aware of people who are left out in a group discussion, and redirecting questions to foster stronger bonds. In addition, with the experience of using white board feature to help students visualize abstract and dense concepts, and being able to improve my skills at asking open-ended questions, I felt more confident to share my screen and express my thoughts or concerns publicly. And through learning about growth mindset and having that in mind all the time, I consolidated my self-esteem and started to become more self-love and not to be afraid of any challenges posed ahead of me. By preparing for the class, constantly interacting with students, instructors and my fellow LAs, and writing reflections, my communication skills were enhanced. Especially as an international student whose mother tongue is not English, I am more confident in conveying my thoughts through this language."  },

    { text: "Do you have any suggestions on how the LA Program could improve?", id: 5, 
    contentJ:"J: In week 2, noticing that the “invite host” function is not very effective during discussion, I made suggestions to the TA and built a Google spreadsheet to track the breakout room progress. I found that students are more comfortable asking for help non-verbally. Also, the spreadsheet allows them to ask questions as a group, so students who are shy to ask questions individually can get help more easily. It would be great if this could be incorporated into the LA Program seminar/practices.", 
    contentS:"S: From my personal experience, I’ve noticed that the student attendance rate for discussions plummets after mid-quarter because they are not mandatory. I hope the LA program could encourage more instructors to modify their policies for attending discussion so that more students would benefit from the LA program and more generally, learning itself."  },

    { text: "Would you recommend the LA Program to others (friends/instructors/peers)? If so, why?", 
    id: 6, 
    contentJ:"J: YES. I have already recommended the LA Program to several students in my content course. Not only have I learned a lot about teaching and learning in the LA Program, but I have also developed a stronger sense of belonging to the student community of UCLA. Moreover, I constantly reflect on myself while helping others, so I discovered a lot of blind spots in my learning methods which I have not noticed before.", 
    contentS:"S: 100%! I’ve already mentioned how great this program is to my friends and many of them are curious as well! I firmly believe that they will benefit as much as me, if not more, from the LA Program because the target subject does not just include those students you helped, but also yourself. The amount of affirmation and satisfaction you gained from seeing students understand something difficult is immeasurable. And I was beyond grateful to have such a chance to interact with the instructor, other LAs and the students."  }
  ];

  export default function Experience() {
    const [ opened, setOpened ] = useState(false);
    function click(){
     
      setOpened(!opened);
     
  }

    return (
        <Container>
            <TextBox>
                <Headline>Q&A</Headline>
                <ReadMore opened={opened} onClick={click} display={opened ? "none":"block"}> Details </ReadMore>
                <Intro opened={opened} onClick={click} display={opened ? "block":"none"}> 
                <section>
                  Sunny Li and Jiayi Wu were both new to the LA Program this quarter (Spring 2021). We did a small interview here and continue scroll to read what they've said! Would you like to introduce yourselves first?
                  </section>
                <br/>
                  Jiayi (J): Hi, this is Jiayi. I’m a 2nd-year Neuroscience major. I’m glad to be a Math 33A LA this quarter. It was a really fun experience! I’m looking forward to LAing for Physics 5CL in the summer.
                <br/> <br/>
                  Sunny (S): Hello! My name is Sunny, I am a 2nd-year Computer Science major. I was also a LA for Math 33A this quarter and I love it a lot! I will also be a LA for CS32 this summer :D
                </Intro>
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