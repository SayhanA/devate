import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      HomePage <Link href={"/create"}>Create</Link>
    </div>
  );
};

export default HomePage;
