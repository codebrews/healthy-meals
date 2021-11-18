# F&uuml;&uuml;D 
### Recipe finder
#### Code Louisville JavaScript portfolio project
### Description:
Built with Express.js, this app finds recipes from [Spoonacular API](https://spoonacular.com/food-api) based on nutrition parameters. Specifically it searches for recipes that contain 50g+ of protein and no more than 800 calories. The data objects returned are displayed dynamically as recipe cards complete with links and pictures that will fetch and display more specific individual recipe details.
### Running The Project Locally:
In a command line, navigate to a directory where you'd like to clone the project and run the following commands.
```
git clone https://github.com/codebrews/recipe-finder.git
cd recipe-finder
npm install
npm install express
npm install axios
```
Copy key.txt into the private directory or obtain your own API key from [Spoonacular](https://spoonacular.com/food-api). and replace `fs.readFileSync('private/key.txt', 'utf-8');` with your key in line 7 of routes/index.js.
Finally, back in the terminal run `npm start` and navigate to `localhost:3000` in your browser. 
### CL Project Requirements Met:
- Responsive design - I used bootsrap
- Project on GitHub with over 5 commits.
- Readme
### CL 3+ Required Features:
1. Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX) 
    - I used axios in routes/index.js to get data from spoonacular.
2. Create a web server with at least one route and connect to it from your application using ExpressJS 
    - The routes are all in routes/index.js. One gets the recipe card data and sends it to index.pug to render as the recipe card page. This is also the app's home page. The other route calls a different end point and sends data to detail.pug to render specific recipe details.
3. Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value 
    - It's declared in routes/index.js, used in the first router.get to add to the response data then sent to render
### Additional Notes:
There is plenty of placeholder text and elements that are just placed as bootstrap practice. Enjoy the Bacon Ipsum and the Guy Fiery theme. Alas some of the links and all of the forms are placeholders too, but the recipe names and pics go to the respective recipe detail page. This is a separate route and api endpoint.  