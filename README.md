# VLU Research Hub – Hướng Dẫn Vận Hành & Tùy Chỉnh

> Tài liệu này tổng hợp toàn bộ tính năng, cấu trúc mã nguồn và **hướng dẫn chi tiết từng vị trí trong code có thể thay đổi** (ảnh tác giả, ảnh nền banner, tên đề tài, học viên, GVHD, file PDF, v.v.).

---

## 1. Giới thiệu tổng quan

**VLU Research Hub** là website triển lãm tri thức & giới thiệu đề tài nghiên cứu sau đại học của Trường Đại học Văn Lang.
- **Công nghệ**: HTML5, CSS3 và Vanilla JavaScript thuần.
- **Ưu điểm**: Không cần cài đặt `npm`, không cần máy chủ backend hay cơ sở dữ liệu. Nhẹ, mở là chạy ngay.
- **Khuyến nghị chạy**: Mở thư mục bằng Visual Studio Code và bật tiện ích **Live Server** trên file `index.html` (để tránh lỗi sandbox đường dẫn tệp PDF cục bộ).

---

## 2. Cấu trúc thư mục & Tệp tin

| Tệp / Thư mục | Vai trò |
|---|---|
| `index.html` | Trang chủ: Header, 4 banner đề tài nổi bật, dải thông điệp chạy, bộ lọc khối ngành, thanh tìm kiếm và lưới đề tài. |
| `thesis-data.js` | **Kho dữ liệu duy nhất**: Chứa danh sách đề tài (`theses`), dữ liệu banner (`featured`), nhãn khối ngành và tên file PDF. |
| `style.css` | Toàn bộ giao diện, bảng màu đỏ VLU, ảnh nền banner, hiệu ứng chuyển cảnh và responsive trên điện thoại. |
| `script.js` | Xử lý logic: Tự động chuyển slider banner, render thẻ đề tài nền đỏ, tìm kiếm đa tiêu chí, điều hướng sang trang chi tiết. |
| `thesis.html` | Trang con xem chi tiết từng đề tài: Profile người thực hiện, lý do nghiên cứu, mục tiêu, tóm tắt và hộp tải PDF. |
| `thesis-detail.js` | Đổ dữ liệu từ `thesis-data.js` vào trang chi tiết và tạo link tải file PDF tương ứng. |
| `images/logo.png` | Logo trường Đại học Văn Lang ở đầu trang. |
| `images/background.jpeg` | Ảnh nền dùng chung cho các banner nổi bật. |
| `images/pages/discover/leadership/` | Chân dung tác giả dùng trên banner và thẻ đề tài. |
| `TỔNG HỢP LUẬN VĂN/` | Thư mục chứa các file PDF luận văn thực tế. |

---

## 3. Các tính năng chính hiện có

1. **Hero Slider (Banner nổi bật)**:
   - 4 slide đề tài đại diện chạy tự động mỗi **3,5 giây**, hỗ trợ vòng trượt vô tận và chấm điều hướng.
   - Nền phía sau của cả 4 banner đã được đồng bộ với ảnh `background.jpeg` kết hợp dải gradient đỏ burgundy của trường, chữ trắng sắc nét.
   - Nhấp vào bất kỳ banner nào sẽ chuyển sang trang xem chi tiết (`thesis.html`) của đề tài đó.
2. **Dải thông điệp chạy (Marquee Ticker)**:
   - Dải chữ đỏ chạy liên tục 28 giây giới thiệu tầm nhìn của Viện Sau Đại học, mượt mà không ngắt quãng.
3. **Hiển thị đề tài trực tiếp**:
   - Người dùng cuộn chuột qua banner là thấy ngay bộ lọc ngành, thanh tìm kiếm và các đề tài nghiên cứu (không cần bấm chọn nút Thạc sĩ / Tiến sĩ ban đầu).
4. **Bộ lọc khối ngành**:
   - Hỗ trợ lọc theo 7 khối ngành Thạc sĩ: *Thiết kế, Xã hội Nhân văn, Truyền thông, Kinh doanh - Quản lý, Công nghệ - Kỹ thuật, Kiến trúc, Du lịch*.
5. **Thanh tìm kiếm thông minh**:
   - Hỗ trợ tiếng Việt **có dấu và không dấu**, không phân biệt chữ hoa/thường.
   - Tùy chọn phạm vi tìm kiếm: *Tất cả thông tin*, *Tên đề tài*, *Tên học viên*, *Tên GVHD*, hoặc *Ngày phê duyệt*.
   - Có bộ chọn ngày chính xác theo định dạng `dd/mm/yyyy` và nút **Xóa lọc** nhanh.
6. **Lưới thẻ đề tài nền đỏ burgundy đồng bộ**:
   - Tất cả 8 đề tài đều có phần đầu mang màu nền đỏ burgundy sang trọng, chữ tiêu đề trắng và nhãn khối ngành nổi bật (như 2 thẻ đầu).
   - Nếu có ảnh chân dung thì hiển thị ảnh; nếu chưa có ảnh thì vẫn giữ nguyên nền đỏ sang trọng, không bị khoảng trắng.
   - Nửa dưới là khung nền trắng hiển thị: Tên học viên, Tên GVHD và Ngày được chấp nhận.
   - Bấm vào bất kỳ đâu trên thẻ để mở trang chi tiết đề tài.
7. **Trang chi tiết chuyên sâu (`thesis.html`)**:
   - Profile người thực hiện (ảnh, chức danh, GVHD, ngày duyệt, tiểu sử học thuật).
   - Lý do chọn đề tài, mục tiêu nghiên cứu và tóm tắt đề tài.
   - Nút **"Bấm tải về"** tài liệu PDF đính kèm.

---

## 4. HƯỚNG DẪN CÁC VỊ TRÍ CÓ THỂ TỰ THAY ĐỔI (QUAN TRỌNG)

Mọi vị trí quan trọng trong mã nguồn đã được gắn kèm chú thích dạng `[CHỖ THAY ĐỔI...]`. Dưới đây là hướng dẫn cụ thể:

### A. Thay đổi nội dung & hình ảnh của 4 Banner nổi bật

#### 1. Thay ảnh nền phía sau banner:
- Mở file: `style.css`
- Tìm đến dòng 165 (khối `/* BANNER SLIDER: NỀN VÀ ẢNH CHO 4 BANNER NỔI BẬT */`):
  - **Banner 1**: `.slide-topic-supply-chain` → đổi đường dẫn `url("images/background.jpeg")`
  - **Banner 2**: `.slide-topic-coastal-architecture` → đổi đường dẫn `url("images/background.jpeg")`
  - **Banner 3**: `.slide-topic-health-ai` → đổi đường dẫn `url("images/background.jpeg")`
  - **Banner 4**: `.slide-topic-finance` → đổi đường dẫn `url("images/background.jpeg")`

#### 2. Thay ảnh chân dung tác giả trên banner:
- Mở file: `index.html`
- Tìm đến khối `<section class="hero-slider" id="heroSlider">`:
  - **Slide 1**: Thay đường dẫn `src="..."` của thẻ `<img>` có class `author-img-1`.
  - **Slide 2**: Thay đường dẫn `src="..."` của thẻ `<img>` có class `author-img-2`.
  - **Slide 3**: Thay đường dẫn `src="..."` của thẻ `<img>` có class `author-img-3`.
  - **Slide 4**: Thay đường dẫn `src="..."` của thẻ `<img>` có class `author-img-4`.

#### 3. Căn chỉnh vị trí khuôn mặt tác giả trong khung banner:
- Mở file: `style.css`
- Tìm đến dòng 240 (khối `/* CÀI ĐẶT CĂN CHỈNH RIÊNG CHO TỪNG TÁC GIẢ */`):
  - Chỉnh thông số `object-position: X% Y%;`
  - `X%`: Chiều ngang (0% = sát trái, 50% = giữa, 100% = sát phải).
  - `Y%`: Chiều dọc (0% = đỉnh đầu sát trên, 50% = giữa, 100% = đáy ảnh).

#### 4. Thay tên đề tài và tên tác giả trên banner:
- Mở file: `index.html`
- Trong từng slide tương ứng:
  - Sửa tiêu đề trong thẻ `<h2 class="title-3d">Tên đề tài ở đây</h2>`
  - Sửa tác giả trong thẻ `<p class="author">Tác giả: Họ và tên</p>`
- Đồng thời mở file `thesis-data.js` → tìm mảng `featured` → cập nhật lại `title` và `authorName` tương ứng để khi bấm vào banner thì trang chi tiết hiển thị đúng.

---

### B. Thay đổi thông tin thẻ đề tài nghiên cứu

Toàn bộ dữ liệu đề tài được quản lý tập trung trong file **`thesis-data.js`** (mảng `theses`).

Mỗi đề tài có cấu trúc như sau:
```javascript
{
  id: 'ma-de-tai-duy-nhat',                  // Mã định danh, viết thường, không dấu, nối bằng gạch ngang
  fileName: 'Ten-File-That.pdf',            // [FILE PDF]: Tên chính xác file trong thư mục "TỔNG HỢP LUẬN VĂN/"
  title: 'Tên đề tài nghiên cứu',           // [TÊN ĐỀ TÀI]: Tên hiển thị trên thẻ và trang chi tiết
  sector: 'business',                       // [KHỐI NGÀNH]: Chọn 1 trong các mã ngành (xem bảng mục 5)
  studentName: 'Nguyễn Văn A',              // [TÊN HỌC VIÊN]: Họ tên người thực hiện
  supervisorName: 'TS. Trần Thị B',          // [TÊN GVHD]: Họ tên giảng viên hướng dẫn
  acceptedDate: '15/03/2025',               // [NGÀY DUYỆT]: Định dạng ngày/tháng/năm
  cardAuthorImage: 'images/pages/...png',    // [ẢNH TÁC GIẢ TRÊN THẺ]: Đường dẫn ảnh (bỏ qua nếu chưa có ảnh)
  cardAuthorImageMode: 'cutout',             // 'cutout' (ảnh tách nền nhô cao 3D) hoặc 'original' (ảnh chụp gốc)
  
  // Các thông tin chi tiết (hiển thị khi bấm vào xem trang thesis.html):
  biography: 'Tiểu sử học thuật của học viên...',
  rationale: 'Lý do lựa chọn đề tài này...',
  objectives: 'Mục tiêu và nội dung nghiên cứu...',
  abstract: 'Tóm tắt nội dung công trình nghiên cứu...'
}
```

*Ghi chú quan trọng về ảnh tác giả trên thẻ:*
- Nếu bạn có ảnh chân dung tác giả: Điền đường dẫn vào `cardAuthorImage`.
- Nếu chưa có ảnh chân dung: Bạn chỉ cần bỏ qua hoặc xóa dòng `cardAuthorImage`. Thẻ đề tài sẽ tự động hiển thị nền màu đỏ burgundy sang trọng, chữ trắng nổi bật mà không bị lỗi layout.

---

### C. Thêm, thay đổi hoặc xóa file PDF luận văn

1. **Thêm file mới**:
   - Chép tệp PDF thật vào thư mục: `TỔNG HỢP LUẬN VĂN/`
   - Mở file `thesis-data.js`, thêm một phần tử mới vào mảng `theses`. Ghi chính xác tên file vào trường `fileName`.
2. **Đổi file PDF nhưng giữ nguyên đề tài**:
   - Đặt file PDF mới vào `TỔNG HỢP LUẬN VĂN/`.
   - Cập nhật lại trường `fileName` trong `thesis-data.js`.
3. **Xóa đề tài**:
   - Xóa phần tử tương ứng trong mảng `theses` ở `thesis-data.js`.

---

### D. Thay đổi Logo và Thông điệp chạy (Marquee)

1. **Thay Logo**:
   - Đặt file logo mới của trường đè lên file: `images/logo.png`.
   - Nếu muốn chỉnh kích thước logo: Mở `style.css` tìm `.vlu-logo-img` để sửa `height`.
2. **Thay chữ chạy ở dải đỏ Marquee**:
   - Mở file: `index.html`
   - Tìm thẻ `<section class="vlu-marquee">`.
   - Sửa các đoạn văn bản trong **cả 2 khối** `.marquee-group` (giữ nguyên thứ tự để dải chạy lặp lại mượt mà không bị ngắt).

---

## 5. Bảng tra cứu mã khối ngành (`sector`)

Khi điền trường `sector` trong `thesis-data.js`, dùng đúng các mã sau:

| Mã ngành (`sector`) | Tên khối ngành hiển thị |
|---|---|
| `business` | Khối ngành Kinh doanh - Quản lý |
| `social` | Khối ngành Xã hội Nhân văn - Ngôn ngữ |
| `technology` | Khối ngành Công nghệ - Kỹ thuật |
| `design` | Khối ngành Thiết kế |
| `communication` | Khối ngành Truyền thông |
| `architecture` | Khối ngành Kiến trúc |
| `tourism` | Khối ngành Du lịch |
| `environment` | Khoa học Môi trường |

---

## 6. Danh sách 8 đề tài hiện có trong hệ thống

| STT | Tên đề tài | Tên file PDF | Khối ngành | Học viên |
|---|---|---|---|---|
| 1 | Kế hoạch tổ chức Tuần học Residence Weekend 2025 cho khóa VEMBA 32 tại Vũng Tàu | `19.2025_KH-V.SDH_...pdf` | Kinh doanh - Quản lý | Học viên mẫu 01 |
| 2 | Tờ trình tổ chức Seminar 3: Methods Research – Strategies & Applications | `19.2025.TTr-V.SĐH_02.04.2025.pdf` | Xã hội Nhân văn - Ngôn ngữ | Học viên mẫu 02 |
| 3 | Báo cáo nhận xét kết quả thực hành Lab 2 | `BÁO CÁO NHẬN XÉT...pdf` | Công nghệ - Kỹ thuật | Học viên mẫu 03 |
| 4 | Thực hành Lab 4 – Nguyễn Hữu Đồng | `LAB4_NguyenHuuDong_...pdf` | Công nghệ - Kỹ thuật | Nguyễn Hữu Đồng |
| 5 | Thực hành Lab 1 – Nguyễn Hữu Đồng | `Nguyễn Hữu Đồng_...LAB1.pdf` | Công nghệ - Kỹ thuật | Nguyễn Hữu Đồng |
| 6 | Thực hành Lab 2 – Nguyễn Hữu Đồng | `NguyenHuuDong_...Lab02.pdf` | Công nghệ - Kỹ thuật | Nguyễn Hữu Đồng |
| 7 | Lịch sử Đảng Cộng sản Việt Nam – Nhóm 2 | `NHÓM 2_LSĐCSVN.pdf` | Xã hội Nhân văn - Ngôn ngữ | Học viên mẫu 07 |
| 8 | Quyết định số 1821 ngày 21/09/2010 | `QD1821-21-09-2010.pdf` | Xã hội Nhân văn - Ngôn ngữ | Học viên mẫu 08 |
