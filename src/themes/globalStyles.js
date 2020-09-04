import { createGlobalStyle } from "styled-components"
import { pagesDefaultStyes, headingDefaultStyles } from "themes/mixins";
import { device } from "themes/mediaQueries"

const GlobalStyles = createGlobalStyle`
/*
===============
Global Styles
===============
*/
  * {
    &:after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    &:before{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  body {
    font-family: ${props => props.theme.secondary}, sans-serif;
    background: ${props => props.theme.white};
    color: ${props => props.theme.grey1};
    line-height: 1.5;
    font-size: 0.875rem;
    margin-top: 5rem;

    @media ${device.tabletM} {
      font-size: 1rem;
    }
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    ${headingDefaultStyles};

    @media ${device.tabletM} {
      line-height: 1;
    }
  }

  h1 {
    font-size: 3rem;
    @media ${device.tabletM} {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media ${device.tabletM} {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    @media ${device.tabletM} {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: 0.875rem;
    @media ${device.tabletM} {
      font-size: 1rem;
    }
  }

  p {
    margin-bottom: 1.25rem;
    color: ${props => props.theme.grey3};
  }

  /*
  ===============
  Buttons
  ===============
  */
  .btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    &:hover {
      color: var(---clr-primary-1);
      background: var(---clr-primary-8);
    }
  }

  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;

    &:hover {
      color: var(--clr-primary-5);
      box-shadow: 0 2px var(--clr-primary-5);
    }

    @media screen and (min-width: 992px) {
      margin-bottom: 1rem;
      &:hover {
        box-shadow: -2px 0 var(--clr-primary-5);
      }
    }
  }

  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);

    @media screen and (min-width: 992px) {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
  }

  .center-btn {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }

  /*
  ===============
  Pages
  ===============
  */
  .blog-template {
    ${pagesDefaultStyes};
  }
  .projects-page {
    ${pagesDefaultStyes};
  }
  .blog-page {
    ${pagesDefaultStyes};
  }
  .error-page {
    ${pagesDefaultStyes};
  }
  .about-page {
    ${pagesDefaultStyes};
  }
  .contact-page {
    ${pagesDefaultStyes};
  }


  /*
  ===============
  Misc
  ===============
  */
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
      width: 95vw;
    }
  }

  .social-links {
    margin-top: 2rem;
    width: 15rem;
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
  }

  .social-link {
    font-size: 1.75rem;
    color: var(--clr-grey-1);
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-5);
    }
  }

  .section {
    padding: 5rem -0;
  }

  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

`


export default GlobalStyles;
