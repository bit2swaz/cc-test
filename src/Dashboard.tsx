import React from "react";
import UserProfile from "./UserProfile";

// This component receives 'user' but doesn't use it directly.
function Dashboard({
  user,
}: {
  user: { name: string; email: string; theme: string };
}) {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>This is the main dashboard area.</p>

      {/* PROP DRILLING CONTINUES: 'user' is passed down again */}
      <UserProfile user={user} />
    </section>
  );
}

export default Dashboard;
