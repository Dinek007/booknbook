# BooknBook - A Simple React Book Search App

Welcome to the BooknBook project! This is a simple React web application that allows users to search for books using the Google Books API.
[Application Homepage](https://booknbook.netlify.app/)

## Installation

To run this application on your local machine, follow these steps:

Clone this repository to your local machine using Git:

```bash
git clone <repository_url>
```
Navigate to the project directory:

```bash
cd booknbook
```
Install the project dependencies:

```bash
npm install
```
Run the application in development mode:

```bash
npm run dev
```

To run the unit tests for this application, you can use the following command:

```bash
npm test
```
Runs ESLint to analyze the code for errors and rule compliance.
```bash
npm run lint
```

## Technologies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Statically typed superset of JavaScript.
- **Material-UI**: React UI framework for building attractive and responsive user interfaces.
- **Redux**: State container for JavaScript applications that helps manage the state of an application in a consistent and organized way.
- **Redux-Saga**: Middleware library for Redux that provides an elegant and efficient way to handle side effects, such as asynchronous actions and data fetching, in Redux-based applications.
- **Jest**: JavaScript testing framework.
- **React Testing Library**: Testing library for React applications.
- **Vite**: Fast, modern frontend build tool.

## Project Structure

`src/pages`: Contains main pages as React components, in this case only one, but it's designed with the idea of expansion and a larger project in mind.

`src/components`: Contains React components used in the application and unit tests for them.

`src/redux`:  It contains a Redux Store where the entire application state is stored and the structure of Redux-Saga responsible for asynchronous operations, such as communication with the Google API. I have applied the following organization: in the main folder, there are configuration files, and in subfolders, various parts of the store (in this case, for a smaller application, only 'books') where you can find reducers with actions, selectors, and Redux-Sagas associated with actions from that part of the store.

`src/theme`: Global project styles using the Material UI library include color palettes for text and background, text variants, and other styles for components like text areas and buttons.

## Testing

The application includes unit tests for React components, as well as for store files. They are located together with the files.