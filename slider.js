        // Mỗi slide sẽ có một chỉ số của riêng nó, để đơn giản chúng ta sẽ gán chỉ số mảng cho các slide
        var slideIndex = 0;
        // Cho ta biết chúng ta đang ở slide nào
        var currentSlideIndex = 0;
        // Mảng lưu các slide của chúng ta
        var slideArray = [];
        
        // Hàm này sẽ giúp chúng ta tạo ra các đối tượng slide
        // bao gồm: tiêu đề, mô tả, ảnh, đường dẫn khi nhấp vào button trên slide, 
        // và id của mỗi slide
        function Slide(avatar, name, role, description) {
        this.avatar = avatar;
        this.name = name;
        this.role = role;
        this.description = description;
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
        "Hè lố"
        );
        
        var MinhDuc = new Slide(
        "MinhDuc.jpg",
        "Lê Minh Đức",
        "Kỹ thuật",
        "Hè lố"
        );
        
        var TrongHieu = new Slide(
        "TrongHieu.jpg",
        "Nguyễn Trọng Hiếu",
        "Kiểm duyêt",
        "Hè lố"
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
            "' style = 'border-radius: 50%;' height='30px' /> "+

            "<img src='" +
            slideArray[i].avatar +
            "' style = 'border-radius: 50%;' height='50px' /> "+

            "<img src='" +
            slideArray[n].avatar +
            "' style = 'border-radius: 50%;' height='30px' /> "+
            "</div>" +
            "<h2>" +
            slideArray[i].name +
            "</h2>" +
            "<h3>" +
            slideArray[i].role +
            "</h3>" +
            "<p>" +
            slideArray[i].description +
            "</p>" +
            "</div>" +
            "</div>";
        }
        
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
