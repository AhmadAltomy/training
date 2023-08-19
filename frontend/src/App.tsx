import "./App.css";
import AntDesignPage from "./Laith/AntDesign/AntDesignPage.tsx";
import ButtonContainer from "./Laith/hooks/useCallback.tsx";
import Timer from "./Laith/hooks/useEffect.tsx";
import ExpensiveComponent from "./Laith/hooks/useMemo.tsx";
import Counter2 from "./Laith/hooks/useState.tsx";
import PersonCard from "./PersonCard.tsx";

type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
};

const persons: Person[] = [
  {
    name: "John",
    age: 20,
    isEmployed: true,
  },
  {
    name: "Jane",
    age: 30,
    isEmployed: false,
  },
  {
    name: "Jack",
    age: 40,
    isEmployed: true,
  },
];

function App() {
  return (
    <div className="App">
      {/* AntDesign Components */}
      <AntDesignPage />
      {/* useMemo */}
      <ExpensiveComponent />
      {/* useState */}
      <Counter2 initialCount={1} />
      {/* useEffect */}
      <Timer />
      {/* useCallback */}
      <ButtonContainer />

      {persons.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
}

export default App;
