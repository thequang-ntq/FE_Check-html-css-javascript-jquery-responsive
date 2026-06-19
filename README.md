# FE (Check HTML, CSS, JS, Jquery, Responsive)

## Table of Contents

- [FE (Check HTML, CSS, JS, Jquery, Responsive)](#fe-check-html-css-js-jquery-responsive)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Goal](#goal)
  - [UI Screenshots](#ui-screenshots)
  - [Time Tracking](#time-tracking)
  - [Future Work](#future-work)

## Features

- Exercise of HTML, CSS, JS, Jquery, Responsive
  - Slider Image:
    - images display flex, overflow-x hidden, then set width in list, marginLeft -100% per image, disabled when animate
    - dots: update dot according to target slide, this.index, disabled when animate.
  - Tab function:
    - active class in tab header & tab content
    - data tab
    - fadeIn, hide in tab content
    - check if current tab is active tab, if not then remove 2 active, hide content, add 2 active to active tab and fadeIn
  - Accordion function
    - active class in tab header & tab content
    - data tab
    - slideUp, slideDown in tab content
    - check if current tab is active tab, if not then remove 2 active, slideUp, add 2 active to active tab and slideDown
  - 3-levels menu
    - Repeating structure: menus is content of level 1, content is content of level 2,3... In 1 content: the items (tabs) to click -> this include header (clickable) and content of the next level
    - data menu
    - border in menus and border-bottom in header (not nth-of-type)
    - logic: click header not have menus -> close all menus, otherwise open menu
  - List of news

## Goal

- Learning and using slider image, tab function, accordion, 3-levels menu in jquery

## UI Screenshots

| Home                            |
| ------------------------------- |
| ![Home UI](images/screen-1.png) |

## Time Tracking

| Date       | Task                                           | Notes |
| ---------- | ---------------------------------------------- | ----- |
| 2026-06-16 | Setup exercise, create README, do slider image | .     |
| 2026-06-17 | Do slider image jquery (cont), tab, accordion  | .     |
| 2026-06-18 | Do multilevel menu, fix css & js logic         | .     |
| 2026-06-18 | Fix multilevel menu                            | .     |

## Future Work

- [ ] Update app structure, optimize and clean code.
- [ ] UI : Design the UI better, cleaner.
