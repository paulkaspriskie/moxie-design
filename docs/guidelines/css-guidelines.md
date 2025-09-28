# CSS

## Basic Formatting Rules:

```css
.selector-one,
.selector-two,
.selector-three {
	position: absolute;
	display: block;
	width: 100%;
}

h1 {
	margin: 0;
	padding: 0;
}
```

- Use one selector per line in multi-selector rulesets.
- Include a single space before the opening bracket of a code block.
- Use one level of indentation for each property declaration.
- Use a single space after the colon of a property declararion.
- Use lowercase and shorthand hex values ex.`#fff`
- Separate each code block with a blank line.

<br/>

---

<br/>

## Property Ordering:

```css
.example {
	/* Positioning */
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	/* Display & Box Model */
	display: block;
	overflow: hidden;
	box-sizing: border-box;
	width: 600px;
	height: 250px;
	margin: 3px;
	border: 1px solid #222222;
	padding: 10px;

	/* Color */
	background: #222222;
	color: #ffffff;

	/* Text */
	font-family: sans-serif;
	font-size: 14px;
	line-height: 1.5;
	text-align: right;

	/* other */
	cursor: pointer;
	transition: margin-right 4s ease-in-out;
}
```

<br/>

---

<br/>

## Naming Convention

Moxie CSS uses [BEM naming conventions](https://getbem.com/naming/) with the addition of a prefix.

**_Syntax:_** `<prefix>-<component-name>[__<element>][--<modifier>]`

### Application Container

```css
.app-portfolio-site__container {
    // do stuff.
}
```

### Component

```css
.component-form-item {
    // do stuff.
}
```

### Component with element

```css
.component-form-item__head {
    // do stuff.
}
```

### Component with Modifier

```css
.component-form-item--inline {
    // do stuff.
}
```

### Component with state

```css
.component-drawer--is-open {
}

.component-drawer--is-closed {
}

.component-drawer--is-disabled {
}
```

<br/>

---
