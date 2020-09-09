import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import {
  StyledSection,
  JobsContainer,
  ButtonContainer,
  JobArticle,
  JobDate,
  JobDescription,
  JobIcon} from "../styled/Jobs"
import { JobButton,  CenterButton } from "../styled/Button"

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
      <CenterButton>
        <Link to="/about">more info</Link>
      </CenterButton >
    </StyledSection>
  )
}

export default Jobs
