export function getAllDogs() {
  return fetch('/dogs');
}

export async function getDogNumberTwo() {
  return fetch('/dogs/2');
}

export function postNewDog() {
  // Your code here
  const body = new URLSearchParams({
    name: 'doge',
    age: 16
  });
  return fetch('/dogs', { method: 'POST', body });
}

export function postNewDogV2(name, age) {
  // Your code here
  const body = new URLSearchParams({
    name,
    age
  });
  return fetch('/dogs', { method: 'POST', body });
}

export function deleteDog(id) {
  // Your code here
}
