import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={`ai:center flex flex:col`}>
      <h1 className={`f:100 f:red`}>Pedro Furukawa is my religion</h1>
      <div className={`@rotate|2s|infinite`} onClick={
        () => {
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }
      }>
        <Image
          src="/pietro.jpg"
          alt="Pedro Furukawa"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Home;
