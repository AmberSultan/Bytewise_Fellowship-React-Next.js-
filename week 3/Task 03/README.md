# Bytewise_Fellowship (React & Next.js)
## Week 03 (28/06/24)

### Day 03
## Task 03 - Styling in React (in-line, css in js, modules)

## 1.Inline Style

Inline styles in React are defined directly within the JSX elements using the `style` attribute.

```
const styles = {
  container: {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '8px',
  };

function InlineStylesExample() {
  return (
    <div style={styles.container}>
    </div>
  );
}
```

- <b>Pros:</b> Simple and directly applied, easy to manage within components.
- <b>Cons:</b>  Limited reuse, can lead to cluttered JSX with styles mixed with markup.

 ## 2.CSS in JS

CSS-in-JS libraries allow you to write actual CSS in JavaScript code. 

```
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: lightblue;
  padding: 20px;
  border-radius: 8px;
`;

const StyledParagraph = styled.p`
  color: black;
  font-size: 16px;
`;

function StyledComponentsExample() {
  return (
    <StyledDiv>
      <StyledParagraph>Styled with Styled Components</StyledParagraph>
    </StyledDiv>
  );
}
```
- <b>Pros:</b>  Encapsulation of styles, better support for CSS features like nesting, variables, and theming.
- <b>Cons:</b>  Requires a build step, potential learning curve for setup and integration.

 ## 3.CSS Modules

CSS Modules allow you to locally scope CSS class names by automatically generating unique class names.

```
import styles from './Component.module.css';

function CSSModulesExample() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Styled with CSS Modules</p>
    </div>
  );
}
```

- <b>Pros:</b> Locally scoped styles prevent class name clashes, works well with existing CSS workflows.
- <b>Cons:</b> Requires setting up a build process to handle CSS Modules, not as dynamic as CSS-in-JS for certain use cases.
