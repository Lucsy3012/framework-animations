# animations
A CSS library that contains a list of useful keyframe animations and possibilites to combine different styles to include in your project.

## Example
At <a href="http://animations.lucasdietrich.de/">http://animations.lucasdietrich.de/</a> you can see how animations.css works in action. There you'll find the documentation, a small setup guide and of course the download as well. 

## How to use
Simply grab the `animations.min.css` or `animate.min.js` and link it within your project.
When the CSS file is linked to your project you can use the full range of pre-defined animations and properties in your HTML like this:

    <!-- gets instantly animated -->
    <div class="animate">
        <img src="some/file.img" />
    </div>
    
    <!-- animation is delayed until user reaches it -->
    <div class="animate--js">
        <img src="some/file.img" />
    </div>
    
## jQuery
With the tiny jQuery script `animate.min.js` you can take full advantage of your animations. It searches for `.animate--js` classes within your file and applies the `.in` class to this specific element if it appears on your device. This allows you to delay an animation and trigger it when the user first encounters the element.
    
## Why animations.css?
* Instant library to *useful* standard keyframe animations
* Combine multiple animation types and properties to create your own animations without extending the CSS
* Built with Custom Properties which allows for accessible customization
* CSS-only sequence function
* Delay the animation until the user arrives at the element (requires JS) 