const PAGE_SIZE = 10;

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // フロントエンドでページング処理
  const pagedPosts = posts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
  
  return (...);
}