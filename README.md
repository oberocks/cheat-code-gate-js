# cheat-code-gate.js

A tiny JavaScript component plugin that automatically gates page content in a way that can only be unlocked by entering the Konami cheat code using the dynamically created UI buttons that take over the screen.

> If you aren't sure what this (playful) project is all about, you should probably read a bit about the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) before using it!

## Table of Contents

 * [Default Installation](#default-installation)
 * [Customized Installation](#customized-installation)
 * [Customization Options](#customization-options)

## Default Installation

Installing `cheat-code-gate.js` is easy. Simply download the .zip from GitHub (or a package manager), add the `cheat-code-gate.min.js` or `cheat-code-gate.js` file to your project wherever you need it. Then you'll need to include the script in your page code with something like this:

```html
<script src="js/cheat-code-gate.min.js"></script>
```

Next, you'll want to set up the code to call the `cheat-code-gate.js` function (`cheatCodeGate`) upon a page load like this:

```javascript
<script type="text/javascript">
    // on document ready
    if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll) ) {
        cheatCodeGate();
    } else {
        document.addEventListener("DOMContentLoaded", cheatCodeGate);
    }
</script>
```

## Customized Installation

You can alternatevly customize the colors of the dynamically created elements to befit the style of your site. To do this, you'll need to set up your code a little differently from the default method. First, include the script with something like this:

```html
<script src="js/cheat-code-gate.min.js"></script>
```

Next, you'll want to set up the code to call the `cheat-code-gate.js` script with your custom colors JavaScript object. The following example uses a different background color for the gate element:

```javascript
<script type="text/javascript">
    let options = {
        gateBackground: '#cccccc'
    };

    // on document ready
    if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll) ) {
        cheatCodeGate(options);
    } else {
        document.addEventListener("DOMContentLoaded", cheatCodeGate(options));
    }
</script>
```

## Customization Options
The following table has all of the JavaScript object customization properties for the `cheat-code-gate.js` plugin:

OPTION | VALUE TYPE | DEFAULT VALUE | DETAILS
------------ | ------------- | ------------- | -------------
gateBackground | String | `'#1c1c1c'` | This property sets the background color of the gate (the element that visually covers the page).
dPadBackground | String | `'#242424'` | This property sets the background color of the dynamically generated D-Pad buttons.
dPadText | String | `'#999999'` | This property sets the color of the dynamically generated D-Pad button text.
btnBackground | String | `'red'` | This property sets the background color of the dynamically generated A & B buttons.
btnText | String | `'white'` | This property sets the color of the dynamically generated A & B buttons text.

> **NOTE**: You can pass any valid CSS color string as a value in your customization object! (IE: Hex, RGB, RGBa, etc. values)