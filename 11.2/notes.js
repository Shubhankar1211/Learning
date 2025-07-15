/*
a state management library for react that provides a way to manage global state with fine- grained control
recoil minimizes unnecessary rneders by only re-rendering components that depends on changed atoms 
the performance of a react app is measured by the number of re-renders. Each re- render is  expensive , you should aim to minimise it

key concepts in recoil 
atom: unit of state that can be read from and written to from any component
selectors : functions that derive state from stoms or other selectors, allowing for computed state

what is atom 
atoms are units of state that can be read from and written to form any component . when an atom's state changes. all components that subscribe to that atom will re -render

*/ 