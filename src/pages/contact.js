import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Styled-Components'

const ContactSection = styled.div`
  ${props => props.theme.pagesStyling};
  display: grid;
  place-items: center;
  padding: 5rem 0;
`

const ContactForm = styled.article`
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.radius};
  text-align: center;
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.transition};
  width: 90vw;
  max-width: 35rem;

  & :hover {
    box-shadow: ${props => props.theme.darkShadow};
  }

  & h3 {
    padding-top: 1.25rem;
    color: ${props => props.theme.grey5};
  }
`
const ContactFormGroup = styled.div`
  padding: 1rem 1.5rem;
`

const ContactFormControl = styled.div`
  display: block;
  width: 95%;
  padding: 0.75rem 1rem;
  border: none;
  margin-bottom: 1.25rem;
  background: ${props => props.theme.grey10};
  border-radius: ${props => props.theme.radius};
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.spacing};

  & ::placeholder {
    font-family: ${props => props.theme.primary};
    color: ${props => props.theme.grey1};
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.spacing};
  }
`

const SubmitButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 1rem;
  border-bottom-left-radius: ${props => props.theme.radius};
  border-bottom-left-radius: ${props => props.theme.radius};
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`

const contact = () => {
  return (
    <ContactSection>
      <ContactForm>
        <h3>get in touch</h3>
        <form action="https://formspree.io/myybgjvw" method="POST">
          <ContactFormGroup>
            <ContactFormControl
              as="input"
              type="text"
              placeholder="name"
              name="name"
            />
            <ContactFormControl
              as="input"
              type="email"
              placeholder="email"
              name="email"
            />
            <ContactFormControl
              as="textarea"
              name="message"
              placeholder="message"
              row="5"
            ></ContactFormControl>
          </ContactFormGroup>
          <SubmitButton type="submit">submit</SubmitButton>
        </form>
      </ContactForm>
    </ContactSection>
  )
}

export default contact
