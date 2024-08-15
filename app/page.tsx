// "use client";
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [data, setData] = useState(null);
//
//   useEffect(() => {
//     fetch('https://playwright.dev/api')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, [data]);
//
//   return <main>{data}</main>;
// }

export default async function Home() {
  const response = await fetch('https://playwright.dev/api');
  const data = await response.json();
  return <main>{data}</main>;
}
