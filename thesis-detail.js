(() => {
  const data = window.VLUResearchHubData;
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get('id');
  const itemType = params.get('type') === 'featured' ? 'featured' : 'thesis';
  const sourceList = itemType === 'featured' ? data.featured : data.theses;
  const item = sourceList.find(entry => entry.id === itemId);
  const detail = document.getElementById('thesisDetail');
  const notFound = document.getElementById('detailNotFound');

  if (!item) {
    notFound.hidden = false;
    return;
  }

  const setText = (id, value) => {
    document.getElementById(id).textContent = value;
  };
  const sector = data.sectorLabels[item.sector] || item.sector || 'Chưa phân loại';
  const personName = item.authorName || item.studentName || 'Chưa cập nhật';
  const personLabel = item.authorName ? 'Tác giả' : 'Học viên';
  const pdfFile = item.fileName || data.featuredPdfFile;
  const topicContexts = {
    design: 'quá trình thiết kế và trải nghiệm sử dụng',
    social: 'các vấn đề xã hội, văn hóa và ngôn ngữ trong bối cảnh hiện nay',
    communication: 'hoạt động truyền thông và cách thông tin tiếp cận công chúng',
    business: 'hoạt động quản trị, kinh doanh và nhu cầu thực tế của tổ chức',
    technology: 'việc ứng dụng công nghệ để giải quyết một nhu cầu cụ thể',
    architecture: 'chất lượng không gian kiến trúc và sự phát triển bền vững của đô thị',
    tourism: 'trải nghiệm du lịch và sự phát triển của điểm đến',
    environment: 'những vấn đề môi trường và các hướng quản lý phù hợp'
  };
  const topicContext = topicContexts[item.sector] || 'một vấn đề thực tiễn thuộc lĩnh vực nghiên cứu';

  document.title = `${item.title} - VLU Research Hub`;
  setText('detailSector', sector);
  setText('detailTypeLabel', itemType === 'featured' ? 'Đề tài nổi bật' : 'Chi tiết đề tài nghiên cứu');
  setText('detailTitle', item.title);
  setText('detailProfileName', personName);
  setText('detailProfileRole', item.authorName ? 'Tác giả đề tài' : 'Học viên thực hiện');
  setText('detailProfileSupervisor', item.supervisorName || 'Chưa cập nhật');
  setText('detailProfileAcceptedDate', item.acceptedDate || 'Chưa cập nhật');
  setText(
    'detailBiography',
    item.biography || `${personName} là ${personLabel.toLocaleLowerCase('vi')} của đề tài này. Đây là phần tiểu sử mẫu; có thể thay bằng quá trình học tập, lĩnh vực chuyên môn và kinh nghiệm nghiên cứu đã được xác nhận.`
  );
  setText(
    'detailRationale',
    item.rationale || `Nội dung minh họa: đề tài “${item.title}” được lựa chọn để tìm hiểu ${topicContext}. Phần trình bày chính thức nên nêu bối cảnh, vấn đề thực tiễn và lý do người thực hiện quan tâm đến chủ đề.`
  );
  setText(
    'detailObjectives',
    item.objectives || 'Bản mẫu: làm rõ bối cảnh và các khái niệm liên quan, phân tích vấn đề theo mục tiêu nghiên cứu, sau đó trình bày nhận định hoặc hướng đề xuất. Hãy thay phần này bằng mục tiêu và phương pháp trong đề cương đã được duyệt.'
  );
  setText(
    'detailSummary',
    item.abstract || `Đây là phần giới thiệu minh họa cho đề tài “${item.title}”. Tóm tắt chính thức có thể trình bày câu hỏi nghiên cứu, cách tiếp cận, kết quả chính và đóng góp của công trình.`
  );

  const profileImagePath = item.authorImage || item.cardAuthorImage;
  const profileImage = document.getElementById('detailProfileImage');
  const profilePlaceholder = document.getElementById('detailProfilePlaceholder');
  if (profileImagePath) {
    profileImage.src = profileImagePath;
    profileImage.alt = `Ảnh ${personLabel.toLocaleLowerCase('vi')} ${personName}`;
    profileImage.hidden = false;
    profilePlaceholder.hidden = true;
  }

  const downloadLink = document.getElementById('thesisDownloadLink');
  const encodedPdfUrl = ['TỔNG HỢP LUẬN VĂN', pdfFile].map(encodeURIComponent).join('/');
  downloadLink.href = encodedPdfUrl;
  downloadLink.download = pdfFile;
  setText('downloadDescription', `Nhấn nút để tải tệp PDF: ${pdfFile}`);

  detail.hidden = false;

  const menuButton = document.getElementById('mobileNavToggle');
  const navigation = document.getElementById('primaryNavigation');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng');
      menuButton.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Mở menu điều hướng');
        menuButton.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }
})();
