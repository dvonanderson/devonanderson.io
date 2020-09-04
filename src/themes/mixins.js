export const headingDefaultStyles = () => {
  return `
    letter-spacing: ${props => props.theme.spacing};
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: ${props => props.theme.primary};
  `
};

export const pagesDefaultStyes = () => {
  return `
    background: ${props => props.theme.primary10};
    min-height: calc(100vh - 5rem - 9rem);
  `
}
