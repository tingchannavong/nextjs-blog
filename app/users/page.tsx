import ToggleText from "../components/ToggleText";
import { getUsers } from "./services/getUsers";

async function UsersPage() {

   const allUsers = await getUsers();

  if (!allUsers) {
    return <h1>No users found</h1>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h1>All users</h1>
        <ToggleText />
      <div className="grid grid-cols-3 gap-5">
      {
      allUsers.slice(0,5).map((user) => (
        <div key={user.id} className="border-2 p-2">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UsersPage;
