# `@bmg-ds/icons`

@bmg-ds/icons is an open source icon system built by BMG.

## 🚀 Getting started

Install `@bmg-ds/icons` using any package manager.

```sh
$ yarn add @bmg-ds/icons
# or
$ npm install @bmg-ds/icons
```

## 💻 Usage

You can also use them for react development, using `yarn` to install.

| Property   | Type                                                                                   |            |
| ---------- | -------------------------------------------------------------------------------------- | ---------- |
| aria-label | string                                                                                 | (optional) |
| size       | number<br/>'small' = 16px (default)<br/>'medium' = 24px<br/>'large' = 32px<br/>'fixed' | (optional) |

```jsx
import { CloudIcon, AlertIcon, StoreIcon } from "@bmg-ds/icons";

<CloudIcon />
<AlertIcon size="large" />
<StoreIcon size="medium" aria-label="Store" />
```
