        // Mỗi slide sẽ có một chỉ số của riêng nó, để đơn giản chúng ta sẽ gán chỉ số mảng cho các slide
        var slideIndex = 0;
        // Cho ta biết chúng ta đang ở slide nào
        var currentSlideIndex = 0;
        // Mảng lưu các slide của chúng ta
        var slideArray = [];
        
        // Hàm này sẽ giúp chúng ta tạo ra các đối tượng slide
        // bao gồm: tiêu đề, mô tả, ảnh, đường dẫn khi nhấp vào button trên slide, 
        // và id của mỗi slide
        function Slide(avatar, name, role, link, description) {
        this.avatar = avatar;
        this.name = name;
        this.role = role;
        this.description = description;
        this.link = link;
        // we need an id to target later using getElementById
        this.id = "slide" + slideIndex;
        // Add one to the index for the next slide number
        slideIndex++;
        // Add this Slide to our array
        slideArray.push(this);
        }
        
        // Tạo các đối tượng slide, bạn có thể tạo nhiều hơn
        
        var NhatPhi = new Slide(
        "image/NhatPhi.jpg",
        "Nguyễn Nhật Phi",
        "Nhóm Trưởng",
        "https://www.facebook.com/ngnhatfiii1804",
        "Mình là Nguyễn Nhật Phi, là nhóm trưởng của nhóm Ngôi nhà chung chưa đựng đầy tình thương này. Mình là sinh viên khoá 21, ngành Công nghệ Thông tin của trường đại học Khoa học Tự nhiên Thành phố Hồ Chí Minh. Mình sinh ngày 18/04/2003, và thuộc cung bạch dương (cung lửa), nên đôi khi tính tình mình hơi nóng nảy. Nhưng nếu không chọc giận mình thì mình lại là tuýp người dễ gần và thân thiện. Sở thích của mình là nghe nhạc và chơi game lúc rảnh. Và mình cực kì đam mê với vũ đạo, hiện mình đang là thành viên của tổ chức SAB, ban SAB Entertainment & Arts và cũng là thành viên của câu lạc bộ FOS, ban nhảy. Ước mơ tương lai của mình là trở thành một Web Developer kiêm UI Designer xịn sò. Các bạn hãy chào đón mình như một đối thủ đáng gờm nhé. Cảm ơn mọi người rất nhiều."
        );
        
        var TrongHieu = new Slide(
        "Image/TrongHieu.jpg",
        "Nguyễn Trọng Hiếu",
        "Kiểm duyêt",
        "https://www.facebook.com/dev.tronghieu",
        "Hello, mình là Nguyễn Trọng Hiếu. Mình nhận vai trò người kiểm duyệt cho nhóm Ngôi nhà chứa đựng đầy TÌNH THƯƠNG này.<br> &emsp; Hiếu năm nay 18 tuổi, là sinh viên năm nhất khoa CNTT CLC của trường HCMUS.<br> &emsp; Sở thích hiện tại của Hiếu là chạy deadline, cứ hết 2 3 cái thì lại nhận thêm 4 5 cái và duy trì cái vòng tuần hoàn này cho tới khi hết sức.<br> &emsp; Hiếu đã từng định hướng mình thành creative developer vì khả năng phát triển cũng như cơ hội sáng tạo đầu óc thông qua việc thiết kế các 2d, 3d animations cho web. Tuy nhiên dưới sức mạnh của đồng tiền, mình đã bẻ lái dần và chuẩn bị kiến thức cho mảng blockchain.<br> &emsp; Mình hy vọng có thể hoà thuận được với mọi người, xin cảm ơn rất nhiều!!");

        var MinhDuc = new Slide(
          "Image/MinhDuc.jpg",
          "Lê Minh Đức",
          "Kỹ thuật",""
          ,"Hè lố"
          );
        
        // Từ mảng slide đã tạo, ta tiến hành đưa nó vào source HTML
        function buildSlider() {
        // A variable to hold all our HTML
        var myHTML = "";
        var p;
        var n;
        
        // Go through the Array and add the code to our HTML
        for (var i = 0; i < slideArray.length; i++) {
            if (i===0){
                p=2;
            } else {
                p=i-1;
            }
            if (i===2){
                n=0;
            } else {
                n=i+1;
            }
            myHTML +=
            "<div id='" +
            slideArray[i].id +
            "' class='singleSlide'" +
            "<div class='slideOverlay'>" +
            "<div style='display: flex; justify-content: space-around; align-items: center; width:100%;'>" +
            "<img src='" +
            slideArray[p].avatar +
            "' style = 'border-radius: 50%;' height='50px' /> "+

            "<img src='" +
            slideArray[i].avatar +
            "' style = 'border-radius: 50%;' height='100px' /> "+

            "<img src='" +
            slideArray[n].avatar +
            "' style = 'border-radius: 50%;' height='50px' /> "+
            "</div>" +
            "<h2>" +
            slideArray[i].name +
            "</h2>" +
            "<h3 style='color: #ff6f74'>" +
            slideArray[i].role +
            " &nbsp; <a href='"+
            slideArray[i].link+
            "'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png' width='15px'/></a>"+
            "</h3>" +
            "<div style='display: flex; justify-content: center; width: 100%;'><p style='text-align: justify; width: 50%;'> &emsp; " +
            slideArray[i].description +
            "</p></div>" +
            "</div>" +
            "</div>";
        }
        console.log(myHTML);
        // Đưa HTML chúng ta vừa tạo vào id #mySlider
        document.getElementById("mySlider").innerHTML = myHTML;
        
        // Đồng thời hiển thị slide đầu tiên
        document.getElementById("slide" + currentSlideIndex).style.left = 0;
        }
        
        // Gọi hàm thực thi
        buildSlider();
        // Xử lý bấm nút chuyển slide trước đó
        function prevSlide() {
          // Tìm slide trước đó
          var nextSlideIndex;
          // Nếu chỉ số slide là 0, về slide cuối
          if (currentSlideIndex === 0) {
            nextSlideIndex = slideArray.length - 1;
          } else {
            // Nếu không thì giảm chỉ số đi 1
            nextSlideIndex = currentSlideIndex - 1;
          }

          // Ẩn slide hiện tại, hiện slide "currentSlideIndex"
          document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
          document.getElementById("slide" + currentSlideIndex).style.left = 0;

          // Thêm class để chuyển slide có animation đã định nghĩa ở bước 3
            document
            .getElementById("slide" + nextSlideIndex)
            .setAttribute("class", "singleSlide slideInLeft");
          document
            .getElementById("slide" + currentSlideIndex)
            .setAttribute("class", "singleSlide slideOutRight");

          // Cập nhật giá trị slide hiện tại
          currentSlideIndex = nextSlideIndex;
        }

        // Xử lý bấm nút chuyển slide tiếp theo
        // Cách xử lý tương tự như prevSlide đã trình bày ở trên
        function nextSlide() {
          var nextSlideIndex;
          if (currentSlideIndex === slideArray.length - 1) {
            nextSlideIndex = 0;
          } else {
            nextSlideIndex = currentSlideIndex + 1;
          }

          document.getElementById("slide" + nextSlideIndex).style.left = "100%";
          document.getElementById("slide" + currentSlideIndex).style.left = 0;

          document
            .getElementById("slide" + nextSlideIndex)
            .setAttribute("class", "singleSlide slideInRight");
          document
            .getElementById("slide" + currentSlideIndex)
            .setAttribute("class", "singleSlide slideOutLeft");

          currentSlideIndex = nextSlideIndex;
        }
