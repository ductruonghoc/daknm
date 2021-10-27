<head>
  <meta charset="utf-8">
  <style>

    ul {
      padding: 2px;
      margin-bottom: 20px;
      background-color: #ff308f;
      height: 30px;
      border-radius: 20px;
      text-align: center;
    }

    li {
      margin: 0px;
      display: inline-block;      
      background-color: #657e89;
      width: 21%;
      height: 23px;
      padding:1px;
      text-align: center;
      border-radius: 320px;
      overflow: auto;
    }

    li a {
      color: white;
    }
	  
    li a:hover {
	  border-radius: 20px;
	  background-color: #ff308f;
	  }	  
	  
  .slider {
    position: relative;
    margin: auto;
    margin-bottom: 20px;
    background-color: #ff308f;
    padding:20px;
    border-radius: 10px;
  }  


  .slide {
    background-color: #8ca7b7;     
    color:#ffffff;
    width:97%;
    text-align: center;
	  display: none;
    padding:10px;
    margin-right:20px;
  }
	 
  .slide h4{color:#ffffff;}
	  
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
 
  .next {
    right: 20px;
    border-radius: 3px 0 0 3px;
  }
  
  .prev:hover, .next:hover {
   background-color: rgba(0,0,0,0.8);
  }
  
  .numbertext {
    color: #f2f2f2;
    font-size: 10px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
    background-color:#c50b5a;
  }
 
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
 
  .active, .dot:hover {
    background-color: #717171;
  }
 
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
 
  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

    .black {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      min-height: 100px; 
      background-color: #bb0b54;
      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;
      padding: 50px;
      display: block;
    }
 
    .ctv {
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
      min-height: 100px;
      background-color: #ffffff;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      padding: 20px;
      padding-top:10px;
      padding-bottom: 0px;
      display: block;
      text-align: center;
     }

     .han {
       margin-bottom: 20px;
       margin-left: 20px;
       margin-right: 20px;
       min-height: 100px;
       background-color: #bb0b54;
       border-top-left-radius: 20px;
       border-bottom-right-radius: 20px;
       padding: 50px;
       display: block;
     }
    
     .han h3{color:#ffffff}
	  
     .bbbc {
       margin-bottom: 20px;
       margin-left: 20px;
       margin-right: 20px;
       min-height: 100px;
       background-color: #ffffff;
       border-top-right-radius: 20px;
       border-bottom-left-radius: 20px;
       padding: 10px;
       padding-bottom: 0px;
       text-align: center;
       display: block;
       color: #c20a5d;
     }
  </style>
  <script type="text/javascript">
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }  
				
    function collapse(clicked_id) {
      var x = document.getElementById('bb'+clicked_id);
      if (x.style.display === 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
    }
				
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>   
<ul>      
  <li><a href="#ttc"> Thông tin </a></li>
  <li><a href="#ctv"> Thành viên </a></li>
  <li><a href="#han"> Hình ảnh </a></li>  
  <li><a href="#bbbc"> Báo cáo </a></li>   
</ul>

<img style="border-radius: 20px" width="100%" src="https://i.ibb.co/WfSHVLr/ezgif-6-ae3bd257d1a4.gif">

<p style="text-align:right; color:#ff308f; font-size:25px; font-style:oblique; font-family:Lucida Sans Unicode; text-shadow: 1px 1px 1px #c20c5e">-"Không phải phép chia nhưng nhà mình có rất nhiều thương"-</p>	
<div style="color: #ffffff" class="black">    
  <h3 style="color: #ffffff" id="ttc"><b>Thông tin chung</b></h3>
  <p style="color:#ffffff;">Chào mừng mọi người đến với nhóm 5</p>
</div>
     
  <h3 style="margin:auto; border-radius:5px; background-color:#ff308f; color:white; max-width:200px; padding:3px; text-align:center;" id="ctv"><b> Các thành viên</b></h3>
  <div class="slider">
      <div class="slide fade" style="display:block">
        <div class="numbertext">1 / 6</div>
        <img src="https://static.thenounproject.com/png/316802-200.png">
	<h4><b>Nguyễn Nhật Phi</b></h4>
        <p><b>Trưởng nhóm thân thiện</b></p></div>
      <div class="slide fade" >
      <div class="numbertext">2 / 6</div>
        <img src="https://static.thenounproject.com/png/316802-200.png">
        <h4><b>Nguyễn Trọng Hiếu</b></h4>
        <p>Kiểm duyệt viên thông thái</p>           
      </div>
      <div class="slide fade">
        <div class="numbertext">3 / 6</div>	   
        <img src="https://static.thenounproject.com/png/316802-200.png">
        <h4><b>Nguyễn Phú Minh Bảo</b></h4>
        <p>Thu thập thông tin</p>    
      </div>
      <div class="slide fade">
	<div class="numbertext">4 / 6</div>
        <img src="https://static.thenounproject.com/png/316802-200.png">
        <h4><b>Fa Ngọc Uyển Nhi</b></h4>
        <p>Thu thập thông tin</p>         
      </div>
      <div class="slide fade">
        <div class="numbertext">5 / 6</div>	      
        <img src="https://static.thenounproject.com/png/316802-200.png">
        <h4><b>Lê Minh Đức</b></h4>
        <p>Web gà mờ</p>      
      </div>
      <div class="slide fade">
        <div class="numbertext">6 / 6</div>	      
        <img src="https://static.thenounproject.com/png/316802-200.png">
        <h4><b>Trương Vĩ Thành</b></h4>
	<p>Hậu cần kín tiếng</p></div>      
      <a class="prev" onclick="plusSlides(-1)">❮</a>
	<a class="next" onclick="plusSlides(1)">❯</a>
 <br>

<div style="text-align:center">
   <span class="dot" onclick="currentSlide(1)"></span>
   <span class="dot" onclick="currentSlide(2)"></span>
   <span class="dot" onclick="currentSlide(3)"></span>
   <span class="dot" onclick="currentSlide(4)"></span>
   <span class="dot" onclick="currentSlide(5)"></span>
   <span class="dot" onclick="currentSlide(6)"></span>
</div>        
</div>
<div class="han">  
  <h3 id="han"> Hình ảnh nhóm </h3>  
</div>

<div class="bbbc">
  <h3 id="bbbc" style="color:#ff308f"> <b>Biên bản</b></h3>
  <p><b>1. Biên bản thành lập</b><button id="a" onclick="collapse(this.id)"><img width="15" src="https://i.ibb.co/myHKB3z/images-jpeg-removebg-preview.png"/></button></p>
  <div id="bba" style="display: none"><p align="center"><iframe src="https://drive.google.com/file/d/1VA7EZOSaf-LPhqs-FWn58O89kPHo_ciV/preview" width="100%" style="min-height: 600px;" allow="autoplay"></iframe></p></div>
  <p><b>2. Biên bản họp lần 1</b><button id="b" onclick="collapse(this.id)"><img width="15" src="https://i.ibb.co/myHKB3z/images-jpeg-removebg-preview.png"/></button></p>
  <div id="bbb" style="display: none"><p align="center"><iframe src="https://drive.google.com/file/d/1lxs-ZD9ts05cYAmNuaSAKuIvq3_tGHth/preview" width="100%" style="min-height: 600px;" allow="autoplay"></iframe></p></div>
</div>
</body>
<footer> <p> This site using Jekyll Themes </p> </footer>

