# hapi-bootstrap
This project is using a base node/hapi boiler (which is still in progress), to complete the Code School Bootstrap online course (Blasting Off With Bootstrap).

## Notes
### Basics
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
* Bootstrap 'well' class
    - adds light backgroung, border with rounded corners
* well-?  classes (add or decrease padding)
    - well-lg  adds padding
    - well-sm  reduces padding
    - `<div class='row well well-lg'>`

### Javascript Components
* ...

