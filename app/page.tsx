async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const posts = await getData();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Server Side Rendering Example</h1>
      {posts.slice(0, 5).map((post: any) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}