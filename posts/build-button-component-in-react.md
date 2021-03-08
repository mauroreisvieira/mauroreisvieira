---
title: 'Build Button Component in React'
description: 'React is one of the most popular JavaScript libraries for building user interfaces, in that post a will demonstrate I good practices to build a Button component.'
date: '2021-03-05'
image: 'http://mauroreisvieira.com/static/og/build-button-component-in-react.png'
---

There are many ways to create a `Button` component in React.\
Personally prefer to create my components using Typescript, one of the benefits is that code is more self-descriptive.

Many developers create a `Button` component that way:

```tsx
type Props = {
  children: React.ReactNode;
};

function Button({
  children
}: Props): JSX.Element => (
  ...
)

export default Button;
```

Firstly there is not only a correct way to build a component.

But... with that approach, looking as consumer, we can saw some limitations, such as are **NOT allowed** to use native attributes.

For instance if we want to use `onClick` or a simple `role` is not possible.

### Let changes that...

```tsx
type NativeButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends NativeButton {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  ...otherProps
}: ButtonProps): React.ReactElement => (
    <button {...otherProps} type="button">
        {children}
    </button>
  )
);

export default Button;
```

Now our component allow us to use all the attributes of native`<button>`.
