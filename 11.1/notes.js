/*
useState=> store a state variable ,re-render a component when the variable changes
useEffect=> Run an effect whenever a depedency changes
CustomHooks

this is a custom hook beacuse we are using use and if we have to make the custom hook we have to use the use key words

function useDebounce(){
cosnt[value,setvalue]=useSate()
return value
}


Custom hooks in react are a powerful festure that allows you to encapsulate and reuse stateful logic across differnet compontes 
they are esentially js functions that can use react hooks internally . by creating custom hooks, you can abstaract away complex logic , making ypur componetns cleaner and more manageable.

why use custom hooks 
Resussebility : if you find yourself using the smae logic in multiple components , a custom hook can help you avoid code duplication.
Seperation of concenrs : they allow you to seperate business logic from ui logic , making ypur components more focused and eseir to understand

common custom hooks -:
usefetch
usefetch eith re-fetching
useprov
useisonline
usedebounce


we cant create the fucntion which ar using state under the hooks that is why we callend them hooks










*/