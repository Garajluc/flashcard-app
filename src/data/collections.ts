import type { CollectionsWithId, FlashCardsWithId } from './types';

export const react_collection: FlashCardsWithId = [
  {
    id: '1',
    question: 'What is JSX?',
    answer:
      'JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React "elements".',
  },
  {
    id: '2',
    question: 'Can web browser read JSX?',
    answer: `No, web browser can only read JavaScript objects, but JSX is not a regular JavaScript object. 
    For web browser to read JSX, we need to transform JSX into a JavaScript object using transformers like Babel.`,
  },
  {
    id: '3',
    question: 'What is Virtual DOM?',
    answer: `The Virtual DOM is lightweight in-memory representation of Real DOM. 
    When the state of an element changes, the virtual DOM changes only that object in real DOM, rather than updating the whole DOM.`,
  },
  {
    id: '4',
    question: 'What are Components?',
    answer: `Component is a building block of React application. 
    It splits the UI into independent, reusable pieces that can be processed separately. 
    We define two types of components in React: Functional Component & Class Component.`,
  },
  {
    id: '5',
    question:
      'What is the difference between Functional Component & Class Component?',
    answer: `Functional Components are stateless components and are defined as JavaScript functions.
    Class Components are stateful components and can hold and manage their own state.`,
  },
  {
    id: '6',
    question: 'What is a higher-order component (HOC)?',
    answer: `A higher-order component acts as a container for other components. 
    This helps in reusing the component logic.`,
  },
  {
    id: '7',
    question: 'Explain lifecycle of component',
    answer: `Class Component: getInitialState(); componentDidMount(); shouldComponentUpdate(); componentDidUpdate(); componentWillUnmount();
    General Definition: Mount; Update; Unmount;`,
  },
  {
    id: '8',
    question: 'What are Hooks in React?',
    answer: `Hooks are functions that let you “hook into” React state and lifecycle features from function components.`,
  },
  {
    id: '9',
    question: 'What hooks do we use and for what?',
    answer: `useMemo() - to memoize the value of a function; 
    useCallback() - to memoize the function itself; 
    useEffect() - to perform side effects; 
    useState() - to manage state;`,
  },
  {
    id: '10',
    question: 'List some of the React design patterns.',
    answer: `Presentational & Container Components; 
    Render Callback/Props Pattern; 
    Higher-Order Component; 
    Compound Component;
    State Reducer;
    Provider Pattern;
    Hooks Pattern;`,
  },
  {
    id: '11',
    question: 'Explain Presentational & Container Components Pattern',
    answer: `Presentational components can be pure functions which are responsible for the UI, 
    whereas container components are responsible for the state and data of the application.`,
  },
  {
    id: '12',
    question: 'Explain HOC Pattern',
    answer: `Higher Order Component design pattern is a pattern used to share common functionality between components without repeating code.`,
  },
  {
    id: '13',
    question: 'Explain State Reducer Pattern',
    answer: `State Reducer Pattern implement usage of useReducer hook. The approach is following: 
    create reducer with action types; create dispatcher custom hook with useReducer;`,
  },
  {
    id: '14',
    question: 'Explain Provider Pattern',
    answer: `Is used to share global data across multiple components`,
  },
];

export const docker_collection: FlashCardsWithId = [
  {
    id: '1',
    question: 'Example Question',
    answer: 'Example Answer 1',
  },
];

export const collections: CollectionsWithId = [
  {
    id: '1',
    category_id: 'react-interview-questions',
    category_name: 'React Interview Questions',
    flashcards: react_collection,
  },
  {
    id: '2',
    category_id: 'docker',
    category_name: 'Docker',
    flashcards: docker_collection,
  },
];
