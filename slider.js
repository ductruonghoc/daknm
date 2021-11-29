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
        "image/TrongHieu.jpg",
        "Nguyễn Trọng Hiếu",
        "Kiểm duyệt viên",
        "https://www.facebook.com/dev.tronghieu",
        "Hello, mình là Nguyễn Trọng Hiếu. Mình nhận vai trò người kiểm duyệt cho nhóm Ngôi nhà chứa đựng đầy TÌNH THƯƠNG này. Hiếu năm nay 18 tuổi, là sinh viên năm nhất khoa CNTT CLC của trường HCMUS. Sở thích hiện tại của Hiếu là chạy deadline, cứ hết 2 3 cái thì lại nhận thêm 4 5 cái và duy trì cái vòng tuần hoàn này cho tới khi hết sức. Hiếu đã từng định hướng mình thành creative developer vì khả năng phát triển cũng như cơ hội sáng tạo đầu óc thông qua việc thiết kế các 2d, 3d animations cho web. Tuy nhiên dưới sức mạnh của đồng tiền, mình đã bẻ lái dần và chuẩn bị kiến thức cho mảng blockchain. Mình hy vọng có thể hoà thuận được với mọi người, xin cảm ơn rất nhiều!!");

        var UyenNhi = new Slide(
          "image/UyenNhi.jpg",
          "Fa Ngọc Uyển Nhi",
          "Nội dung & MC",
          "https://www.facebook.com/profile.php?id=100015800913107",
          "Xin chào mọi người mình là Fa Ngọc Uyển Nhi, mình là thành viên của nhóm Ngôi nhà chung chứa đựng đầy tình thương, trong nhóm mình sẽ đảm nhận vai trò là biên kịch, cũng như là MC phụ trách phần thuyết trình cuối kì của nhóm. Mình là sinh viên khóa 21, ngành Công nghệ Thông tin, trường Đại Học Khoa Học Tự Nhiên – ĐHQG TPHCM, mình sinh ngày 15/09/2003 , tên của mình khá đặc biệt(đôi khi là khá bất tiện để mọi người có thể hiểu ngay từ đầu) cũng bởi mình là người dân tộc Chăm và mình cảm thấy rất tự hào vì điều đó. Mình là người khá hòa đồng và luôn sẵn lòng giúp đỡ mọi người, mình là người kiềm chế cảm xúc khá tốt nên mọi sẽ thấy mình rất ít khi nổi nóng. Sở thích của mình khá đơn giản đó là nghe nhạc, và đặc biệt là mình rất thích xem phim. Với sự cẩn thận hiện có mình định hướng trở thành Software Testers . Và mình cũng có một ước mơ từ rất lâu rồi đó là được đi và khám phá đất nước Thụy Sĩ, nên mình sẽ nỗ lực thật nhiều để ước mơ này thành sự thật!!"
        );

        var MinhBao = new Slide(
          "image/MinhBao.jpeg",
          "Nguyễn Phú Minh Bảo",
          "Nội dung",
          "https://www.facebook.com/profile.php?id=100010494795471",
          "Chào các bạn, mình tên là Nguyễn Phú Minh Bảo hiện đang giữ vai trò sáng tạo nội dung và là MC của nhóm 5 môn kĩ năng mềm. Nói sơ qua về thông tin cá nhân của mình: mình sinh vào ngày 20/07/2003 tại thị xã Châu Đốc nhưng từ khi lên 6 gia đình mình bắt đầu chuyển đến và sinh sống ở TP Long Xuyên. Đây cũng là nơi mình dành 12 năm đèn sách và sinh sống cho đến khi đỗ vào trường Đại Học Khoa Học Tự Nhiên, khoa Công Nghệ Thông Tin K21. Sở thích của mình cũng nhiều, nói chung là vui là mình quất, đặc biệt trong việc chơi game. Game nào mình cũng chơi được nếu có bạn bè, còn về độ hardcore thì hiện tại mình không có thời gian chứ ngày xưa mình cũng “Chiến” lắm đấy😎. Ước mơ của mình thì bây giờ cũng khá là mơ hồ vì khá là phân vân trong việc chọn chuyên ngành nên mình cứ chỉ Enjoy cái moment này thôi trước đã :P Rất mong được làm quen với mọi người"
        );

        var MinhDuc = new Slide(
          "image/MinhDuc.jpg",
          "Lê Minh Đức",
          "Kỹ thuật viên",
          "https://www.facebook.com/duc.leminh2812/",
          "Mình là Lê Minh Đức, kỹ thuật viên của nhóm 5, ngôi nhà chung chứa đựng đầy tình thương. Mình sinh vào ngày 28 tháng 12, một ngày đông cuối năm không có tuyết (tại thành phố Hồ Chí Minh, Việt Nam). Trường THPT Trưng Vương đã nâng đỡ mình và hiện giờ mình đang cư ngụ tại lớp 21CLC09, Khoa CNTT, Trường ĐHKHTN. Sở thích của mình rất nhiều nhưng thích nhất là ngủ, cũng như tìm tòi, học hỏi những điều mới mẻ. (thỉnh thoảng, mình còn tìm ra được những giải pháp mới trong lúc ngủ) Về uớc mơ của mình ư? Như nhiều người thôi đó là có một thu nhập ổn định, xa hơn là xây dựng được một căn nhà siêu to khổng lồ. Còn một mục tiêu mà mình luôn nhắm đến đó là được làm trong công ty game lớn như là hãng game 10 năm để pr phim Riot Entertainment. Và đó là tất cả thông tin về mình, cám ơn mọi người đã quan tâm. Mọi người có thể liên hệ với mình qua icon facebook ở trên!"
          );
        
        var VyThanh = new Slide(
          "image/VyThanh.jpeg",
          "Trương Vỹ Thành",
          "Hậu cần",
          "https://www.facebook.com/nomatterwhatusay",
          "Hi xin chào tất cả mọi người, mình là Trương Vỹ Thành là thành viên của nhóm 5, vai trò của mình là hậu cần trong nhóm. Mình sinh ngày 18/3/2003 tại HCM, mình đậu được ngành CNTT, Trường ĐHKHTN là do số đỏ mà thôi chứ mình cũng chẳng có tài giỏi gì. Sở thích của mình là nghe nhạc, xem phim, đồ công nghệ, chơi game và xem mêm. Mình có ước mơ là trở thành tester hoặc designer trong 1 công ti game chuyên gia để game dead. Cảm ơn mọi người đã lắng nghe lời chia sẻ của mình"
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
                p=5;
            } else {
                p=i-1;
            }
            if (i===5){
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
            "' style = 'border-radius: 50%; margin-left:15%;' height='50px' /> "+

            "<img src='" +
            slideArray[i].avatar +
            "' style = 'border-radius: 50%;' height='130px' /> "+

            "<img src='" +
            slideArray[n].avatar +
            "' style = 'border-radius: 50%; margin-right:15%;' height='50px' /> "+
            "</div>" +
            "<h2>" +
            slideArray[i].name +
            "</h2>" +
            "<div style = 'display: flex; justify-content: center;'><h3 style='color: #ff6f74; display: relative; '>" +
            slideArray[i].role +
            "</h3><a href='"+
            slideArray[i].link+
            "' style = 'position: absolute; z-index: 1; margin-left: 18em; margin-top: 0.3em; '><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' width='30vw' style = 'border-radius: 50%; '/></a></div>"+
            "<br><div style='display: flex; justify-content: center; width: 100%;'><p style='text-align: justify; width: 70%; font-size:1.125em; font-family: 'Trebuchet MS', sans-serif;'> &emsp; " +
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
