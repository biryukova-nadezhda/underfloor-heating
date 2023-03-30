/* const URL = 'https://jsonplaceholder.typicode.com/posts'; */

export const fetchFunc = (data, URL, func) => {
  fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => func(data));
}
