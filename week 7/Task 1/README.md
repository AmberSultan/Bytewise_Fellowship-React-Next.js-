# Bytewise_Fellowship (React & Next.js)
## Week 01 (22/07/24)

### Day 01
## Task 01 - When to use Global and Local states?

### Local State

**Use local state** when:
- **Data is specific to a single component**: If the state is only needed within one component and does not need to be shared with other components, it should be managed locally within that component.
- **State does not affect other parts of the app**: If changing the state in a component does not require updates or changes in other components, local state is sufficient.
- **Component-specific interactions**: For interactions that are specific to a single component, like form inputs, toggling visibility, or handling local UI behavior.

**How to manage local state**:
- Use the `useState` hook for functional components.
- Use the `this.state` and `this.setState` methods for class components.

### Global State

**Use global state** when:
- **Data needs to be shared among multiple components**: If the state needs to be accessed or updated by different parts of the app, global state management is necessary.
- **State affects multiple components**: When changes in one component need to propagate to others or when components need to synchronize their state.
- **Complex state logic**: If state management becomes complex with multiple layers of components, using a global state management solution helps keep things organized.

**How to manage global state**:
- **Context API**: Suitable for passing down data and functions through the component tree without having to manually pass props down through multiple layers. Ideal for app-wide themes, user authentication status, and settings.
- **Redux or other state management libraries**: Useful for more complex state management needs, such as handling large amounts of data, asynchronous actions, and maintaining a centralized store.

### Examples

- **Local State**: Managing form inputs, toggling visibility of a dropdown, or managing the state of a modal.
- **Global State**: User authentication status, theme settings, or managing the state of a shopping cart that is accessed by various components throughout the app.

