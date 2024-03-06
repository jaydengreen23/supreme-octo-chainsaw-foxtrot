
    var images = [
        "https://th.bing.com/th/id/R.5632484e05213237478ef257a24c603b?rik=6KHvfrWrhxvX%2fQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Spiderman-Background-for-Iphone.jpg&ehk=izQjzXTTEioDEmbokCM6ocf3IDUWD9Go1zNIdLH%2frLc%3d&risl=&pid=ImgRaw&r=0",
        "https://images.thedirect.com/media/article_full/loki-season-2-characters.jpg",
        "https://th.bing.com/th/id/OIP.udhtqEGoscMLdzC0BCejugHaF3?rs=1&pid=ImgDetMain",
        "https://i.imgflip.com/49j42o.jpg",
        "https://una.edu/directory/img/789.jpg"
        // Add more image URLs as needed
    ];
    var currentIndex = 0;
    function cyclePictures() {
        var image = document.getElementById("image");
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
        image.src = images[currentIndex]; // Update the src attribute
    }
