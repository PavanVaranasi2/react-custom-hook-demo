import { useState, useEffect } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// custom Hook
const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    console.log("Fetching posts...");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 15).reverse()); // fetches first 15 posts and store in reverse way
      })
      .catch((error) => console.error("Error fetching posts: ", error));
  }, []);

  return posts;
};

export default useFetchPosts;
