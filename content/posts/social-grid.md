---
title: Social Grid
subtitle: ""
date: 2023-03-12
draft: true
summary: See how you can make yourself a social grid which is similar to having
  social cards
tags: []
image: https://i.imgur.com/ZKWqXRS.png
author: Mikko
---
## Lets Begin:

The "CSS Grid Layout Showcase" on CodePen is an impressive demonstration of the power and versatility of Tailwind CSS. The project features a beautiful and modern design with a responsive grid layout composed of boxes containing images and text.

One of the standout features of this project is the use of inline classes to apply styles to HTML elements. Tailwind CSS provides a wide range of utility classes that can be used to quickly and easily style elements without the need for external CSS files. For example, the following lines of code apply various classes to the container element:

```html
<div class="flex flex-wrap justify-center lg:justify-start">
  ...
</div>
```


The "flex" class sets the display property of the element to "flex", enabling flexible layout options. The "flex-wrap" class sets the flex-wrap property to "wrap", allowing the elements to wrap to the next line if there is not enough space. The "justify-center" class centers the elements horizontally within the container. The "lg:justify-start" class applies the "justify-start" class on large screens (screens with a width of 1024px or more), aligning the elements to the left.

Similarly, the box elements are styled using inline classes to achieve the desired layout and design. The following lines of code apply classes to the box elements:

```html
<div class="box relative overflow-hidden bg-gray-900 rounded-lg shadow-lg">
  <img src="https://source.unsplash.com/featured/800x600/?nature" alt="nature" class="object-cover w-full h-full" />
  <div class="overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <p class="text-white text-lg font-bold">Nature</p>
  </div>
</div>
```


The "box" class sets the background color of the element to gray (#1a202c) using the "bg-gray-900" class, and applies a rounded border using the "rounded-lg" class. The "shadow-lg" class adds a shadow effect to the box element. The "object-cover" class scales the image to cover the entire box element, and the "w-full" and "h-full" classes set the width and height of the image to 100% of the box element. The "overlay" class is positioned absolutely over the image using the "absolute" class, and centered within the box element using the "flex" and "items-center" and "justify-center" classes. The "text-white", "text-lg", and "font-bold" classes style the text within the overlay.

Overall, this project is a great example of how Tailwind CSS can be used to create beautiful and responsive designs using inline classes. The code is clean and easy to understand, and the use of inline classes allows for quick and efficient styling without the need for external CSS files.



Y﻿ou can see an actual full demo here:
<!--StartFragment-->

<iframe height="300" style="width: 100%;" scrolling="no" title="Social Grid" src="https://codepen.io/MikkoCodes/embed/JjapjZp?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/MikkoCodes/pen/JjapjZp">
  Social Grid</a> by Michael (<a href="https://codepen.io/MikkoCodes">@MikkoCodes</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!--EndFragment-->

* My [Website](https://mikko.codes/contact)
* a﻿nd [Eggsy's Website](https://eggsy.xyz/me/contact/)