# n-framework
## proto version

***
### I About 

N-framework: a SCSS-learning and practice experience with the intent to be used in the author's personal projects. 

To install, export the project files

***
### II Contexts

The framework covers three style contexts, which can be mixed and matched. 

The following contexts will be included:

1. Linear [Default]

Most apparent in form settings, the linear context prioritizes a clean UI, with whitespace as the primary method of distinguishing between areas. 
In addition to whitespace, the linear context can use subtle distinctions in background color to delineate block level elements.
To mark a block element, typically a left or top border in a contextual color is used. 
The linear context avoids shadows, and never uses more than one side of a block for a border.

2. Squared [Coming soon]

The squared context uses four-sided 'boxes' to segregate content. Background colors differ from the main page background only in specially assigned cases ('context boxes'). Square elements are preferred, but other geometric shapes are available for marking list items, input elements and presenting images.

3. Smooth [Coming soon]

The smooth context uses border radius and :before and :after pseudoclasses, and uses shadow to suggest a three-dimensional space. The model defaults to top-left 45 degree light source, and can be globally configured to provide a different source of lighting (top, left, right and bottom only).

Lines are avoided in the smooth model and shades and hues are used to provide distinction between elements.

## III Vertical rhythm

The framework provides some tools to establish vertical rhythm. 
It uses the Sassline library for the baseline grid (source: https://github.com/jakegiltsoff/sassline).
The desired ratios inspired by the modular scale are set up for all three contexts and should be used to set margins and padding. 
They are included by default in the framework's available grid and component classes.

***

### IV Typography

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
By default, in this proto-version of the framework, I use Vernon Adam's Muli as a display font, paired with Cyreal's Lora in the body. 

Muli: https://www.google.com/fonts/specimen/Muli
Lora: https://www.google.com/fonts/specimen/Lora

Source: @import url(https://fonts.googleapis.com/css?family=Lora|Muli&subset=latin-ext);

***

### Issues and bug reporting


Send an e-mail to [nusa.babic@outlook.com](nusa.babic@outlook.com) for suggestions and to report significant oversights. For bugs and technical issues, use the Issues page.

***

### Copyright & license 

The framework is created and maintained by Nusa Babic [@sergelia](http://github.com/sergelia). Refer to LICENSE for licensing information (tl;dr: use it whichever way you like).

***
September 2016