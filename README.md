It took me half day to setup [almost] empty environment for React app development with testing done using Mocha. 
I decided to share my findings here so it would remain. 

## My target
I wanted to create an environment for further React development. The things that I needed to have:

* source structure, that would be suitable for medium-sized project
* build scripts, that would do all needed transformations, run tests, show the output of my app
* Mocha as a test framework of choice 

For build scripts I prefer to use gulp.

## tl;dr
Download the code and run it: 

~~~
$npm install
~~~

followed by 

~~~
$npm test
~~~

If you are using Visual Studio Code - you can build it using `⇧⌘B` (on Mac).  

Whole story is in this [blog post](http://bebetterdeveloper.com/coding/getting-started-react-mocha.html).