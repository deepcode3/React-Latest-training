import Button from "./Button";
import Card from "./Card";
import List from "./List";
import Student from "./Student";
import UserGreeting from "./Usergreeting";

function App() {
  const fruits = [
    {
      id: 1,
      name: "apple",
      calories: 95,
    },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 185 },
    { id: 4, name: "watermelon", calories: 32 },
  ];
  const vegetables = [
    {
      id: 1,
      name: "carrot",
      calories: 95,
    },
    { id: 2, name: "onion", calories: 45 },
    { id: 3, name: "brinjal", calories: 185 },
    { id: 4, name: "carrot", calories: 32 },
  ];

  return (
    <>
      {/* <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} /> 
      <UserGreeting isLoggedIn={false} userName="Brianjal" />*/}
      {fruits.length > 0 ? <List items={fruits} category="fruits" /> : null}
      {/* short circuting -if no data then doesnt display anything */}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables" />
      )}
    </>
  );
}

export default App;
