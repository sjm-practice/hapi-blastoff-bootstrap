# hapi-blastoff-bootstrap
This project is using a base node/hapi boiler (which is still in progress), to code along while completing the Code School Bootstrap online course (Blasting Off With Bootstrap).

## Course Notes
### Basics
* Web components
    - html - structure
    - css - style 
    - js - behavior
* Include bootstrap css 
    - has most of what you need
    - but if you do need other class or different behaviors, obviously, you should not modify bootstrap css, instead include another css file 
* Use of container
    - Div containment classes
    - .container (responsive behavior, with margins)
    - .container-fluid (same responsive behavior, but no margins)
### Grid System
* Column Offset
    - can use class col-md-offset-X  (will offset X columns on the left side) 
* Screen Size
    - extra small, .col-xs-x, .col-xs-offset-x, 0px+
    - small, .col-sm-x, .col-sm-offset-x, 768px+
    - medium, .col-md-x, .col-md-offset-x, 992px+
    - large, .col-lg-x, .col-lg-offset-x, 1200px+
* Can use more than one of the screen size classes at a time
    - each class is only applied when it gets down to its pixel size/range
    - order of the class declaration does not matter
    - ie... `<div class='col-xs-6 col-sm-4'> ... </div>`
* To  prevent an offset from taking effect for a screen size or larger, use an offset of 0
    - `<div class='col-sm-offset-0'> ... </div>`
    - `<div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0">` the col offset of 1 will be in effect when screen size is less than 768, but if 768 or greater, will not be applied
* Hiding elements, based on screen size (by default shown, and hidden when in this screen size)
    - .hidden-*  (xs, sm, md, lg)
* Or make visible, based on screen size (by default not shown, unless in this screen size)
    - .visible-*  (xs, sm, md, lg)

| grid size | grid class | offset class | screens applied to | example |
| -- |: -- :|: -- :|: -- :|: -- :|
| extra small | .col-xs-? | .col-xs-offset-? | 0px+ | phone |
| small | .col-sm-? | .col-sm-offset-? | 768px+ | tablet |
| medium | .col-md-? | .col-md-offset-? | 992px+ | laptop |
| large | .col-lg-? | .col-lg-offset-? | 1200px+ | desktop |

note: included classes will be applied or omitted based on screen size (current window pixel width)

### Typography
* per wikipedia... is the art and technique of arranging type to make written language most appealing
    - when dealing in web pages, font type size color style, positioning, spacing
* Bootstrap provides classes to adjust those font characteristics
    - ie 'lead'
* Also classes for aligning text 
    - ie text-center text-justify text-right text-left text-nowrap
* Glyphicons (are actually fonts, that show a picture)
    - use `<i>` element (also used for italic, but now commonly used for this)
    - need to use two classes to show a glyhpicon
        + class glyhpicon sets/associates font 
        + class glyhpicon-iconName selects the image to use
        + `<i class='glyphicon glyphicon-briefcase'></i>`
    - To manipulate the icon, use font characteristics
        + ie font-size, font-color, ...
    - It is best practice to create an additional class (outside of bootstrap.css) to adjust the glyhpicon appearance
```
// style.css
.features .glyhpicon {
    font-size: 32px;
    color: red;
}
```

### CSS plus
#### Appearance
* Bootstrap 'lead' class - changes font appearance for a sentence you wish to stand out 
* Bootstrap 'well' class
    - adds light background, border with rounded corners
* well-?  classes (add or decrease padding)
    - well-lg  adds padding
    - well-sm  reduces padding
    - `<div class='row well well-lg'>`
    - note, no need for well-md class (md by default)
* BUTTONS - appearance varies by browser
    - use class btn to get consistant appearance, and nicer behavior
    - add additional classes for more appearance and behaviors
    - (to adjust size) btn-lg btn-sm btn-xs
    - (to assign default action) btn-default  (hit enter uses this button)
    - (to adjust color) btn-primary btn-info btn-danger btn-warning btn-success
    - NOTE: (html) button elements have thee types: submit, reset, button
        + see docs for each behavior
        + often, client side scripts are associated to buttons 
#### Navigation
* base Navigation classes
    - nav - base class, styling, may be used around other areas of page 
        + usually for nav elements like links, list items etc.
    - navbar - different styling, usually only one navbar per page 
        + styling for navbar itself (not necessarily the nav components within it)
* NAV
    - nav - base nav class 
    - nav-pills - button like links
    - nav-tabs  - creats tab like links
    - navbar-nav - indicates this nav component is within a navbar component
* NAVBAR 
    - navbar-brand, styles a link to draw attention
    - navbar-right  positions navbar links on right side
    - Navbar styling (color schemes, and a little padding)
        + navbar-default  (muted text color, light background)
        + navbar-inverse
        + navbar-static-top
            * removes rounded corners, positions at top, scrolls with page
        + navbar-static-bottom, same but at bottom
        + navbar-fixed-top (or bottom)
            * as you scroll, navbar remains at top or bottom of page
            * when fixed-top, overlaps with body a bit
                * to account for this, add `body { padding-top: 70px; }`
* Toggling / Collapse-able  (aka Accordion)
    - collapse - collapses (always) list
    - navbar-collapse - expands collapsed list when on screen above xs 
    - sr-only - (screen reader only text) text not visible, usually used for visually impaired access, a reader reads the text out loud (similar as alt is used for images)
        + common use in span elements
    - navbar-toggle - will float element (like a button) right
        + other similar helper classes, pull-right & pull-left
    - icon-bar - a class that displays a small horizontal bar 
        + using three of these makes a hamburger
    - **NOTE:** these classes only impact appearance. js is needed to wire behavior (see below)
        + use js plugin to add and remove 'collapse' class when button is clicked
    - navbar-header - causes element to take up entire width of page when xs (similar to col-xs-12), used to push subsequent row elements below

### Bootstrap Javascript Plugins
*  To begin with, make sure bootstrap js is included in html file (script tag)
*  General Usage (trigger use of js plugins)
    -  can add data-* attributes to html 
    -  or write js explicitly to do so
        +  a little more involved, requires knowledge of js and hte bootstrap plugins
*  Collapse JS plugin
    -  data-toggle - removes/adds the provided class 
    -  data-target - css selector to choose elements for data-toggle
    -  ie
    ```
    data-toggle='collapse'           // class to toggle
    data-target='.navbar-collapse'   // which elements to toggle the class
    ```
* Dropdown-menu, items are hidden when page is first drawn
    - when clicking on item, adds or removes (toggles) an open class, which shows as open or not
* To support older browsers, or browsers with js disabled
    - on the dropdown menu use a default destination in href, and add data-target='#'
    - this will drop down the menu if js is enabled, else will take user to the href destination
    - ie `<a href='about.html' data-target='#' data-toggle='dropdown>...</a>`

## Course Feedback
* Liked the course, good introduction. Appropriate amount of material and depth
* Appropriate pace 
* Instructor was clear, easily understood
*  ...
