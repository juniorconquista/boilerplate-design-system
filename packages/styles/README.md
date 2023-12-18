# `@bmg-ds/styles`

The style package that contains all the variables and rules necessary for the components to work.

## Installation

```sh
$ yarn add @bmg-ds/styles
# or
$ npm install @bmg-ds/styles
```

## Usage

We import the Design System component and the CSS styles file for our project, thus allowing the use of the component in the project.

```jsx
// App.tsx
import React from "react";
import "@bmg-ds/styles/dist/index.css";

import { Button } from "@bmg-ds/button";

const MyApp: React.FC = () => {
  const onClickButton = () => {
    alert("hello world!");
  }

  return (
    <Button appearance="primary" onClick={handleClick}>
      ...
    </Button>
  );
};

export default MyApp;
```
