const removeItem = async (link, data) => {
  let reqopt = {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  let result = await fetch(`http://127.0.0.1:8000/${link}`, reqopt);

  let response = await result.json();
  return response.message;
};

export default removeItem;
