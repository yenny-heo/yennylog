import * as React from "react";
import Layout from "@/layout";
import video from "@/assets/videos/canvas_play.mp4";
const CanvasGame = () => {
  return (
    <Layout>
      <video
        src={video}
        width={700}
        autoPlay={true}
        muted={true}
        controls={true}
      />
    </Layout>
  );
};
export default CanvasGame;
