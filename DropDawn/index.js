<!DOCTYPE html>

<html
 
lang="en">

<head>

  
<meta
 
charset="UTF-8">

  
<meta
 
name="viewport"
 
content="width=device-width, initial-scale=1.0">

  
<title>Dropdown Menu</title>

  
<link
 
rel="stylesheet"
 
href="style.css">
</head>
<body>
  <nav class="navigation">
    <a href="#" class="logo">Company Logo</a>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle">Products <i class="fas fa-chevron-down"></i></a>
        <ul
 
class="dropdown-menu">

          
<li><a
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');
 const dropDown