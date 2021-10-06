# Rock Paper Scissors Lab

### What *HTML elements* do I need?
* Title -- static
* Radio inputs for R / P / S -- dynamic
* Button for submit -- static
* Display span for result of most recent play -- dynamic
* Display spans for Wins / Losses / Draws -- dynamic
* Reset score button -- static
* Display spans for number of times score has been reset -- dynamic

### What *states* do I need?
* Selected radio input
* Computer random choice generated
* wins
* losses
* draws
* resets

### What *events* do I need to listen for?
* Play button
    * compare user selection to computer selection
    * if user = comp - draw
    * if user rock & comp scissors - increment win
    * if user scissors & paper scissors - increment win
    * if user paper & comp rock - increment win
    * else - increment loss
    * display result
* Reset Score Button
    * clear wins losse and draws
    * add one to number of resets


## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass