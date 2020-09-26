//to divide the contributors to pages
export function divideToPages(resData, pageCount) {
  let start = 0;
  let pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(resData.slice(start, start + 5));
    start += 5;
  }
  return pages;
}
