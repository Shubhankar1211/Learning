use effect 

side effects
side effects are the operations that interact with the the outside world or have effects beyond the component's rendering . example include:

fetching data fron an API
modfiying the dom manually
subscribing to events(websokets)
starting a clock

these are called side effects because they don't just compute based on the input they affet things outsode the component itself.

problems-:

if you try to introduce side effect directly in the rendering logic of a componenes (in the return statement ot before it),react wourld run that code every time the componente renders. thsi can lead to :

unnecessary or duplicated effects(like multiple api calls)
inconsistent behaviour(side effects might happens before rendering finishes)
performance issues(side efects could block rendering or cause excessive re-rendering)