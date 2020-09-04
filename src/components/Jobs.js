import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"


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

//!may need this later
// const JobsSection = styled.section.attrs(props => ({
//   className: "section"
// }))`
//    background: var(--clr-grey-10);
// `
const JobsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
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
  @media screen and (min-width: 992px) {
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
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
`

const JobDate = styled.p`
  letter-spacing: var(--spacing);
`
const JobDescription = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
  & p {

    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
`
const JobIcon = styled(FaAngleDoubleRight) `
  color: var(--clr-primary-5);
`

const Jobs = () => {
  const data = useStaticQuery(query)
  //alias your node
  const {allStrapiJobs:{nodes:jobs}} = data
  const [value, setValue] = React.useState(0)
  const {company, position, date, desc} = jobs[value]

  return (
    <section className="section">
      <Title title="Experience"/>
      <JobsContainer>
        <ButtonContainer>
          {
            jobs.map((item, index) => {
              return (
                <button
                  key={item.strapiId}
                  className={`job-btn ${index === value && "active-btn"}`}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
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
      <Link to="/about" className="btn center-btn">more info</Link>
    </section>
  )
}

export default Jobs
