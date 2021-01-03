export default [
  {
    title: "Reddit Clone",
    webUrl: "https://reddit-clone.com",
    gitUrl: "https://github.com/burnsco/reddit-clone-type-graphql",
    description: [
      {
        text:
          "As the title implies, this is a basic clone of reddit, created in order to learn a bunch cool libraries/technology I had wanted to check out for a while."
      },
      {
        text:
          "The front-end was built using react, hooks, apollo client, styled-components and styled-system. I love React, and hooks make it even better. Apollo seemed to be most gentle introduction to using graphql and styled-components/system makes designing your UI and writing CSS a lot more fun! (i.e. media queries using an array of values)"
      },
      {
        text:
          "The back-end was created using nodejs, express, apollo server and prisma to interface with the postgres db. Implemented my own authentication system (jwt) that uses refresh tokens (cookies) and does not store any user information in local storage. I added subscriptions for posts and comments, though I later discovered it was unnecessary as you can just add polling to your queries and achieve the same result. I was glad I did as it was quite a challenge and it would be useful if I choose add chat rooms at some point."
      }
    ],
    builtWith: [
      { title: "React", iconName: "react" },
      { title: "Styled Components", iconName: "styled" },
      { title: "Webpack", iconName: "webpack" },
      { title: "Babel", iconName: "babel" },
      { title: "Apollo", iconName: "apollo" },
      { title: "NodeJS", iconName: "nodejs" },
      { title: "PostgresQL", iconName: "postgres" },
      { title: "Graphql", iconName: "graphql" },
      { title: "JWT/Auth", iconName: "auth" },
      { title: "Docker", iconName: "docker" },
      { title: "Linux", iconName: "linux" },
      { title: "Google Cloud", iconName: "google" }
    ],
    video: "reddit"
  },
  {
    title: "UberEats Clone",
    webUrl: "https://quickeats-react.now.sh",
    gitUrl: "https://github.com/burnsco/quickeats-react",
    description: [
      {
        text:
          "My first project I made in order to learn firebase, styled components and redux."
      },
      {
        text: "A basic food ordering app, with a fake strip payment feature."
      }
    ],
    builtWith: [
      { title: "React", iconName: "react" },
      { title: "Redux", iconName: "redux" },
      { title: "SASS", iconName: "sass" },
      { title: "Firebase", iconName: "firebase" }
    ],
    videos: "quickeats"
  }
]
