import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Equipped with skills in both full stack development and data engineering, 
    I possess a broad understanding of technology from these two backgrounds.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Full-Stack</ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript, PHP, <br />
            React, Express, Node, <br />
            WordPress, Google AppsScript 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Enginnering</ListTitle>
          <ListParagraph>
            Shell Scripting, ETL, Python, <br />
            Ab-initio, Data Warehousing,<br />
            Job Scheduling, AWS S3 <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            SQL, MongoDB <br />
            Teradata, Snowflake
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;