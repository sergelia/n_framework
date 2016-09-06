Principles

I Contexts

The framework covers three style contexts, which can be mixed and matched. 

The following contexts are available by default:

1. Linear

Most apparent in form settings, the linear context prioritizes a clean UI, with whitespace as the primary method of distinguishing between areas. 
In addition to whitespace, the linear context can use subtle distinctions in background color to delineate block level elements.
To mark a block element, typically a left or top border in a contextual color is used. 
The linear context avoids shadows, and never uses more than one side of a block for a border.

2. Squared

The squared context uses four-sided 'boxes' to segregate content. Background colors differ from the main page background only in specially assigned cases ('context boxes'). Square elements are preferred, but other geometric shapes are available for marking list items, input elements and presenting images.

3. Smooth

The smooth context uses border radius and :before and :after pseudoclasses, and uses shadow to suggest a three-dimensional space. The model defaults to top-left 45 degree light source, and can be globally configured to provide a different source of lighting (top, left, right and bottom only).

Lines are avoided in the smooth model and shades and hues are used to provide distinction between elements.

II Vertical rhythm

The framework provides some tools to establish vertical rhythm. 
It uses the Sassline library for the baseline grid (source: https://github.com/jakegiltsoff/sassline).
The desired ratios inspired by the modular scale are set up for all three contexts and should be used to set margins and padding. 
They are included by default in the framework's available grid and component classes.

III Typography

Three different type sets are suggested for the three contexts. CDN or self-hosted webfonts can be set in the type SCSS partial, but the three families are used by default:

1. Linear
Sans-serif fonts are used exclusively in the linear model, imagined as a flat material design offshot. It uses Christian Robertson's Roboto, in Slab and Normal.

Roboto Slab: https://www.google.com/fonts/specimen/Roboto+Slab
Roboto: https://www.google.com/fonts/specimen/Roboto

Source: @import url(https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&subset=latin-ext);

2. Squared
The squared model uses Droid Sans for body type, and Oswald for headings, labels and captions.

Oswald: http://www.google.com/fonts/specimen/Oswald
Droid Sans: http://www.google.com/fonts/specimen/Droid+Sans

Source: @import url(https://fonts.googleapis.com/css?family=Droid+Sans|Oswald&subset=latin-ext);

3. Smooth
Within the smooth context, I use Vernon Adam's Muli as a display font, paired with Cyreal's Lora in the body. 

Muli: https://www.google.com/fonts/specimen/Muli
Lora: https://www.google.com/fonts/specimen/Lora

Source: @import url(https://fonts.googleapis.com/css?family=Lora|Muli&subset=latin-ext);


IV Dynamic components

The framework's raison d'etre is to support JavaScript development, wherein a number of important elements on the page are dynamically generated and interactive.

Therefore the three contexts include classes to attach interaction behaviour to such elements, or provide CSS support for color and background changes.

1) Behaviors 
The recognized behaviors are as follows:
- Drag & drop

- Touch

- Swipe

- Hover 

- Creation

- Deletion

- Resize

- Collapse

- Expand

Animation speed can be customized in the dynamic SCSS partial, and it defaults to 200 for the linear, 400 for the squared, and 500 for the smooth context.

In order to attach these behaviors to generated elements, they should be given the class 'dynamic'. In order to opt out of a behavior, they should be given a class name in the format 'no-{behavior name}', e.g. 'no-resize' or 'no-collapse'.

2) Included UI elements
A number of commonly used UI elements intended to be compliant with the framework are wrapped as plugins. They can be replaced with others and should cause no conflicts as these elements require an explicitly set 'n-' class prefix.

- Information cards
- Notification 
- Progress bar

Features planned in future releases: 
- Explainer sidebar 
- Counter
- Lightbox 


Valuable sources of code snippets, guidance and inspiration:

Some helpful mixins to kick off SASS coding: http://zerosixthree.se/8-sass-mixins-you-must-have-in-your-toolbox/

Animation basis: https://github.com/daneden/animate.css

Vertical rhythm advice: http://typecast.com/blog/4-simple-steps-to-vertical-rhythm

