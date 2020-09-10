import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "themes/mediaQueries"
import { Section } from "styled/Section"
import { FaAngleDoubleRight } from "react-icons/fa"
import { JobButton, Button } from "../styled/Button"

const StyledSection = styled(Section)``

const JobsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};

  @media ${device.laptop} {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const JobArticle = styled.article`
  & h3{
    font-weight: 400;
  }

  & h4 {
    text-transform: uppercase;
    color: ${props => props.theme.grey5};
    background: ${props => props.theme.grey9};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: ${props => props.theme.radius};
  }
`

const JobDate = styled.p`
  letter-spacing: ${props => props.theme.spacing};
`

const JobDescription = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
  & p {
    margin-bottom: 0;
    color: ${props => props.theme.primary3};
  }
`
const JobIcon = styled(FaAngleDoubleRight) `
  color: ${props => props.theme.primary5};
`
// (sort: {fields: strapiId, order: DESC})
const query = graphql`
  {
    allStrapiJobs {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const JobsCenterButton = Button.withComponent(Link)

const Jobs = () => {
  const data = useStaticQuery(query)
  //alias your node
  const {allStrapiJobs:{nodes:jobs}} = data
  const [value, setValue] = React.useState(0)
  const {company, position, date, desc} = jobs[value]

  return (
    <StyledSection>
      <Title title="experience"/>
      <JobsContainer>
        <ButtonContainer>
          {
            jobs.map((item, index) => {
              return (
                <JobButton
                  key={item.strapiId}
                  onClick={() => setValue(index)}
                  activeBtn={index === value}
                >
                  {item.company}
                </JobButton>
              )
            })
          }
        </ButtonContainer>
        <JobArticle>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobDate>{date}</JobDate>
          {
            desc.map(item => {
              return (
                <JobDescription key={item.id}>
                  <JobIcon />
                  <p>{item.name}</p>
                </JobDescription>
              )
            })
          }
        </JobArticle>
      </JobsContainer>
      <Button
        as={Link}
        to="/about"
        centerbtn="true"
      >
        more info
      </Button>
    </StyledSection>
  )
}

export default Jobs
