import { useEffect, useState } from "react";
import UserCard from "./Usercard";
import Usermodal from "./Usermodal";

function Userlists() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  function selectUser(user) {
    setSelectedUser(user);
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(function (item) {
          return (
            <div
              key={item}
              className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200"></div>
              <div className="mx-auto mb-3 h-5 w-32 rounded bg-gray-200"></div>
              <div className="mx-auto h-24 w-48 rounded bg-gray-200"></div>
            </div>
          );
        })}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
        <p className="font-semibold">Something went wrong</p>
        <p className="mt-1 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => selectUser(user)}/>
        );
      })}
      {showModal && (
        <Usermodal selectedUser={selectedUser} onClose={closeModal} />
      )}
    </div>
  );
}

export default Userlists;
