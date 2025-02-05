const videos = [
    {
        title: "热门视频1",
        description: "描述文本1...",
        image: "https://via.placeholder.com/300",
        link: "../video/play_interface.html"
    },
    {
        title: "热门视频2",
        description: "描述文本2...",
        image: "https://via.placeholder.com/300",
        link: "#"
    },
    {
        title: "热门视频3",
        description: "描述文本3...",
        image: "https://via.placeholder.com/300",
        link: "#"
    },
    {
        title: "热门视频3",
        description: "描述文本3...",
        image: "https://via.placeholder.com/300",
        link: "#"
    },
    {
        title: "热门视频3",
        description: "描述文本3...",
        image: "https://via.placeholder.com/300",
        link: "#"
    }
];

// Dynamically generate video cards
const videoList = document.getElementById("video-list");

// Clear the inner HTML to avoid duplicate rendering
videoList.innerHTML = "";

videos.forEach(video => {
    const card = `
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="${video.image}" class="card-img-top" alt="视频缩略图">
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <p class="card-text">${video.description}</p>
                    <a href="${video.link}" class="btn btn-primary">观看</a>
                </div>
            </div>
        </div>
    `;
    videoList.innerHTML += card; // Append the card HTML to the container
});
