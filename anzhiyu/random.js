var posts=["2025/01/16/这是一篇新的博文/","2025/01/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };