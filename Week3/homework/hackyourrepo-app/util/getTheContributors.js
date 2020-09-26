import { printTheContributors } from './printTheContributors.js';
// the function to get the contributors
export async function getTheContributors(urlC) {
  const response = await axios.get(urlC);
  printTheContributors(response.data);
}
