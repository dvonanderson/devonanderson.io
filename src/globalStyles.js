import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* ===Variables=== */
  :root {
    /* dark shades of primary color*/
    --clr-primary-1: hsl(43, 86%, 17%);
    --clr-primary-1: hsl(184, 91%, 17%);
    --clr-primary-2: hsl(185, 84%, 25%);
    --clr-primary-3: hsl(185, 81%, 29%);
    --clr-primary-4: hsl(184, 77%, 34%);
    --clr-primary-5: #2caeba;

    /* lighter shades of primary color */
    --clr-primary-6: hsl(185, 57%, 50%);
    --clr-primary-7: hsl(184, 65%, 59%);
    --clr-primary-8: hsl(184, 80%, 74%);
    --clr-primary-9: hsl(185, 94%, 87%);
    --clr-primary-10: hsl(186, 100%, 94%);

    /* alternate color */
    --clr-devon-background: hsl(60, 4%, 38%);

    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);

    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-green-dark: hsl(125, 67%, 35%);
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-white: #fff;
    --ff-primary: "Roboto", sans-serif;
    --ff-secondary: "Open Sans", sans-serif;
    --transition: all 0.3s linear;
    --spacing: 0.2rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 700px;
  }

  --heading-default-styles: {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: var(--ff-primary);
  }
  /* ===Global Styles=== */
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
    font-family: var(--ff-secondary);
    background: var(--clr-white);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
    margin-top: 5rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 3rem;
    @apply --header-default-styles;
  }
  h2 {
    font-size: 2rem;
    @apply --header-default-styles;
  }
  h3 {
    font-size: 1.25rem;
    @apply --header-default-styles;
  }
  h4 {
    font-size: 0.875rem;
    @apply --header-default-styles;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-3);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
      line-height: 1;
    }
    h2 {
      font-size: 2.5rem;
      line-height: 1;
    }
    h3 {
      font-size: 1.75rem;
      line-height: 1;
    }
    h4 {
      font-size: 1rem;
      line-height: 1;
    }

    body {
      font-size: 1rem;
    }

  }

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

  //todo look at making this more dynamic inside of the component.
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

  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

`
export default GlobalStyles
