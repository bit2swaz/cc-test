import React from "react";
import Dashboard from "./Dashboard";

// A mock user data object
const mockUser = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
  theme: "dark",
};

function App() {
  // 1. HARDCODED SECRET: This should be detected.
  const STRIPE_API_SECRET = "sk_test_51M...aVeryLongAndRandomString...3aB4cD";
  console.log("Using secret key:", STRIPE_API_SECRET);

  return (
    <div>
      <h1>Welcome to the Test App</h1>
      {/* 2. PROP DRILLING STARTS HERE: Passing 'user' to Dashboard */}
      <Dashboard user={mockUser} />
    </div>
  );
}

export default App;
