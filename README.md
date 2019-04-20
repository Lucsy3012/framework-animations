# animations
A CSS library that contains a list of useful keyframe animations to include in your project.

# Work in progress!

## Example file
At [...] you can see how `animations.css` works.

## How to use
Simply grab the `animations.css` or `animations.min.css` and link it within your project. You can download it and share it or you can use the following link to directly link to newest version. [...]
When the file is linked to your project you can use the full range of pre-defined animations in your own CSS file like this:

    .example {
        animation-name: fade;
        animation-duration: 1s;
        animation-timing-function: ease;
    }
    
    .short {
        animation: 1s fade ease;
    }
    
See a full documentation for the usage of the *animation* property at https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations for further instructions.

## Features
Custom Properties
--multiplier

## Additional features
I've also included a small jQuery script `animate.js` that lets you take full advantage of your animations. It searches for `.animate` classes within your file and applies the `.in` class to this specific element if it appears on your device. This allows you to delay an animation and trigger it when the user first encounters the element. 