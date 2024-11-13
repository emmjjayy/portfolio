document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    
                    if (link) {
                        link.classList.remove('active');
                    }
                });
                
                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    
    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x'); 
            if (navbar) {
                navbar.classList.toggle('active'); 
            }
        };
    }
});

    
    function playDemo(videoId) {
        const modal = document.getElementById("video-modal");
        const videos = document.querySelectorAll(".demo-video");

        
        videos.forEach(video => {
            video.style.display = "none";
            video.pause();
            video.currentTime = 0;
        });

        // Show the selected video
        const selectedVideo = document.getElementById(videoId);
        selectedVideo.style.display = "block";  
        selectedVideo.play();  

        
        modal.style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }

    // Function to close the modal 
    function closeModal() {
        const modal = document.getElementById("video-modal");
        const videos = document.querySelectorAll(".demo-video");

        // Pause all videos and hide modal
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
            video.style.display = "none"; 
        });
        modal.style.display = "none"; 
        document.getElementById("overlay").style.display = "none"; 
    }
    
document.getElementById("closeModalBtn").addEventListener("click", closeModal);
document.getElementById("overlay").addEventListener("click", closeModal);

    
    
