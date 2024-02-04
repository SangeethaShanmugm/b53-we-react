import "./App.css";

export default function App() {
  //JS starts
  // const name = "Raja";
  // const name1 = "Dinesh";
  const people = ["Raja", "Dinesh", "Babu"]; //Array of string
  const user = [
    {
      name: "Raja",
      age: "20",
    },
    {
      name: "Dinesh",
      age: "22",
    },
    {
      name: "Babu",
      age: "25",
    },
  ];
  //JS ends
  //JSX starts
  return (
    <div className="App">
      {user.map((usr) => (
        <Welcome nm={usr.name} ag={usr.age} />
      ))}
      {/* {people.map((person) => (
        <Welcome name={person} />
      ))} */}
      {/* <Welcome name="Raja" age="20" />
      <Welcome name="Dinesh" age="22" />
      <Welcome name="Babu" age="25" /> */}
    </div>
  );
  //JSX ends
}

function Welcome({ nm, ag }) {
  return (
    <h1>
      Hello Everyone by {nm} -{ag} 😆😆😆
    </h1>
  );
}

//JSX  => Javascript XML
//class => reserved keyword
//{} => template syntax
//custom component
// 1. First letter should be capital
// 2. It should return JSX
