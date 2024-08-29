import React, { useState } from "react";
import { Typography, Tooltip } from "@mui/material";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "") {
      setError("Please fill in both fields before submitting.");
    } else {
      setSubmittedName(`${firstName} ${lastName}`);
      setError("");
    }
  };

  return (
    <div class="App">
      <Typography variant="h4">Full Name Display</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <span>First Name: </span>
          <Tooltip
            title={firstName.trim() === "" ? "Fill out this field" : ""}
            placement="right"
            open={firstName.trim() === ""}
          >
            <input
              label="First Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ margin: "0.5rem" }}
              error={firstName.trim() === ""}
            />
          </Tooltip>
        </div>
        <div>
          <span>Last Name: </span>
          <Tooltip
            title={lastName.trim() === "" ? "Fill out this field" : ""}
            placement="right"
            open={lastName.trim() === ""}
          >
            <input
              label="Last Name"
              type="text"
              variant="outlined"
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={lastName.trim() === ""}
              style={{ margin: "0.5rem" }}
            />
          </Tooltip>
        </div>

        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <button type="submit" variant="contained" color="primary">
          Submit
        </button>
      </form>
      {submittedName && (
        <Typography
          variant="h5"
          color="textPrimary"
          style={{ marginTop: "20px" }}
        >
          Full Name: {submittedName}
        </Typography>
      )}
    </div>
  );
}

export default App;
