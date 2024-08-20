import React from "react";
import Header from "./components/Header";
import Div from "./components/Div";
import TextField from "./components/TextField";

const _formData = {
  firstName: "",
  lastName: "",
  middleName: "",
};

function App() {
  const [title, setTitle] = React.useState("React & Vite FTW!");
  const [formData, setFormData] = React.useState(_formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // get value and name from the event target
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Div>
      <Header
        title={title}
        age="20"
        footerTitle="Top Footer"
        handleClick={(value) => {
          console.log(value);
          setTitle("New Title");
        }}
      >
        Nikaongeza kitu
      </Header>
      <div className="flex flex-col md:flex-row gap-4">
        <TextField
          label="First Name"
          name="firstName"
          handleChange={handleChange}
        />

        <TextField
          label="Middle Name"
          name="middleName"
          handleChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          handleChange={handleChange}
        />
      </div>
      {JSON.stringify(formData, null, 4)}
    </Div>
  );
}

export default App;
