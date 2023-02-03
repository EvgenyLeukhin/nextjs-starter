import { NextPage } from "next";
import { Comp1, Comp2, Comp3 } from "@/components/pages/home";

const Home: NextPage = () => {
  return (
    <main>
      <h1>Home page</h1>

      <Comp1 />
      <Comp2 />
      <Comp3 />
    </main>
  )
}

export default Home;
