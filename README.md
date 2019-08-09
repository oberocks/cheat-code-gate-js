# cheat-code-gate.js

A tiny JavaScript component plugin that automatically gates page content in a way that can only be unlocked by entering the Konami cheat code using the dynamically created UI buttons that take over the screen.

> If you aren't sure what this (playful) project is all about, you should probably read a bit about the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) before using it!

## Default Installation

Installing `cheat-code-gate.js` is easy. Simply download the .zip from GitHub (or a package manager), add the `cheat-code-gate.min.js` or `cheat-code-gate.js` file to your project wherever you need it. Then you'll need to include the script in your page code with something like this:

```html
<script src="js/cheat-code-gate.min.js"></script>
```

Next, you'll want to set up the code to call the `cheat-code-gate.js` function (`cheatCodeGate`) upon a page load like this:

```javascript
// on document ready
if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll) ) {
    cheatCodeGate();
} else {
    document.addEventListener("DOMContentLoaded", cheatCodeGate);
}
```

## Customized Installation

You can alternatevly customize the colors of the dynamically created elements to befit the style of your site. To do this, you'll need to set up your code a little differently from the default method. First, include the script with something like this:

```html
<script src="js/cheat-code-gate.min.js"></script>
```

Next, you'll want to set up the code to call the `cheat-code-gate.js` script with your custom colors JavaScript object. The following example uses a different background color for the gate element:

```javascript
let options = {
    gateBackground: '#cccccc'
};

// on document ready
if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll) ) {
    cheatCodeGate(options);
} else {
    document.addEventListener("DOMContentLoaded", cheatCodeGate(options));
}
```

## Customization Options
The following table has all of the customization options for the `cheat-code-gate.js` plugin:

OPTION | VALUE TYPE
------------ | -------------
gateBackground | String
dPadBackground | String
dPadText | String
btnBackground | String
btnText | String

> **NOTE**: You can pass any valid CSS color string as a value in your customization object! (IE: Hex, RGB, RGBa, etc. values)