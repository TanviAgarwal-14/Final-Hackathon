document.querySelector('.post-box .post').addEventListener('click', () => {
    const textarea = document.querySelector('.post-box textarea');
    const thoughts = textarea.value;
    const thoughtsCount = thoughts.length;
if (thoughtsCount > 0) {
    const feed = document.querySelector('.feed');
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
    <div class="post-header">
        <div class="per-logo">
        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
        </div>
        <div class="post-details">
        <span class="username">User</span>
        </div>
    </div>
    <div class="post-content">
        ${thoughts}
    </div>
    <div class="post-footer">
        <span class="likes">0 likes</span>
        <span class="comments">0 comments</span>
    </div>
    `;

    feed.appendChild(postElement);
    textarea.value = '';
} else {
    alert('Please type your thoughts before posting.');
}
});