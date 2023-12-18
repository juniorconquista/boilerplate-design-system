# `@bmg-ds/tokens`

## 📚 Documentation

Check out our [documentation site]() for detailed guidelines and resources.

## 🚀 Installation

Install `@bmg-ds/tokens` using any package manager.

```shell
$ npm install @bmg-ds/tokens

// or

$ yarn add @bmg-ds/tokens
```

## 💻 Usage

You can import our generated tokens in a variety of formats, such as `css, scss` and `js`.

**css**

```css
@import var("@bmg-ds/tokens/dist/css/variables.css");
```

**scss**

```scss
@import "@bmg-ds/tokens/dist/scss/_variables";
```

**js**

```javascript
import tokens from "@bmg-ds/tokens/dist/js/tokens";
```

## 🛠 Building tokens

You can add, remove or modify existing tokens by editing the json files inside the `src` directory. Each category of tokens has it's own folder.

```
  ├─ 📁 src
  │  ├─ 📁 color
  │  │  ├─ 📄 ref.json
  │  │  ├─ 📄 sys.json
```

| Category                       | Description                                                                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Breakpoint](./src/breakpoint) | We use breakpoints to determine which screen sizes are relevant to make changes in the layout. With these tokens we can remain up to date with the most frequent device sizes. |
| [Color](./src/color)           | Our color system has specific functions and are used to visually guide the user, provide hierarchy, communicate states and add depth to our interfaces.                        |
| [Motion](./src/motion)         | We use motion values to generate micro-interactions and animate components when they have state changes or need to attract the user's attention.                               |
| [Shadow](./src/shadow)         | Shadow tokens are based on levels of distance from the background, each of which is linked to a set of different properties to highlight this characteristic.                               |
| [Shape](./src/shape)         | Shape tokens are based on multiples of 4px, generating radius scales that can vary according to the needs of the interface.                               |
| [Spacing](./src/spacing)       | We use spacers to separate elements both grouped or not, to create spacing between blocks of content, fields in a form or padding in buttons.                                  |
| [Typography](./src/typography) |  We use text styles to highlight information, provide titles for pages or blocks of content, featuring specific topics or text elements.                                       |
| [zIndex](./src/zIndex) |  The design system has pre-defined z-index values to facilitate the organization of stacking elements on the screen, thus avoiding overlapping components..                                       |

Once you finish making changes to our source tokens, you must generate a build to compile them into all different formats, by running our build command:

```shell
  $ yarn build
```

## 🔗 Useful links

- [Design System](https://github.com/juniorconquista/boilerplate-design-system). Our components library.
- [Icons](https://github.com/juniorconquista/boilerplate-design-system/packages/icons). Our very own open-source icon library.

## 🤝 Contributing

We encourage all ideas, suggestions and feedback. If you want to collaborate with us, start by reading our [contribution guidelines](https://github.com/juniorconquista/boilerplate-design-system/blob/master/CONTRIBUTING.md).

