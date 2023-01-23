# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-QhwZNw5xE_](https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-QhwZNw5xE_)
- Live Site URL: [https://intro-section-with-dropdown-navigation-sepia.vercel.app/](https://intro-section-with-dropdown-navigation-sepia.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Parcel - Build tool
- Sass - CSS preprocessor

### What I learned

I learned about using the translateY and translateX for the menu openning effect.

```scss
.menu {
  transform: translateY(-100%);

  &--open {
      transform: translateX(0)
  }
}
```

## Author

- Frontend Mentor - [@miguelzaga](https://www.frontendmentor.io/profile/miguelzaga)

