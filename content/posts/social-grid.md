---
title: Social Grid
subtitle: "Credit to "
date: 2023-03-12
draft: true
summary: See how you can make yourself a social grid which is similar to having
  social cards
tags: []
image: https://i.imgur.com/ZKWqXRS.png
author: Mikko
---
S﻿o I had fun doing this project on Codepen, my playground. If you check out my Contact page,  you will see how the social links were turned into cards. which were then also put into a grid. I knew I didnt need no more than a 2 column grid, making it with a **ZERO** gap.\
\
Starting off, we are going to make the grid columns which is exactly what is needed for our social card links:

`<div class="grid grid-cols-2 gap-0">`

H﻿owever your header is, thats totally fine, you would just add that underneath to start off. If your just doing this as a complete blank and testing it, then I would suggest you doing it on Codepen but see how I have it on mine. below:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="JjapjZp" data-user="MikkoCodes" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/MikkoCodes/pen/JjapjZp">
  Social Grid</a> by Michael (<a href="https://codepen.io/MikkoCodes">@MikkoCodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>









H﻿ow about we just go ahead and use one to start off right? No half assin' here!

\`\``<body class="bg-gray-900 text-gray-500 dark:text-neutral-600 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">

  <div class="space-y-2 pt-8 pb-16 md:space-y-5">
    <h2 class="text-white text-3xl">Contact Me</h2>
    <p>If you have any questions, feel free to contact me.</p>
  </div>\`\``

N﻿ow we can go ahead and start adding the grid and columns for our project:

`﻿<div class="grid grid-cols-2 gap-0">`