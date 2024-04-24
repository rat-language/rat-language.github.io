import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, styled } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExampleCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const CodeExampleImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  objectFit: 'cover',
}));

const CodeExampleTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const CodeExampleDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  // maxHeight: '200px',
  // overflow: 'auto',
}));

const CodeExamplesSection = () => {
  const codeExamples = [
    //EXPEREMENTING
    // {
    //   title: 'Experimenting',
    //   description: 'A simple "Hello, World!" program in Rat-language.',
    //   code: `print("Hello, World!");`,
    //   image: 'path/to/hello-world-image.jpg',
    // },




    //FIBONACCI
    {
      title: 'Fibonacci Sequence',
      description: 'Generating the Fibonacci sequence in MyLanguage.',
      code: `int fib(n:int){
        # returns the nth value of the fibonacci sequence
        var a:int = 0;
        var b:int = 1;
        var c:int = 0;
    
        if (n == 0){
            return a;
        }
        for i in 2...n {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }`,
      image: 'path/to/fibonacci-image.jpg',
    },

    //FACTORIAL
    {
        title: 'Factorial',
        description: 'Computing Factorials Rat-language.',
        code: `int factorial(n:int){
          var value: int = 1;
          if (n != 0 && n != 1){
              for i in 2...n {
                  value *= i;
              }
          }
          return value;
      }
      
      print(factorial(5));
  }`,
        image: 'path/to/factorial-image.jpg',
      },

  
    //PRIME
    {
      title: 'Prime Number Checker',
      description: 'A function to check if a number is prime in Rat-language.',
      code: `bool prime(n:int){
        if (n <= 1) { return false; }
        if (n <= 3) { return true; }
        if (n % 2 == 0) || (n % 3 == 0) { return false; }
        var i:int = 5;
        while i*i <= n {
          if (n%i==0) || (n%(i+2) ==0) {
              return false;
            }
            i += 6;
        }
        return true;
    }`,
      image: 'path/to/prime-image.jpg',
    },

    //CALL
    {
      title: 'Call',
      description: 'A call to a function in Rat-language.',
      code: `int sqr(x: int) {return (x * x);}
      print(sqr(3) + 1);`,
      image: 'path/to/call-image.jpg',
    },
    

    //HELLO WORLD
    {
      title: 'Hello World',
      description: 'A simple "Hello, World!" program in Rat-language.',
      code: `print("Hello, World!");`,
      image: 'path/to/hello-world-image.jpg',
    },
    

    //OPTIONAL
    {
      title: 'Optional',
      description: 'Optional type in Rat-language.',
      code: `var x:int? = no int; x = some 100;`,
      image: 'path/to/optional-image.jpg',
    },

    //FIZZBUZZ
    {
      title: 'FizzBuzz',
      description: 'FizzBuzz program in Rat-language.',
      code: `void fizzbuzz(n:int){
        for i in 0...n {
          var fbnum:str = "";
          if ((i % 3==0) || (i % 5 == 0)){
            if (i % 3 == 0){ fbnum += "Fizz"; }
            if (i % 5==0){ fbnum += "Buzz"; }
          }else{fbnum = str(i);}
          print(fbnum);
        }
      }
      
      # prints fizzbuzz up to 16 in this case
      fizzbuzz(16);`,
      image: 'path/to/fizzbuzz-image.jpg',
    },
    


    //WHILELOOPTEST
    {
      title: 'While Loop',
      description: 'A simple while loop in Rat-language.',
      code: `var i:int = 0;
      while (i <= 10){
        print(i);
        i += 1;
      }`,
      image: 'path/to/wile-loop-image.jpg',
    },   

    
    // Add more code examples
  ];

  return (
    <Box>
      <Grid container spacing={4}>
        {codeExamples.map((example, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CodeExampleCard>
              <CardContent>
                <CodeExampleTitle variant="h6">{example.title}</CodeExampleTitle>
                <CodeExampleDescription>{example.description}</CodeExampleDescription>
                <StyledCardContent>
                <SyntaxHighlighter language="javascript" style={atomDark} >
                  {example.code}
                </SyntaxHighlighter>
                </StyledCardContent>
              </CardContent>
            </CodeExampleCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CodeExamplesSection;