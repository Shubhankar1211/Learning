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


*/