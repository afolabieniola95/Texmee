
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
      avatar: "uploads/image1.jpg"
    },
    content: {
      text: null,
      image: "uploads/image1.jpg",
      caption: "My new car gufiytdftydulhfdtrzxygffgyctuxgkycxrxgyctfidgycfidxdstfcbfdiyxiyxiytdtiy"
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
      name: "Edwin Samson",
      avatar: "uploads/edwin1.jpg"
    },
    content: {
      text: "Today I learned something new!",
      image: null,
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
     const content = clone.querySelector('.comment-content');
     

 card.appendChild(clone);
     
  commentBtn.addEventListener('click', () => {
  backDrop.style.display = 'block';
  panel.style.height = '300px';
  panel.style.transition = 'height 0.5s ease'; 
});

closeBtn.addEventListener('click', () => {
  backDrop.style.display = 'none';
  panel.style.display = 'none';
});

backDrop.addEventListener('click', () => {
  backDrop.style.display = 'none';
  panel.style.height = '0px';
  panel.style.transition = 'height 0.5s ease'; 

}); 
     
     
  sendBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;

    const commentEl = document.createElement('div');
    commentEl.className = 'single-comment';
    commentEl.textContent = text;

    content.appendChild(commentEl);
    input.value = '';
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

    

    /* -------------------------
       UI functions (kept same behaviour)
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


 const likeComment = document.getElementById('likeComment');
 const likedComment = document.getElementById('likedComment');
 
 likeComment.onclick = () =>{
  likeComment.style.display = 'none';
  likedComment.style.display = 'block';
 }

 likedComment.onclick = () =>{
  likeComment.style.display = 'block';
  likedComment.style.display = 'none';
 }

 let holdTimer; 
 let tabOpen = false;

 likeComment.addEventListener('mousedown', ()=>{
  holdTimer = setTimeout(()=>{
    reactTab.style.display = 'grid';
    tabOpen = true;
  }, 500);
 });


 likeComment.addEventListener('mouseup', ()=>{
  clearTimeout(holdTimer);
 });
 
 likeComment.addEventListener('click', ()=>{
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

 

  

