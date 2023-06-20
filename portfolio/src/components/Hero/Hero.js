import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          This is Shwet Saoji.
        </SectionTitle>
        <SectionText>
        I am currently pursuing Master of Science in Computer Science from San Diego State University.  I have worked as a Software Engineer for 4 years with experience in developing highly scalable and robust data pipelines leveraging ETL tech, data warehousing and cloud technologies.  I am interested in exploring Software Engineering and Data Engineering to develop optimised solutions to complex real world problems. 
        </SectionText>
        {/* <Button onClick={() => window.location = "https://www.linkedin.com/in/shwet-saoji/"}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;