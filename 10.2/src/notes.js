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
the context api provides a way to share values(state , functions , etc) between components without having to pass props down amnually at every level

The Context API is a feature in React that allows global state management by providing a way to pass data deeply through the component tree without having to pass props manually at every level.
In simple words:
Context lets you “broadcast” data to many components without prop drilling.

Before Context, we had to "prop drill" — pass data from a parent to a deeply nested child by forwarding it through each intermediate component, even if those intermediate components didn’t need the data.
This made the code less maintainable and more complex.
The Context API solves this problem by allowing components to subscribe to global data.
*/