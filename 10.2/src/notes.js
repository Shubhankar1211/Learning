/*
ROLLLING UP THE STATE . UNOPTIMAL RE-REDNNERS
// this is the consept of rooling ->: if a child want to access the state property of its sibling it cant access it to acces it we use the  concept of rolliong the state
// in rolling the state we then pass the component to the least common ansestar so that its child can access the state 





PROP Drilling 

Prop drillling occurs when you need to pass data from a higher level compinents down to a lower -level components that si 
several layers deep in the component tree. this often leads to the following issues:

Complexity : You may have to pass props through many intermidate components that don't use the props themselves, just to get them to the components that needs them .
Maintenance: It can make the coe harder to maintian as change in the props structre require updates in multilpe components

to fix the problem of prop drilling
 
we are  using conpcept of context api
the context api is a powerful  feature in react that enables you to manages state across your application more effectively, especially when dealing with deeply nested somponets
without having to pass props down amnually at every level

console.log("")
*/