/*
a state management library for react that provides a way to manage global state with fine- grained control
recoil minimizes unnecessary rneders by only re-rendering components that depends on changed atoms 
the performance of a react app is measured by the number of re-renders. Each re- render is  expensive , you should aim to minimise it

key concepts in recoil 
atom: unit of state that can be read from and written to from any component
selectors : functions that derive state from stoms or other selectors, allowing for computed state

what is atom 
atoms are units of state that can be read from and written to form any component . when an atom's state changes. all components that subscribe to that atom will re -render


agar parent component re-render ho raha h to uske children bhi re -render honge which is one of the down sode of it to over come this we use consept of memo
memo



create  a glaobal atom and create the colector from these atoms and do not acess atom directily if things changes, selct selsctor only it will not re-render if the atom changes this help in miinimize re-renders
a selector represents a piece of derived state . you can thing of derived state as the output of passing state to a pure function that derives a new value from said state.
Derived state is a powerful consespt beacuse it lets us build dynamic data that depends on ohter data

*/ 