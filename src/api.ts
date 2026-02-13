export async function fetchData() {
  await setTimeout(() => {}, 5000);
  const data = await fetch(`${import.meta.env.BASE_URL}data.json`);
  await wait(2000);
  const res = await data.json();

  return res;
}

export async function fetchDataSingle() {
  const data = await fetch(`${import.meta.env.BASE_URL}data.json`);
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
