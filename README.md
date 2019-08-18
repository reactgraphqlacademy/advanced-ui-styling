## Design Systems with Styled System

The goal of this exercise is to learn how to style React applications in an idomatic way.

# Exercise

## Part 1, Styled-Components and Storybook

### Input component

Use styled-components to implement the style for the `Input` component defined in `src/component-based-styling/components/Input/index`.

There should be three stories in `src/component-based-styling/components/Input/input.stories.js` that show the following 3 styles.

1. The default Input style should be:

```
{
    padding: 5px;
}
```

2. The "error" style when Input receives the prop `error={true}`. The error style is the following:

```
{
    padding: 5px;
    border: 1px solid red;
}
```

3. The "disabled" style when Input receives the prop `disabled={true}`. The disabled style is the following:

```
{
    padding: 5px;
    border: 1px solid grey;
    background-color: grey;
}
```

4. What happens if we do this `<Input error disabled />`? What is the border color of the input? Should we improve that? How? Discuss with your peers.

#### Button component

Task 1. Using styled-components, implement some Bootstrap button styles in `src/component-based-styling/components/Form/Button` using the styles defined in that file. Then create the following stories in `src/component-based-styling/components/button/button.stories.js`:

1. Default, no props required.
2. Button primary when prop `primary={true}`
3. Button large when prop `large={true}`
4. Button block when prop `block={true}`

**Bonus question**. The default <Button /> (meaning no props) doesn't have a border, why? Should we fix that? How would you fix it? Discuss with your peers. Hint, what's the default style for the [Bootstrap button](https://getbootstrap.com/docs/4.3/components/buttons/)?

**Bonus exercise.** Implement the the component and stories for the Bootstrap Alert component [https://getbootstrap.com/docs/4.3/components/alerts/](https://getbootstrap.com/docs/4.3/components/alerts/)

## Prerequisites

You need to be comfortable writing React components and using Styled Components. This exercise assumes you understand the following concepts:

- [Introduction to Thinking in React](https://reactgraphql.academy/react/introduction-to-thinking-in-react/).
- [Component based style in React](https://reactgraphql.academy/react/styling-in-react/).

You need to have `node` and `npm` installed on your computer.

## Getting started

```console
git clone git@github.com:reactgraphqlacademy/design-systems-react.git
cd design-systems-react
npm install
npm start
```

## Articles and links

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
