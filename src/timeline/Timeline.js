
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from "./posts/Post";
import React, { useState } from "react";

function Timeline() {
  const [posts, setPosts] =useState([
    {
      user: "crisjohn_",
      postImage: "https://www.whoa.in/download/photoshoot-love-heart-created-by-young-couple-hand-hd-images-photos-fb-images-free-download",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "jmaica_",
      postImage: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
      likes: 15,
      timestamp: "4hr",
    },
    {
      user: "ramirez.tech_",
      postImage: "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg",
      likes: 1215,
      timestamp: "1sec",
    },
    {
      user: "crisjohn.tech_",
      postImage: "https://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg",
      likes: 1215,
      timestamp: "1sec",
    },
    {
      user: "cris_",
      postImage: "https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480",
      likes: 1215,
      timestamp: "1sec",
    },
    {
      user: "john_",
      postImage: "https://images.adsttc.com/media/images/5afa/bc11/f197/cc1b/a000/001e/newsletter/2612_FP641279.jpg?1526381566",
      likes: 1215,
      timestamp: "1sec",
    },
    {
      user: "knyla_",
      postImage: "https://imagesvibe.com/wp-content/uploads/2023/03/Cute-Panda-Images2.jpg",
      likes: 1215,
      timestamp: "1sec",
    },
    {
      user: "ayushikai_",
      postImage: "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=",
      likes: 1215,
      timestamp: "1sec",
    },
    {
      user: "Terizla_",
      postImage: "https://www.befunky.com/images/prismic/391d50e3-1268-45e1-aaaa-3cfe6f2fb90d_hero-blur-image-2.jpg?auto=avif,webp&format=jpg&width=896",
      likes: 1215,
      timestamp: "1sec",
    },
    {
      user: "facebook_",
      postImage: "https://hindistatusnow.com/wp-content/uploads/2023/01/Smile-Whatsapp-DP-Images-9.jpg",
      likes: 1215,
      timestamp: "1sec",
    },
  ]);
  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post 
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp} 
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline
