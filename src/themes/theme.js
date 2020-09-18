import { keyframes, css} from 'styled-components'
// Darker shades of primary

// export const primary1 = "hsl(43, 86%, 17%)";
export const primary1 = "hsl(184, 91%, 17%)";
export const primary2 = "hsl(185, 84%, 25%)";
export const primary3 = "hsl(185, 81%, 29%)";
export const primary4 = "hsl(184, 77%, 34%)";
export const primary5 = "#0299f6";

// Lighter shades of primary
export const primary6 = "hsl(185, 57%, 50%)";
export const primary7 = "hsl(184, 65%, 59%)";
export const primary8 = "#0889e2";
export const primary9 = "hsl(185, 94%, 87%)";
export const primary10 = "hsl(186, 100%, 94%)";

// Heading Colors
export const grey1 = "hsl(209, 61%, 16%)";
export const grey3 = "hsl(209, 34%, 30%)";
export const grey4 = "hsl(209, 28%, 39%)";

// Paragraph Colors
export const grey5 = "hsl(210, 22%, 49%)";
export const grey8 = "hsl(210, 31%, 80%)";
export const grey9 = "hsl(212, 33%, 89%)";
export const grey10 = "hsl(210, 36%, 96%)";
export const darkGren = "hsl(125, 67%, 35%)";
export const darkRed = "hsl(360, 67%, 44%)";
export const lightRed = "hsl(360, 71%, 66%)";
export const white = "#fff";

// Font
export const primary = "Roboto";
export const secondary = "Open Sans";

//Animation
export const transition = "all 0.3s linear";
export const slideRight = keyframes`
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const rotate = keyframes`
  0% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0rem);
  }
`

export const slideUp = keyframes`
  0% {
    transform: translateY(200px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const moveDown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`

//Spacing
export const spacing = "0.25rem";

//Borders
export const radius = "0.25rem";

//Shadows
export const lightShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
export const darkShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";

//Widths
export const maxWidth = "1170px";
export const fixedWidth = "700px";

//Pages Styling
export const  pagesStyling = css`
  background: ${grey10};
  min-height: calc(100vh - 5rem - 9rem);
`
//Project Icons
export const projectIcon = css`
  color: ${primary5};
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: ${transition};

  & :hover {
    color: ${primary1};
  }
`

export const headingStyling = css`
  letter-spacing: ${spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: ${primary};
`

//Service Icons
export const serviceIcons = css`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`
