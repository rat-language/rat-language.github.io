import React from 'react';
import { Grid, Paper, Typography, Box, Divider, Link, List, ListItem, ListItemText, Chip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import theme from '../../theme';

function LanguageSpecification() {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h2" align="center" gutterBottom marginTop={theme.spacing(10)}>
        RAT: A Language That's More Than Just Cheese
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Paper elevation={6} sx={{ p: 3, mt: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom>
          Introduction: Escaping the Snake Pit
        </Typography>
        <Typography paragraph>
          In the beginning, there was Python, and it was good—except when it wasn't fast enough. Enter RAT, born from a desire to combine Python's readability with the speed of a caffeinated cheetah on a skateboard. Unlike in the natural world, in the jungle of programming, this RAT is no prey; it's a predator on a pixelated prowl.
        </Typography>
        <Typography paragraph>
          RAT excels in domains where performance is critical, such as high-frequency trading, gaming engines, and complex simulations. By leveraging a static type system and a compiled implementation, RAT scurries circles around Python in terms of raw speed.
        </Typography>
        <Typography paragraph>
          But RAT isn't just about speed. It's also about making coding fun again. With sleek syntax, cheeky keywords, and features that make you feel like you're coding in the future, RAT is the go-to language for developers who enjoy their code with a side of whimsy.
        </Typography>
      </Paper>

      <Paper elevation={6} sx={{ p: 3, mt: 4, backgroundColor: '#e0f7fa' }}>
        <Typography variant="h4" gutterBottom>
          Deep Dive: The Guts of the RAT
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <>
                  VALUES & TYPES: More Flavors Than Your Local Ice Cream Shop
                  <Chip label="Enhanced" color="primary" size="small" sx={{ ml: 1 }} />
                </>
              }
              secondary={
                <>
                  <Typography paragraph>
                    RAT supports all the basic types you'd expect, like <code>int</code>, <code>float</code>, <code>str</code>, and <code>bool</code>. But why stop there? RAT also offers <code>char</code>, <code>byte</code>, and <code>long</code> for those times when you need to get low-level.
                  </Typography>
                  <Typography paragraph>
                    But the real magic happens with RAT's collection types. Arrays and dictionaries can hold any type, including other collections. Imagine a world where you can have an array of dictionaries, each containing arrays of custom types. In RAT, that world is a reality.
                  </Typography>
                  <SyntaxHighlighter language="rat" style={atomDark}>
                    {`[{str:int}] x = [{"a":1, "b":2}, {"c":3, "d":4}];
type Person = {str name, int age};
[Person] people = [{"Alice", 30}, {"Bob", 25}];`}
                  </SyntaxHighlighter>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  DECLARATIONS: Name It and Claim It
                  <Chip label="Enhanced" color="primary" size="small" sx={{ ml: 1 }} />
                </>
              }
              secondary={
                <>
                  <Typography paragraph>
                    In RAT, if you name something, you better mean it. Variables and functions aren't just declared; they're unleashed.
                  </Typography>
                  <Typography paragraph>
                    Variables are block-scoped and can be declared as <code>const</code> or <code>var</code>. Functions can take zero or more parameters, and even support default values and variadic arguments.
                  </Typography>
                  <SyntaxHighlighter language="rat" style={atomDark}>
                    {`const x = 10;
var y = "mutable";

func add(a:int, b:int=20, ...rest:int) -> int {
  var sum = a + b;
  for v in rest { sum += v; }
  return sum;
}
`}
                  </SyntaxHighlighter>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="EXPRESSIONS: The Art of RAT"
              secondary={
                <>
                  <Typography paragraph>
                    RAT's expressions are like a painter's brush strokes - each one adding to the masterpiece that is your code.
                  </Typography>
                  <Typography paragraph>
                    In addition to the usual suspects like arithmetic, comparison, and logical operators, RAT throws in a few extras to keep things interesting. Ternary conditionals, increment/decrement operators, and even list comprehensions - they're all here, and they're all beautiful.
                  </Typography>
                  <SyntaxHighlighter language="rat" style={atomDark}>
                    {`var x = a > b ? a : b;
var y = [for v in 1...100 if v % 2 == 0 => v * v];
var z = x++ + --y;`}
                  </SyntaxHighlighter>
                </>
              }
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={6} sx={{ p: 3, mt: 4, backgroundColor: '#fffde7' }}>
  <Typography variant="h4" gutterBottom>
    Laughably Good Examples
    <Chip label="Enhanced" color="primary" size="small" sx={{ ml: 1 }} />
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" gutterBottom>Hello World</Typography>
      <SyntaxHighlighter language="rat" style={atomDark}>
        {`print("Hello, World!");`}
      </SyntaxHighlighter>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Yes, we too have this obligatory rite of passage. But in RAT, even Hello World has a certain charm, don't you think?
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" gutterBottom>FizzBuzz</Typography>
      <SyntaxHighlighter language="rat" style={atomDark}>
        {`for i in 1...101 {
  var out = "";
  if i % 3 == 0 { out += "Fizz"; }
  if i % 5 == 0 { out += "Buzz"; }
  print(out != "" ? out : i);
}`}
      </SyntaxHighlighter>
      <Typography variant="body2" sx={{ mt: 1 }}>
        If FizzBuzz crashes your party, RAT handles it like a champ, sorting out who's Fizz and who's Buzz.
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" gutterBottom>Fibonacci</Typography>
      <SyntaxHighlighter language="rat" style={atomDark}>
        {`func fib(n:int) -> int {
  if n <= 1 { return n; }
  return fib(n-1) + fib(n-2);
}`}
      </SyntaxHighlighter>
      <Typography variant="body2" sx={{ mt: 1 }}>
        RAT makes recursion as easy as 1, 1, 2, 3, 5, 8, 13...
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" gutterBottom>Quicksort</Typography>
      <SyntaxHighlighter language="rat" style={atomDark}>
        {`func quicksort(arr:[int]) -> [int] {
  if len(arr) < 2 { return arr; }
  const pivot = arr[0];
  const less = [for v in arr[1:] if v <= pivot => v];
  const greater = [for v in arr[1:] if v > pivot => v];
  return [...quicksort(less), pivot, ...quicksort(greater)];
}`}
      </SyntaxHighlighter>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Sorting algorithms in RAT are as smooth as a rat slipping through a maze. Quicksort never looked so sleek!
      </Typography>
    </Grid>
  </Grid>
</Paper>


<Paper elevation={6} sx={{ p: 3, mt: 4, backgroundColor: '#f3e5f5' }}>
  <Typography variant="h4" gutterBottom>
    Why RAT? A Tail of Innovation
  </Typography>
  <Typography paragraph>
    RAT isn't just another programming language; it's a whole new way of thinking about code. Here are a few reasons why RAT stands out from the pack:
  </Typography>
  <Grid container spacing={8}>
    <Grid item xs={12} md={6}>
      <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>Asynchronous Awesomeness</Typography>
        <Typography paragraph>
          RAT makes asynchronous programming a breeze with its built-in <code>async</code>/<code>await</code> syntax and Promises. No more callback hell or confusing code - just clean, concise asynchrony.
        </Typography>
        <SyntaxHighlighter language="rat" style={atomDark}>
          {`async func fetchData(url:str) -> str^ {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}`}
        </SyntaxHighlighter>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>Fearless Concurrency</Typography>
        <Typography paragraph>
          With RAT's actor-based concurrency model, you can write concurrent code without fear of race conditions or deadlocks. Actors communicate via message passing, ensuring thread safety and scalability.
        </Typography>
        <SyntaxHighlighter language="rat" style={atomDark}>
          {`actor Counter {
  var count = 0;
  func increment() { count += 1; }
  func get() -> int { return count; }
}

const counter = spawn Counter();
counter ! increment();
print(counter ! get());`}
        </SyntaxHighlighter>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Metaprogramming Magic</Typography>
        <Typography paragraph>
          RAT's powerful metaprogramming capabilities let you write code that writes code. With macros and compile-time function execution, you can create domain-specific languages, automate repetitive tasks, and build libraries that feel like native language features.
        </Typography>
        <SyntaxHighlighter language="rat" style={atomDark}>
          {`macro define_enum(name, ...values) {
  return quote {
    enum \{name} { \{...values} }
    func str(v:\{name}) -> str {
      return match v {
        \{for value in values => \{value} => "\{value}",}
      };
    }
  };
}

define_enum(Color, Red, Green, Blue);
const c = Color.Green;
print(str(c));`}
        </SyntaxHighlighter>
      </Paper>
    </Grid>
  </Grid>
  <Typography paragraph sx={{ mt: 2 }}>
    These are just a few of the ways RAT innovates upon traditional programming paradigms. With its expressive syntax, robust type system, and performance-oriented design, RAT is the ultimate language for developers who want to push boundaries and think outside the cage.
  </Typography>
</Paper>

<Paper elevation={6} sx={{ p: 3, mt: 4, backgroundColor: '#e8f5e9' }}>
  <Typography variant="h4" gutterBottom>
    RAT's Toolbox: Everything You Need to Succeed
  </Typography>
  <Typography paragraph>
    RAT isn't just a language; it's a complete toolkit for building robust, high-performance applications. From development to deployment, RAT has you covered with a wide range of tools and libraries.
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} md={4}>
      <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>RATpack: The Build Tool</Typography>
        <Typography paragraph>
          RATpack is RAT's official build tool and package manager. With RATpack, you can easily manage dependencies, configure builds, and run tests, all with a simple, declarative syntax.
        </Typography>
        <SyntaxHighlighter language="rat" style={atomDark}>
          {`# RATpack.toml
[package]
name = "my-app"
version = "1.0.0"

[dependencies]
http = "2.5.1"
json = "4.2.0"

[scripts]
test = "ratpack test"
build = "ratpack build"`}
        </SyntaxHighlighter>
      </Paper>
    </Grid>
    <Grid item xs={12} md={4}>
      <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>RAThole: The REPL</Typography>
        <Typography paragraph>
          RAThole is RAT's interactive shell and REPL (Read-Eval-Print Loop). With RAThole, you can quickly test out code snippets, prototype ideas, and explore APIs, all without leaving your terminal.
        </Typography>
        <SyntaxHighlighter language="rat" style={atomDark}>
          {`$ rathole
> let x = 10
> let y = 20
> x + y
30
> func square(n:int) -> int { return n * n; }
> square(5)
25`}
        </SyntaxHighlighter>
      </Paper>
    </Grid>
    <Grid item xs={12} md={4}>
      <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
        <Typography variant="h6" gutterBottom>RATnet: The Web Framework</Typography>
        <Typography paragraph>
          RATnet is a high-performance web framework built on top of RAT. With RATnet, you can build scalable web services and APIs with minimal boilerplate and maximum flexibility.
        </Typography>
        <SyntaxHighlighter language="rat" style={atomDark}>
          {`import ratnet

const app = ratnet();

app.get("/hello/:name") { req =>
  return "Hello, \{req.params.name}!";
}

app.run(":8080");`}
        </SyntaxHighlighter>
      </Paper>
    </Grid>
  </Grid>
  <Typography paragraph sx={{ mt: 8 }}>
    These are just a few of the tools in RAT's ever-expanding ecosystem. Whether you're building a command-line utility, a microservice, or a full-fledged web application, RAT has the libraries and frameworks you need to get the job done quickly and efficiently.
  </Typography>
  <Typography paragraph>
    And with a vibrant community of developers constantly creating new tools and sharing best practices, you'll never feel alone in your journey with RAT. Join the colony and experience the power of RAT today!
  </Typography>
</Paper>
      <Paper elevation={6} sx={{ p: 3, mt: 2, backgroundColor: '#ffebee' }}>
        <Typography variant="h4" gutterBottom>
          Join the RAT Race
        </Typography>
        <Typography paragraph>
          Ready to take the leap from Pythonic pleasantries to the rapid realms of RAT? Check out our formal specification <Link href="/src/rat.ohm" underline="hover">here</Link> and join the ranks of developers who know how to have a good time while being serious about code.
        </Typography>
      </Paper>
    </Box>
  );
}

export default LanguageSpecification;
