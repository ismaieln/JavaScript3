// sort the data alphabetical
export function toSortData(res) {
  let newRes;
  return (newRes = res.sort((a, b) => {
    const aA = a.name.toUpperCase();
    const bB = b.name.toUpperCase();
    if (aA < bB) {
      return -1;
    }
    if (aA > bB) {
      return 1;
    }
    return 0;
  }));
}
