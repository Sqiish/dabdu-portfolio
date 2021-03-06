import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Things I'Ve Built</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) =>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Technologies</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>GitHub Repo</ExternalLinks>
            <ExternalLinks href={visit}>Live Demo</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;