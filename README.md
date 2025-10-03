# Moxie Design System

## Packages

| Package name                                             | Description                       | NPM                                                        |
| :------------------------------------------------------- | :-------------------------------- | :--------------------------------------------------------- |
| [@moxie-design/react](packages/react/)                   | React components with styles.     | https://www.npmjs.com/package/@moxie-design/react          |
| [@moxie-design/styles](packages/styles/)                 | CSS styles for components         | https://www.npmjs.com/package/@moxie-design/styles         |
| [@moxie-design/web-components](packages/web-components/) | Framework agnostic web components | https://www.npmjs.com/package/@moxie-design/web-components |

<br/>

---

<br/>

## File Structure Overview

```
.
├── config
├── docs
├── packages
├── tools
└── utilities
```

| Directory | Description                                                                 |
| :-------- | :-------------------------------------------------------------------------- |
| bin/      | Executable files not tied to a specific package/library.                    |
| config/   | shared configuration used across all packages and libraries.                |
| docs/     | Centralized project documentation.                                          |
| packages/ | All libraries that are published, versioned or to be consumed as a package. |
| tools/    | Scripts that manage, build or maintain the project itself.                  |

<br/>

---

<br/>

## Project Documentation

### Guidelines

- [CSS Guidelines](docs/guidelines/css-guidelines.md)
- [Git Guidelines](docs/guidelines/git-guidelines.md)
- [Javascript Guidelines](docs/guidelines/javascript-guidelines.md)
