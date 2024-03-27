# [Technical test - nata.house](https://www.notion.so/Technical-test-nata-house-b41bd08b949d4cf194a18322b28bf09b)

## Introduction

Congratulations! 🎉You've made it past our initial recruitment requirements. This means we think you have the qualifications to be a good fit for a developer at [nata.house](https://natahouse.com). We want you to both step out of your comfort zone and excel in applying your current knowledge in different parts of a modern development stack.

We understand your time is limited, so we expect you to leverage libraries and frameworks you're familiar with to help speed up your development. Invest the time you have, and prioritize core functionality over bells and whistles. We understand it's our responsibility as a company to provide feedback to every developer submitting an application, even if you don't advance to the next step in our hiring process.

## So what's the challenge?

> Develop a JavaScript application that displays how many stops are necessary to complete a journey while traveling in fictional outer space.

Using the Star Wars API available at [https://swapi.co/](https://swapi.co/), your application must return, for a given user-inputted distance in mega lights (MGLT), how many stops each ship has to make in order to complete a journey.

All the necessary information to complete this task is available on the linked website, which contains the API documentation. The following is an example with the **correct** response when the user inputs a distance of 1,000,000 (one million) mega lights:

```
Millennium Falcon: 9
Y-wing: 74
...
Rebel Transport: 11
...
```

## That's it?

Yes! There are no requirements as to how this data should be displayed, or which frameworks you should use. It might seem like this test is missing some key information, but the point is to evaluate how you deal with this exact specification.

And have fun! 💃This shouldn't be a chore. Be creative and showcase your abilities. Follow the specifications and don't be afraid to ask questions. We're here to help, and love it when candidates share our enthusiasm for programming.

## Solution

The challenge was to determine the number of stops each starship would need to make to restore supplies given a specific distance to travel. The solution utilises the Star Wars API. This provides all the relevant information required to make this calculation.

Calculation: ( MGLT Input by User / ( Starship MGLT * ( Starship Consumables converted to hours) ) )

As the collection of starships is provided over a number of seperate pages, I decided to call and displayed the response asynchronously.

In addition, I have included a number of unit tests within the project. These will verify the behavior of the code in response to standard, boundary, and incorrect cases of input data.

I have also included tests to verify that the URL supplied returns a successful response and to validate the calculation of number of stops required.