import React from "react";

// This component finally uses the 'user' prop that was passed down.
function UserProfile({ user }: { user: { name: string; email: string } }) {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
