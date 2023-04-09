import type { NextPage } from "next";

import { cm } from "src/utils/class-merge";

const Home: NextPage = () => {
  return (
    <div className={cm("bg-red-100", 1 === 1 && "bg-orange-700")}>
      {"I'm Home"}
    </div>
  );
};

export default Home;
