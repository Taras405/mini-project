const BASE_URL = "http://localhost:3000/";

const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  console.log(res);
  return res.json();
};

const getUsersById = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (res.ok) { // 200
    return res.json();
  }
  throw new Error(res.name);
};

const saveUser = async (user) => {
  const url = `${BASE_URL}/users/`;
  const options = {
    mathod: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application-json",
    },
  };

  const res = await fetch(url, options);
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.name);
};

const replaceUser = async (id, data) => {
  const url = `${BASE_URL}/users/${id}`;
  const options = {
    mathod: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application-json",
    },
  };

  const res = await fetch(url, options);
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.name);
};

const editUser = async (id, data) => {
  const url = `${BASE_URL}/users/${id}`;
  const options = {
    mathod: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application-json",
    },
  };

  const res = await fetch(url, options);
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.name);
};

const deleteUser = async (id) => {
  const url = `${BASE_URL}/users/${id}`;
  const options = {
    mathod: "DELETE",
  };

  const res = await fetch(url, options);
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.name);
};
