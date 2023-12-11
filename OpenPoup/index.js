<!DOCTYPE html>

<html
 
lang="en">

<head>

  
<meta
 
charset="UTF-8">

  
<meta
 
name="viewport"
 
content="width=device-width, initial-scale=1.0">

  
<title>User Profile Card</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="profile-card">
    <div class="profile-picture">
      <img src="profile.jpg" alt="Profile Picture">
    </div>
    <div class="profile-info">
      <h2>John Doe</h2>
      <p>Software Engineer</p>
      <p><a href="mailto:john.doe@example.com">john.doe@example.com</a></p>

      
<ul
 
class="social-media">

        
<li><a
 
href="#"><i
 
class="fab fa-facebook"></i></a></li>

        
<li><a
 
href="#"><i
 
class="fab fa-twitter"></i></a></li>

        
<li><a
 
href="#"><i
 
class="fab fa-linkedin"></i></a></li>

      
</ul>
      <button class="open-popup-btn">More Info</button>
    </div>
    <div class="popup">
      <div class="popup-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod bibendum laoreet. Proin imperdiet dolor velit, sed ullamcorper augue tincidunt at. Nunc velit risus, blandit at consectetur et, tincidunt eu lorem. Sed a lacinia sapien. Donec et turpis eget quam semper porta.</p>
        <button class="close-popup-btn">Close</button>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  color: #333;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  text-align: center;
  padding: 10px;
}

.profile-info h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

.profile-info p {
  margin-bottom: 5px;
}

.social-media {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.social-media li {
  list-style: none;
}

.social-media li a {
  font-size: 16px;
  color: #333;
  padding: 5px;
}

.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

@media only screen and (max-width: 480px) {
  .profile-card {
    width: 100%;
  }
}