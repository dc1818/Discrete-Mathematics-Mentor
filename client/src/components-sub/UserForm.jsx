import { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    userid: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    state: -1,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      alert("User created successfully!");
      setUser({
        userid: "",
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        country: "",
        stat: -1,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userid"
        value={user.userid}
        onChange={handleChange}
        placeholder="User ID"
        required
      />
      <input
        type="text"
        name="firstname"
        value={user.firstname}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="country"
        name="country"
        value={user.country}
        onChange={handleChange}
        placeholder="country"
        required
      />
      <input
        type="state"
        name="state"
        value={user.email}
        onChange={handleChange}
        placeholder="state"
        required
      />

      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
