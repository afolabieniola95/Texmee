
const CAPTION_LIMIT = 80;

/* -------------------------
       Sample posts data (JS array)
       Replace or add items here to change posts
       ------------------------- */
    const posts = [
      {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "image/image3.jpg"
    },
    content: {
      text: null,
      image: "image/image2.jpg",
      caption: "Alita is back!!!"
    },
    comments: [],
    
    stats: {
      likes: 120
    },
    ui: {
      liked: false,
      captionExpanded: false,
      following: false
    },
    createdAt: "2025-01-10"
  },

  {
    id: 2,
    user: {
      name: "John Doe",
      avatar: "uploads/edwin1.jpg"
    },
    content: {
      text: null,
      image: "image/edwin2.jpg",
      caption: "New Year New System😊😁👍"
    },
    comments: [],
    
    stats: {
      likes: 120
    },
    ui: {
      liked: false,
      captionExpanded: false,
      following: false
    },
    createdAt: "2025-01-10"
  },

  {
    id: 3,
    user: {
      name: "Eniola Boluwatife",
      avatar: "image/bolu1.jpg"
    },
    content: {
      text: null,
      image: "image/bolu3.jpg",
      caption: "xup Guyyys"
    },
    comments: [],
    
    stats: {
      likes: 42
    },
    ui: {
      liked: false,
      captionExpanded: false,
      following: false
    },
    createdAt: "2025-01-08"
  }
];

    /* -------------------------
       Render posts into the .feed container
       ------------------------- */
    const feedEl = document.getElementById('feed');

   function createPostCard(p) {
  // ---------- Card Container ----------
  const card = document.createElement('div');
  card.className = 'post-card';

  // ---------- Header: Avatar + Username + Follow ----------
  const header = document.createElement('div');
  header.className = 'profile-info';

  const left = document.createElement('div');
  left.style.display = 'flex';
  left.style.gap = '15px';
  left.style.alignItems = 'center';

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.style.backgroundImage = `url('${p.user.avatar}')`;

  const username = document.createElement('div');
  username.className = 'username';
  username.textContent = p.user.name;

  left.appendChild(avatar);
  left.appendChild(username);
  header.appendChild(left);

  // Follow buttons
  const followNav = document.createElement('div');
   followNav.className = 'follow-nav';     
  const followBtn = document.createElement('button');
  followBtn.className = 'follow-btn';
  followBtn.textContent = 'Follow';

  const followingBtn = document.createElement('button');
  followingBtn.className = 'following-btn';
  followingBtn.textContent = 'Following';
  followingBtn.style.display = 'none';

  followNav.appendChild(followBtn);
  followNav.appendChild(followingBtn);
  header.appendChild(followNav);   
  card.appendChild(header);

  // Follow button logic
  followBtn.addEventListener('click', () => {
    followBtn.style.display = 'none';
    followingBtn.style.display = 'block';
  });

  followingBtn.addEventListener('click', () => {
    followingBtn.style.display = 'none';
    followBtn.style.display = 'block';
  });

  // ---------- Post Text ----------
  if (p.content.text) {
    const textDiv = document.createElement('div');
    textDiv.className = 'post-text';
    textDiv.textContent = p.content.text;
    card.appendChild(textDiv);
  }

  // ---------- Post Image ----------
  if (p.content.image) {
    const imgWrap = document.createElement('div');
    imgWrap.className = 'post-image';
    const img = document.createElement('img');
    img.src = p.content.image;
    img.alt = 'post image';
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);
  }

  // ---------- Footer: Actions + Caption ----------
  const footer = document.createElement('div');
  footer.className = 'post-footer';

  const actions = document.createElement('div');
  actions.className = 'post-actions';

  // Like button
  const likeBtn = document.createElement('button');
  likeBtn.className = 'post-btn';
  likeBtn.innerHTML = `<img class="like-icon" src="icon/like.png" style="width:30px; height:30px;">`;
  actions.appendChild(likeBtn);

  const icon = likeBtn.querySelector('.like-icon');
  likeBtn.addEventListener('click', () => {
    p.ui.liked = !p.ui.liked;
    icon.src = p.ui.liked ? 'icon/liked.png' : 'icon/like.png';
  });

  // Comment button
  const commentBtn = document.createElement('button');
  commentBtn.className = 'post-btn';
  commentBtn.innerHTML = `<img src="icon/comment.png" style="width:26px;height:26px;margin:2px 1px;">`;
  actions.appendChild(commentBtn);
     
  // Share button
  const shareBtn = document.createElement('button');
  shareBtn.className = 'post-btn';
  shareBtn.innerHTML = `<img src="icon/share.png" style="width:28px;height:28px;">`;
  actions.appendChild(shareBtn);
  
  // More button
  const moreBtn = document.createElement('button');
  moreBtn.className = 'post-btn';
  moreBtn.innerHTML = `<img src="icon/dots.png" style="width:28px;height:28px;">`;
  actions.appendChild(moreBtn);
  
  footer.appendChild(actions);

  // Caption
  if (p.content.caption) {
    const captionDiv = document.createElement('div');
    captionDiv.className = 'post-caption';
    const fullText = p.content.caption;
    const shortText = fullText.length > CAPTION_LIMIT ? fullText.slice(0, CAPTION_LIMIT) + '...' : fullText;

    const textSpan = document.createElement('span');
    textSpan.textContent = shortText;
    captionDiv.appendChild(textSpan);

    if (fullText.length > CAPTION_LIMIT) {
      const moreBtn = document.createElement('span');
      moreBtn.className = 'view-more';
      moreBtn.textContent = ' view more';
      let expanded = false;

      moreBtn.addEventListener('click', () => {
        expanded = !expanded;
        textSpan.textContent = expanded ? fullText : shortText;
        moreBtn.textContent = expanded ? ' view less' : ' view more';
      });

      captionDiv.appendChild(moreBtn);
    }

    footer.appendChild(captionDiv);
  }
     card.appendChild(footer);
     
     const template = document.getElementById('comment-template');
     const clone = template.content.cloneNode(true);
     
     const backDrop = clone.querySelector('.back-drop');
     const panel = clone.querySelector('.comment-panel');
     const closeBtn = clone.querySelector('.close-panel');
     const sendBtn = clone.querySelector('.send-comment');
     const input = clone.querySelector('.comment-input');
     const content = clone.querySelector('.comment-container');
     

 card.appendChild(clone);
     
  commentBtn.addEventListener('click', () => {
  backDrop.style.display = 'block';
  panel.style.height = '400px';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  backDrop.style.display = 'none';
  panel.style.display = 'none';
  document.body.style.overflow = 'visible';
});

backDrop.addEventListener('click', () => {
  backDrop.style.display = 'none';
  panel.style.height = '0px';
  document.body.style.overflow = 'visible';

}); 
     
     

  sendBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) return;

    const commentData = {
      user: {
        name: 'Afolabi Boluwatife', 
        avater: 'image/image1.jpg',
        likeIcon: 'icon/like.png',
        likedIcon: 'icon/liked.png',
        commentReply: 'Reply'
      },

      text: value,

      createdAt: Date.now()
    };
     
    

    renderComment(commentData, content); //pass the correct container
    
    input.value = ''; // clear input
  });
     
  return card;
}
 

    function renderFeed() {
      feedEl.innerHTML = ''; // clear
      posts.forEach(p =>
        feedEl.appendChild(createPostCard(p)));
    }

    // INITIAL render
    renderFeed();

    function renderComment(data, container){

      let likeCommentCount = 0;
      let holdTimer; 
      let tabOpen = false;

      const singleComment = document.createElement('div');
      singleComment.className = 'single-comment';

      const avater = document.createElement('div');
      avater.className = 'comment-avater';
      avater.style.backgroundImage = `url('${data.user.avater}')`;

      const  body = document.createElement('div');
      body.className = 'comment-body';

      const name = document.createElement('div');
      name.className = 'comment-name';
      name.textContent = data.user.name;

      const text = document.createElement('div');
      text.className = 'comment-text';
      text.textContent = data.text;

      const likeIcon = document.createElement('div');
      likeIcon.className = 'comment-like-icon';
      likeIcon.style.backgroundImage = `url('${data.user.likeIcon}')`;
       
      const likedIcon = document.createElement('div');
      likedIcon.className = 'comment-liked-icon';
      likedIcon.style.backgroundImage = `url('${data.user.likedIcon}')`;
     
      likeIcon.addEventListener('click', ()=>{
       likeCommentCount ++;
       countEl.textContent = likeCommentCount;
       countEl.style.display = 'block';
       likeIcon.style.display = 'none';
       likedIcon.style.display = 'block';
});

      likedIcon.addEventListener('click', ()=>{
       likeCommentCount --;
       countEl.textContent = likeCommentCount;
       countEl.style.display = 'none';
       likeIcon.style.display = 'block';
       likedIcon.style.display = 'none';
});
       
      const commentResponse = document.createElement('div');
       commentResponse.className = 'comment-response';

      const countEl = document.createElement('span');
      countEl.className = 'like-comment-count';
      countEl.textContent = likeCommentCount;



      const commentReply = document.createElement('div');
      commentReply.className = 'comment-reply';
      commentReply.textContent = data.user.commentReply;
       
      commentReply.addEventListener('click', ()=>{
       alert('very soon');

});

      const time = document.createElement('div');
      time.className = 'comment-time';
      time.dataset.time = new Date().toISOString();
      time.textContent = 'Now';


    function timeAgo(time){
      const past = new Date(time);
      const now = new Date();

      const seconds = Math.floor((now - past) /1000);

      if (isNaN(seconds)) return 'Now';
      
      if (seconds < 60) return `${seconds}s ago`;

      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return `${minutes}m ago`;

      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours}h ago`;

      const days = Math.floor(hours / 24);
      if (days < 7) return `${days}d ago`;

      const weeks = Math.floor(days / 7);
      return  `${weeks}w ago`;

    }

    setInterval(()=>{
    document.querySelectorAll('[data-time]').forEach(el =>{
      el.textContent = timeAgo(el.dataset.time);
    });
    }, 60000);


     const reactTab = document.getElementById('react-tab');
      
      likeIcon.addEventListener('mousedown', ()=>{
     holdTimer = setTimeout(()=>{
      reactTab.style.display = 'grid';
       tabOpen = true;
      }, 500);
 });


      likeIcon.addEventListener('mouseup', ()=>{
     clearTimeout(holdTimer);
 });
 
     likeIcon.addEventListener('click', ()=>{
     if(tabOpen) return;
     console.log('normal like');
 });

    
      reactTab.addEventListener('click', ()=>{
      const react = e.target.dataset.react;
      if(!react)return;
      console.log('Reacted with', react);
      reactTab.style.display = 'none';
      tabOpen = false;
 });



      commentResponse.appendChild(commentReply);
      

      body.appendChild(name);
      body.appendChild(text);
      body.appendChild(likeIcon);
      body.appendChild(likedIcon);
      body.appendChild(commentResponse);
      body.appendChild(countEl);
      body.appendChild(reactTab);
      body.appendChild(time);

      singleComment.appendChild(avater);
      singleComment.appendChild(body);

      container.appendChild(singleComment);

    }
     
    
    /* -------------------------
      functions (kept same behaviour)
       ------------------------- */
    function showEvent(){
      document.getElementById('event').style.width = '100%';
      document.getElementById('event').style.transition = '0.2s';
      document.getElementById('event').style.opacity = '1';
      document.getElementById('show-event').style.display = 'none';
      document.getElementById('close-event').style.display = 'block';
    }

    function closeEvent(){
      document.getElementById('event').style.width = '0%';
      document.getElementById('event').style.transition = '0.2s';
      document.getElementById('event').style.opacity = '0.1';
      document.getElementById('show-event').style.display = 'block';
      document.getElementById('close-event').style.display = 'none';
    }

    function DotMenu(){
      document.getElementById('closedot').style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.getElementById('opendot').style.height = '220px';
    }

    function Closedot(){
      document.getElementById('closedot').style.display = 'none';
      document.body.style.overflow = 'visible';
      document.getElementById('opendot').style.height = '0px';
    }

    function Save(){
      setTimeout(function(){
        document.getElementById('saved').innerHTML ="Saved";
      },1000);
    }

    function Share(){
      document.getElementById('close-share').style.display ='block';
      document.getElementById('open-share').style.height ='100px';
      document.getElementById('closedot').style.display = 'none';
      document.body.style.overflow = 'hidden';
      document.getElementById('opendot').style.height = '0px';
    }

    function CloseShare(){
      document.getElementById('close-share').style.display ='none';
      document.getElementById('open-share').style.height ='0px';
      document.getElementById('closedot').style.display = 'none';
      document.body.style.overflow = 'visible';
      document.getElementById('opendot').style.height = '0px';
    }

    function Report(){
      document.getElementById('close-report').style.display ='block';
      document.getElementById('open-report').style.height ='220px';
      document.getElementById('closedot').style.display = 'none';
      document.body.style.overflow = 'hidden';
      document.getElementById('opendot').style.height = '0px';
    }

    function CloseReport(){
      document.getElementById('close-report').style.display ='none';
      document.getElementById('open-report').style.height ='0px';
      document.getElementById('closedot').style.display = 'none';
      document.body.style.overflow = 'visible';
      document.getElementById('opendot').style.height = '0px';
    }

    // share helpers (placeholders)
    function ShareFriends(){ alert('Share to friends (placeholder)'); }
    function ShareGroups(){ alert('Share to groups (placeholder)'); }
    function Repost(){ alert('Repost (placeholder)'); }


 //like posts 
 function like(){
 document.getElementById('like').style.display = "none";
document.getElementById('like').style.display = "none";
 }



 
 
 

  

