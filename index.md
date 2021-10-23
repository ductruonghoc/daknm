<head>
  <meta charset="utf-8">
  <style>

    ul {
      padding: 0px;
      margin-bottom: 20px;
      background-color: #000000;
      height: 50px;
      border: 1px solid #000000;
      border-radius: 20px;
      text-align: center;
    }

    li {
      display: inline-block;
      margin-left: 0.2%;
      margin-top: 13px;
      margin-bottom: 13px;
      max-height: 24px;
      border: 2px solid #ffffff;
      background-color: #ffffff;
      width: 22%;
      text-align: center;
      border-radius: 320px;
      overflow: auto;
    }

    li a {
      color: black;
    }

    .slider {
      margin: 20%;
      color: #000000;
      width: 80%;
      display: flex;
      overflow-x: auto;
      margin: 0 auto;
      border-left: 1px solid #000000;
      border-right: 1px solid #000000;
      border-top: 1px solid #000000;
      border-radius: 20px;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
      -webkit-scroll-snap-points-x: repeat(300px);
      -ms-scroll-snap-points-x: repeat(300px);
      scroll-snap-points-x: repeat(300px);
      -webkit-scroll-snap-type: mandatory;
      -ms-scroll-snap-type: mandatory;
      scroll-snap-type: mandatory;
    }  

    .slide {
      text-align: center;
      width: 100%;
      flex-shrink: 0;
      height: 100%;
    }    

    .black {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      min-height: 100px; 
      background-color: #000000;
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
       background-color: #000000;
       border-top-left-radius: 20px;
       border-bottom-right-radius: 20px;
       padding: 50px;
       display: block;
     }
    
     .han h3{
     color: #ffffff;
     }

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
     }
  </style>
  <script type="text/javascript">
    function collapse() {
      var x = document.getElementById('bb');
      if (x.style.display === 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
    }
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
   
<ul>      
  <li><a href="#ttc"> Thông tin </a></li>
  <li><a href="#ctv"> Thành viên </a></li>
  <li><a href="#han"> Hình ảnh </a></li>  
  <li><a href="#bbbc"> Báo cáo </a></li>   
</ul>

<img style="border-radius: 20px" width="100%" src="https://i.ibb.co/y5cnnMW/ezgif-3-0a9e99cf56e5.gif">

<div style="color: #ffffff" class="black">    
  <h3 style="color: #ffffff" id="ttc"><b>Thông tin chung</b></h3>
  <p >Bọn mình là nhóm 5 đến từ 21CLC09</p>
</div>

<div class="ctv">     
  <h3 id="ctv"><b> Các thành viên</b></h3>
  <div class="slide-wrap">
  
    <a href="#slide-1"></a>
    <a href="#slide-2"></a>
    <a href="#slide-3"></a>
    <a href="#slide-4"></a>
    <a href="#slide-5"></a>
  
    <div class="slider">
      <div class="slide" id="slide-1">
        <a href="https://www.facebook.com/ngnhatfiii1804"><img width="50%" src="https://static.thenounproject.com/png/316802-200.png"></a>
        <h4><b>Nguyễn Nhật Phi</b></h4>
        <p>Trưởng nhóm thân thiện</p>
      </div>
      <div class="slide" id="slide-2">
        <a href="https://www.facebook.com/dev.tronghieu"><img width="50%" src="https://static.thenounproject.com/png/316802-200.png"></a>
        <h4><b>Nguyễn Trọng Hiếu</b></h4>
        <p>Kiểm duyệt viên thông thái</p>    
      </div>
      <div class="slide" id="slide-3">
        <a href="https://www.facebook.com/profile.php?id=100010494795471"><img width="50%" src="https://static.thenounproject.com/png/316802-200.png"></a>
        <h4><b>Nguyễn Phú Minh Bảo</b></h4>
        <p>MC dui tánh</p>    
      </div>
      <div class="slide" id="slide-4">
        <a href="https://www.facebook.com/profile.php?id=100015800913107"><img width="50%" src="https://static.thenounproject.com/png/316802-200.png"></a>
        <h4><b>Fa Ngọc Uyển Nhi</b></h4>
        <p>MC nhiệt tình</p>         
      </div>
      <div class="slide" id="slide-5">
        <a href="https://www.facebook.com/duc.leminh2812/"><img width="50%" src="https://static.thenounproject.com/png/316802-200.png"></a>
        <h4><b>Lê Minh Đức</b></h4>
        <p>Web gà mờ</p>      
      </div>
      <div class="slide" id="slide-6">
        <a href="https://www.facebook.com/nomatterwhatusay"><img width="50%" src="https://static.thenounproject.com/png/316802-200.png"></a>
        <h4><b>Trương Vĩ Thành</b></h4>
        <p>Hậu cần kín tiếng</p>      
      </div>
    </div>
  </div>    
</div>   

<div class="han">  
  <h3 id="han"> Hình ảnh nhóm </h3>  
</div>

<div class="bbbc">
  <h3 id="bbbc"> <b>Biên bảng</b></h3>
  <p><b>1. Biên bảng thành lập</b><button onclick="collapse()"><img width="15" src="https://i.ibb.co/myHKB3z/images-jpeg-removebg-preview.png"/></button></p>
  <div id="bb" style="display: none"><p align="center"><iframe src="https://drive.google.com/file/d/1YHN3Ju8baykncpl_Y_gnXCC9zcwiz1wx/preview" width="100%" style="min-height: 50%;" allow="autoplay"></iframe></p></div>
</div>

<footer> <p> This site using Jekyll Themes </p> </footer>

