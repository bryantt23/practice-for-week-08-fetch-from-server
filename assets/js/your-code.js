export async function getAllDogs() {
  // Your code here
  const url = '/api/dogs';
  const dogs = await fetch(url);
  const res = await dogs.json();
  return res;
}

export async function getDogNumberTwo() {
  // Your code here
  const url = '/';
  const dogs = await fetch(url);
  const res = await dogs.json();
  return res;
}

export function postNewDog() {
  // Your code here
}

export function postNewDogV2(name, age) {
  // Your code here
}

export function deleteDog(id) {
  // Your code here
}
