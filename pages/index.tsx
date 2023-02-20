import type { NextPage } from "next";
import useWindowSize from "../utils/windowDimensions";

const Home: NextPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div className={`h:${height} rel`}>
      <div
        className={`flex flex:col h:full p:64 jc:space-between ai:center bg:#ececec `}
      >
        <p
          className={`color:black f:32 f:44@sm f:64@lg f:bold m:0 text:center`}
        >
          Deseja se livrar do patrão e trabalhar por conta própria para ter sua
          independência financeira?
        </p>
        <div className={`w:100% w:80%@sm w:50%@lg flex ai:center jc:center`}>
          <video
            width="100%"
            controls
            src="/disccountvideo.mp4"
            autoPlay
            loop
          />
        </div>
        <button
          onClick={() => {
            window.location.href = process.env.NEXT_PUBLIC_DISCOUNT_URL as string;
          }}
          className={`flex b:rgb(64,45,102)|2px|solid bg:linear-gradient(#0716eccf,#4d70e2) cursor:pointer opacity:0.8 opacity:1:hover h:56 h:72@sm w:520@sm w:100% r:999 ai:center jc:center f:20 f:32@sm f:bold f:#f2f2f2 `}
        >
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default Home;
