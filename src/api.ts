export async function fetchData() {
  await setTimeout(() => {}, 5000);
  const data = await fetch("/data.json");
  await wait(2000);
  const res = await data.json();

  return res;
}

function wait(time: number) {
  return new Promise((res) => {
    setTimeout(() => {
      res("finished");
    }, time);
  });
}
