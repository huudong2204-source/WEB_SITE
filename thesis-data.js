/* ==========================================================================
   DỮ LIỆU DÙNG CHUNG CHO WEBSITE VLU RESEARCH HUB
   - Cung cấp dữ liệu cho danh sách thẻ đề tài trên trang chủ (index.html).
   - Cung cấp dữ liệu cho trang chi tiết đề tài (thesis.html).
   - Cung cấp thông tin đề tài và tài liệu đính kèm cho 4 banner nổi bật.
   ========================================================================== */
window.VLUResearchHubData = {
  // [CHỖ THAY PDF DÙNG CHUNG CHO CẢ 4 BANNER]:
  // Đặt tệp PDF thật vào thư mục "TỔNG HỢP LUẬN VĂN" rồi đổi tên file bên dưới.
  featuredPdfFile: '19.2025.TTr-V.SĐH_02.04.2025.pdf',

  // Bảng tên hiển thị cho từng mã khối ngành
  sectorLabels: {
    design: 'Khối ngành Thiết kế',
    social: 'Khối ngành Xã hội Nhân văn - Ngôn ngữ',
    communication: 'Khối ngành Truyền thông',
    business: 'Khối ngành Kinh doanh - Quản lý',
    technology: 'Khối ngành Công nghệ - Kỹ thuật',
    architecture: 'Khối ngành Kiến trúc',
    tourism: 'Khối ngành Du lịch',
    environment: 'Khoa học Môi trường'
  },

  /* ==========================================================================
     [CHỖ THAY ĐỔI / BỔ SUNG ĐỀ TÀI NGHIÊN CỨU]
     HƯỚNG DẪN CÁC TRƯỜNG DỮ LIỆU CHO MỖI ĐỀ TÀI:
     - id: Mã định danh đề tài (chữ thường, không dấu, nối bằng gạch ngang, duy nhất).
     - fileName: Tên chính xác của file PDF nằm trong thư mục "TỔNG HỢP LUẬN VĂN/".
     - title: [TÊN ĐỀ TÀI HIỂN THỊ] trên thẻ và trang chi tiết.
     - sector: [KHỐI NGÀNH] chọn 1 trong: design | social | communication | business | technology | architecture | tourism | environment.
     - studentName: [TÊN HỌC VIÊN] người thực hiện đề tài.
     - supervisorName: [TÊN GIẢNG VIÊN HƯỚNG DẪN (GVHD)].
     - acceptedDate: [NGÀY ĐƯỢC CHẤP NHẬN] theo định dạng ngày/tháng/năm (ví dụ: '15/03/2025').
     - cardAuthorImage: [ẢNH CHÂN DUNG TRÊN THẺ] (tùy chọn: nếu có ảnh thì điền đường dẫn 'images/...'; nếu để trống, thẻ tự động có nền đỏ sang trọng).
     - cardAuthorImageMode: 'cutout' (ảnh đã tách nền nhô cao 3D) hoặc 'original' (ảnh chụp gốc).
     - biography: [TIỂU SỬ HỌC VIÊN] (hiển thị ở trang chi tiết; nếu để trống trang sẽ dùng nội dung mẫu).
     - rationale: [LÝ DO CHỌN ĐỀ TÀI] (hiển thị ở trang chi tiết).
     - objectives: [MỤC TIÊU VÀ NỘI DUNG] (hiển thị ở trang chi tiết).
     - abstract: [GIỚI THIỆU / TÓM TẮT ĐỀ TÀI] (hiển thị ở trang chi tiết).
     ========================================================================== */
  theses: [
    // --- ĐỀ TÀI 1 ---
    {
      id: 'residence-weekend-2025',
      fileName: '19.2025_KH-V.SDH_Kế hoạch tổ chức Tuần học Residence Weekend 2025, khóa VEMBA 32 tại Vũng Tàu.pdf',
      title: 'Kế hoạch tổ chức Tuần học Residence Weekend 2025 cho khóa VEMBA 32 tại Vũng Tàu',
      sector: 'business',
      studentName: 'Học viên mẫu 01', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 01',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '15/03/2024',     // [CHỖ THAY NGÀY DUYỆT]
      cardAuthorImage: 'images/pages/discover/leadership/huynh-tan-loi-portrait-removebg-preview.png', // [CHỖ THAY ẢNH CHÂN DUNG]
      cardAuthorImageMode: 'cutout'
    },

    // --- ĐỀ TÀI 2 ---
    {
      id: 'seminar-3-methods-research',
      fileName: '19.2025.TTr-V.SĐH_02.04.2025.pdf',
      title: 'Tờ trình tổ chức Seminar 3: Methods Research – Strategies & Applications',
      sector: 'social',
      studentName: 'Học viên mẫu 02', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 02',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '22/08/2025',     // [CHỖ THAY NGÀY DUYỆT]
      cardAuthorImage: 'images/pages/discover/leadership/huynh-tan-loi-portrait.png', // [CHỖ THAY ẢNH CHÂN DUNG]
      cardAuthorImageMode: 'original'
    },

    // --- ĐỀ TÀI 3 ---
    {
      id: 'lab-2-review-report',
      fileName: 'BÁO CÁO NHẬN XÉT KẾT QUẢ THỰC HÀNH LAB 2.pdf',
      title: 'Báo cáo nhận xét kết quả thực hành Lab 2',
      sector: 'technology',
      studentName: 'Học viên mẫu 03', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 03',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '10/01/2026'      // [CHỖ THAY NGÀY DUYỆT]
      // Có thể thêm cardAuthorImage: 'images/...' khi có ảnh chân dung
    },

    // --- ĐỀ TÀI 4 ---
    {
      id: 'lab-4-nguyen-huu-dong',
      fileName: 'LAB4_NguyenHuuDong_2474802010087.pdf',
      title: 'Thực hành Lab 4 – Nguyễn Hữu Đồng',
      sector: 'technology',
      studentName: 'Nguyễn Hữu Đồng', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 04',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '18/06/2024'      // [CHỖ THAY NGÀY DUYỆT]
    },

    // --- ĐỀ TÀI 5 ---
    {
      id: 'lab-1-nguyen-huu-dong',
      fileName: 'Nguyễn Hữu Đồng_2474802010087_LAB1.pdf',
      title: 'Thực hành Lab 1 – Nguyễn Hữu Đồng',
      sector: 'technology',
      studentName: 'Nguyễn Hữu Đồng', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 05',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '02/11/2025'      // [CHỖ THAY NGÀY DUYỆT]
    },

    // --- ĐỀ TÀI 6 ---
    {
      id: 'lab-2-nguyen-huu-dong',
      fileName: 'NguyenHuuDong_2474802010087_Lab02.pdf',
      title: 'Thực hành Lab 2 – Nguyễn Hữu Đồng',
      sector: 'technology',
      studentName: 'Nguyễn Hữu Đồng', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 06',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '27/02/2026'      // [CHỖ THAY NGÀY DUYỆT]
    },

    // --- ĐỀ TÀI 7 ---
    {
      id: 'history-party-group-2',
      fileName: 'NHÓM 2_LSĐCSVN.pdf',
      title: 'Lịch sử Đảng Cộng sản Việt Nam – Nhóm 2',
      sector: 'social',
      studentName: 'Học viên mẫu 07', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 07',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '09/09/2024'      // [CHỖ THAY NGÀY DUYỆT]
    },

    // --- ĐỀ TÀI 8 ---
    {
      id: 'decision-1821',
      fileName: 'QD1821-21-09-2010.pdf',
      title: 'Quyết định số 1821 ngày 21/09/2010',
      sector: 'social',
      studentName: 'Học viên mẫu 08', // [CHỖ THAY TÊN HỌC VIÊN]
      supervisorName: 'GVHD mẫu 08',   // [CHỖ THAY TÊN GVHD]
      acceptedDate: '30/12/2025'      // [CHỖ THAY NGÀY DUYỆT]
    }
  ],

  /* ==========================================================================
     [CHỖ THAY ĐỔI DỮ LIỆU 4 BANNER NỔI BẬT]
     (Dùng khi người dùng bấm vào banner để xem trang chi tiết của đề tài đó).
     ========================================================================== */
  featured: [
    // --- BANNER 1 ---
    {
      id: 'featured-supply-chain',
      title: 'Ứng Dụng Trí Tuệ Nhân Tạo Trong Tối Ưu Hóa Chuỗi Cung Ứng Xanh', // [TÊN ĐỀ TÀI BANNER 1]
      authorName: 'Huỳnh Tấn Lợi', // [TÊN TÁC GIẢ BANNER 1]
      sector: 'business',
      authorImage: 'images/pages/discover/leadership/huynh-tan-loi-portrait-removebg-preview.png' // [ẢNH TÁC GIẢ BANNER 1]
    },

    // --- BANNER 2 ---
    {
      id: 'featured-coastal-architecture',
      title: 'Giải Pháp Thiết Kế Kiến Trúc Bền Vững Cho Đô Thị Biển Miền Trung', // [TÊN ĐỀ TÀI BANNER 2]
      authorName: 'Nguyễn Thu Hiền', // [TÊN TÁC GIẢ BANNER 2]
      sector: 'architecture',
      authorImage: 'images/pages/discover/leadership/nguyen-thu-hien-portrait.png' // [ẢNH TÁC GIẢ BANNER 2]
    },

    // --- BANNER 3 ---
    {
      id: 'featured-health-ai',
      title: 'Xây Dựng Mô Hình Bào Chế Thuốc Tự Động Bằng Máy Học Vision AI', // [TÊN ĐỀ TÀI BANNER 3]
      authorName: 'Nguyễn Việt Tính', // [TÊN TÁC GIẢ BANNER 3]
      sector: 'technology',
      authorImage: 'images/pages/discover/leadership/nguyen-viet-tinh-portrait.png' // [ẢNH TÁC GIẢ BANNER 3]
    },

    // --- BANNER 4 ---
    {
      id: 'featured-finance',
      title: 'Chuyển Đổi Số Trong Quản Trị Rủi Ro Ngân Hàng Thương Mại', // [TÊN ĐỀ TÀI BANNER 4]
      authorName: 'Tống Chí Thông', // [TÊN TÁC GIẢ BANNER 4]
      sector: 'business',
      authorImage: 'images/pages/discover/leadership/tong-chi-thong-portrait.png' // [ẢNH TÁC GIẢ BANNER 4]
    }
  ]
};
