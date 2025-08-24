/*

npx tsc --init is used for creating compiler for type script

npx convert it into js


some tsconfig things that we have to alsways add in our files


target -: the target option in a tsconfig file specifices the ecma script target version to which the ts compiler will complie the ts code
rootdir -: where should the compiler look for ts files. good practise is for this to be the src folder
otdir -: where should the complier look for spit out the js files
noimplicityAny -: When noImplicitAny is enabled, TypeScript will throw an error if it cannot infer a type for a variable, function parameter, or return value, and would otherwise default to the any type.
                  This helps catch cases where you did not explicitly declare a type, and TypeScript is forced to use any, which disables type safety.
                  It encourages you to provide explicit type annotations, making your code more robust and less error-prone.



removeComments -: weather or not to include commnets in the final js file

these are some interview question 

Interfaces
What is an interface in TypeScript and how do you use it?

How does an interface differ from a type alias?

Can an interface extend another interface? Give an example.

Can a class implement multiple interfaces? How?

What happens if an object does not implement all properties of an interface?




Types
What is a type alias in TypeScript? Provide an example.

How do type and interface differ in TypeScript?

When would you use a type alias instead of an interface?

Can a type alias extend another type or interface?

What are union and intersection types in TypeScript? Give use cases.





Classes
How do you declare a class in TypeScript? Show syntax with a constructor and method.

How do access modifiers (public, private, protected) work in TypeScript classes?

What are abstract classes in TypeScript? How are they different from interfaces?

How does TypeScript support inheritance?

What is a readonly property in a class and how do you declare it?

What are static members in TypeScript classes?

How can you use getter and setter (accessor) functions in classes?

*/