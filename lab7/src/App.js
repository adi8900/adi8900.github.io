import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import CounterWithReducer from './components/Reducer';
import FetchData from './components/Fetch';
import FocusInput from './components/FocusInput';
import ThemedComponent from './components/ThemedComponent';
import { ThemeProvider } from './ThemeContext';
import './styles.css';

const App = () => {
  return (
    <ThemeProvider>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-6">React Hooki i Komponenty</h1>

    <div className="space-y-4">
    <Greeting name="Adrian" />
    <Greeting name="Kasia" />
    <Greeting name="Tomek" />
    </div>

    <hr className="my-6 border-t-2 border-gray-300 dark:border-gray-700" />

    <section className="space-y-6">
    <h2 className="text-xl font-semibold">Counter (useState)</h2>
    <Counter />

    <h2 className="text-xl font-semibold">Counter z Reducer (useReducer)</h2>
    <CounterWithReducer />

    <h2 className="text-xl font-semibold">Fetch Data (useEffect)</h2>
    <FetchData />

    <ThemedComponent />

    <h2 className="text-xl font-semibold">Focus Input (useRef)</h2>
    <FocusInput />
    </section>
    </div>
    </div>
    </ThemeProvider>
  );
};

export default App;
