const baseURL = import.meta.env.VITE_BASE_URL;

export async function getTodos(fiter) {
  const url = new URL(baseURL + "/todos");
  const query = {};
  const queryList = Object.entries(fiter);
  queryList.forEach(([key, value]) => {
    if (value !== "") {
      query[key] = value;
    }
  });
  if (Object.keys(query).length > 0) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  const req = await fetch(url.href);

  if (req.status === 200) {
    const result = await req.json();
    return result.data;
  } else {
    throw new Error("Hatolik bo'ldi ");
  }
}

export async function addTodo(todo) {
  const req = await fetch(baseURL + "/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (req.status === 200) {
    const result = await req.json();
    return result;
  } else {
    throw new Error("Hatolik bo'ldi ");
  }
}

export async function deleteTodo(id) {
  const req = await fetch(baseURL + "/todos/" + id, {
    method: "DELETE",
  });
  if (req.status === 200) {
    return id;
  } else {
    throw new Error("Hatolik bo'ldi ");
  }
}
