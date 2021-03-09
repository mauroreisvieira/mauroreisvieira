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
  size: 'sm' | 'md' | 'lg';
  children: string;
};

function Button({
  size,
  children
}: Props): JSX.Element => (
  ...
)

export default Button;
```

Firstly there is not only a correct way to build a component.

But... with that approach, looking as consumer I can see some limitations, such as are **NOT allowed** to use native attributes.

For instance if we want to use `onClick`, `type` or a simple `role` is not possible.

Another problem is with type `string` in prop `children`.
That will not allow a possibility of having other component or a simple icon inside a `button`.

**Let's change that...**

```tsx
type NativeButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps extends NativeButton {
    size: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  size,
  children,
  ...otherProps
}: ButtonProps & React.PropsWithChildren<ButtonProps>): React.ReactElement => (
    <button {...otherProps} type="button">
        {children}
    </button>
  )
);

export default Button;
```

Now our component allow us to use all the attributes of native`<button>` and also to use an simple text or other component inside.
