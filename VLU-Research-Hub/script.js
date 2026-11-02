/* Danh sách đề tài và PDF dùng chung được khai báo trong thesis-data.js. */
const researchData = window.VLUResearchHubData;
const localThesisPdfFiles = researchData.theses;
const sectorLabels = researchData.sectorLabels;

// ==========================================================================
// TẠO THẺ ĐỀ TÀI (ĐỒNG BỘ NỀN ĐỎ BURGUNDY CHO TẤT CẢ 8 ĐỀ TÀI NHƯ 2 THẺ ĐẦU)
// ==========================================================================
function renderLocalThesisPdfs() {
  const researchGrid = document.getElementById('researchGrid');
  if (!researchGrid) return;

  localThesisPdfFiles.forEach(({ id, fileName, title: customTitle, sector, studentName, supervisorName, acceptedDate, cardAuthorImage, cardAuthorImageMode }, index) => {
    const title = customTitle || fileName
      .replace(/\.pdf$/i, '')
      .replace(/_+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const card = document.createElement('div');
    card.className = 'research-card';
    card.dataset.sector = sector;
    card.dataset.researchId = id;
    card.dataset.originalOrder = index;
    card.dataset.title = title;
    card.dataset.studentName = studentName || '';
    card.dataset.supervisorName = supervisorName || '';
    card.dataset.acceptedDate = acceptedDate || '';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Mở trang chi tiết đề tài: ${title}`);

    // ĐỒNG BỘ: Tất cả các thẻ đều có lớp nền đỏ đô sang trọng như 2 thẻ đầu
    card.classList.add('has-author-image');

    const authorLayer = document.createElement('div');
    authorLayer.className = 'card-author-layer';
    authorLayer.setAttribute('aria-hidden', 'true');

    // [CHỖ HIỂN THỊ ẢNH TÁC GIẢ TRÊN THẺ]:
    // Nếu đề tài có ảnh tác giả (như 2 thẻ đầu), đưa ảnh vào lớp nền;
    // Nếu chưa có ảnh thì giữ nguyên nền màu đỏ đô sang trọng, chữ trắng nổi bật.
    if (cardAuthorImage) {
      card.classList.add(`author-image-${cardAuthorImageMode || 'cutout'}`);

      const authorImage = document.createElement('img');
      authorImage.className = `card-author-image card-author-image-${cardAuthorImageMode || 'cutout'}`;
      authorImage.src = cardAuthorImage;
      authorImage.alt = '';
      authorLayer.appendChild(authorImage);
    }
    card.appendChild(authorLayer);

    const header = document.createElement('div');
    header.className = 'card-header';
    const tag = document.createElement('span');
    tag.className = 'tag sector-tag';
    tag.textContent = sectorLabels[sector] || sector;
    header.appendChild(tag);

    const titleElement = document.createElement('h3');
    titleElement.className = 'thesis-title';
    titleElement.textContent = title;

    const metadata = document.createElement('div');
    metadata.className = 'card-meta';
    [
      ['Học viên', studentName],
      ['GVHD', supervisorName],
      ['Ngày được chấp nhận', acceptedDate]
    ].forEach(([label, value]) => {
      const row = document.createElement('p');
      row.className = 'card-meta-row';

      const labelElement = document.createElement('strong');
      labelElement.textContent = `${label}:`;

      const valueElement = document.createElement('span');
      valueElement.textContent = value || 'Chưa cập nhật';

      row.append(labelElement, valueElement);
      metadata.appendChild(row);
    });

    // Bấm vào thẻ để mở trang chi tiết đề tài
    const openDocument = () => openThesisDetail(id);
    card.addEventListener('click', openDocument);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDocument();
      }
    });

    card.append(header, titleElement, metadata);
    researchGrid.appendChild(card);
  });

  // Lưới đề tài luôn có khoảng đệm phía trên cho các thẻ nền đỏ đồng bộ
  researchGrid.classList.add('has-author-previews');
}

// Chuẩn hóa tiếng Việt để tìm kiếm không phân biệt chữ hoa/thường và dấu.
function normalizeResearchSearchText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .trim();
}

function acceptedDateToIso(value) {
  const dateText = String(value || '').trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateText)) return dateText;

  const match = dateText.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (!match) return '';

  const [, day, month, year] = match;
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

// Gắn ô tìm kiếm cho panel; bộ lọc chữ và ngày được kết hợp với khối ngành đang chọn.
function setupResearchSearch(panelId, gridId, emptyMessageId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const toolbar = panel.querySelector('[data-search-toolbar]');
  if (!toolbar) return;

  const searchInput = toolbar.querySelector('.research-search-input');
  const searchField = toolbar.querySelector('.research-search-field');
  const acceptedDateInput = toolbar.querySelector('.research-search-date');
  const clearButton = toolbar.querySelector('.research-search-clear');

  const applyCurrentFilters = () => {
    const selectedButton = panel.querySelector('.tab-btn.active') || panel.querySelector('.tab-btn');
    filterResearchPanel(
      panelId,
      gridId,
      emptyMessageId,
      panel.dataset.activeSector || 'all',
      selectedButton
    );
  };

  searchInput.addEventListener('input', applyCurrentFilters);
  searchField.addEventListener('change', applyCurrentFilters);
  acceptedDateInput.addEventListener('change', applyCurrentFilters);
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    searchField.value = 'all';
    acceptedDateInput.value = '';
    applyCurrentFilters();
    searchInput.focus();
  });

  applyCurrentFilters();
}

// BANNER SLIDER: tự chuyển slide liên tục và cập nhật chấm điều hướng.
document.addEventListener('DOMContentLoaded', function () {
  renderLocalThesisPdfs();
  setupResearchSearch('mastersPanel', 'researchGrid', 'emptySectorMessage');
  setupResearchSearch('doctoratePanel', 'doctoralResearchGrid', 'doctoralEmptyMessage');

  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const primaryNavigation = document.getElementById('primaryNavigation');
  if (mobileNavToggle && primaryNavigation) {
    const toggleNavigation = () => {
      const isOpen = primaryNavigation.classList.toggle('is-open');
      mobileNavToggle.setAttribute('aria-expanded', String(isOpen));
      mobileNavToggle.setAttribute('aria-label', isOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng');
      mobileNavToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };

    mobileNavToggle.addEventListener('click', toggleNavigation);
    primaryNavigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        primaryNavigation.classList.remove('is-open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.setAttribute('aria-label', 'Mở menu điều hướng');
        mobileNavToggle.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }

  const sliderTrack = document.getElementById('sliderTrack');
  let slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let slideInterval = null;

  if (!sliderTrack || !slides.length) return;

  // Nhân bản slide đầu để vòng trượt nối lại mượt sau slide cuối.
  const firstSlideClone = slides[0].cloneNode(true);
  sliderTrack.appendChild(firstSlideClone);

  let currentIndex = 0;
  const totalOriginalSlides = slides.length;
  let isTransitioning = false;
  let wrapFallbackTimer = null;

  // Đánh dấu chấm điều hướng ứng với slide đang hiển thị.
  function updateDots(index) {
    const activeIndex = index % totalOriginalSlides;
    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Đưa track từ slide nhân bản về slide đầu thật sau khi chuyển cảnh kết thúc.
  function resetToFirstAfterWrap(event) {
    if (event && (event.target !== sliderTrack || event.propertyName !== 'transform')) return;
    if (currentIndex !== totalOriginalSlides) return;

    if (wrapFallbackTimer) clearTimeout(wrapFallbackTimer);
    sliderTrack.removeEventListener('transitionend', resetToFirstAfterWrap);
    sliderTrack.style.transition = 'none';
    currentIndex = 0;
    sliderTrack.style.transform = 'translateX(0%)';
    requestAnimationFrame(() => {
      isTransitioning = false;
    });
  }

  // Chuyển trực tiếp đến slide được chọn bằng các chấm.
  function goToSlide(index) {
    if (isTransitioning) return;
    currentIndex = index;
    sliderTrack.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots(currentIndex);

    if (currentIndex === totalOriginalSlides) {
      isTransitioning = true;
      sliderTrack.addEventListener('transitionend', resetToFirstAfterWrap);
      wrapFallbackTimer = setTimeout(resetToFirstAfterWrap, 850);
    }
  }

  // Chuyển sang slide kế tiếp.
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function startAutoSlider() {
    stopAutoSlider();
    slideInterval = setInterval(nextSlide, 3500);
  }

  function stopAutoSlider() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  window.setSlide = function (index) {
    stopAutoSlider();
    goToSlide(index);
    startAutoSlider();
  };

  startAutoSlider();
});

// Chuyển giữa panel Thạc sĩ và Tiến sĩ nếu người dùng dùng nút chọn bậc.
function showProgramLevel(level, selectedButton) {
  const mastersPanel = document.getElementById('mastersPanel');
  const doctoratePanel = document.getElementById('doctoratePanel');
  const programLevelButtons = document.querySelectorAll('.program-level-btn');

  if (mastersPanel) mastersPanel.hidden = level !== 'masters';
  if (doctoratePanel) doctoratePanel.hidden = level !== 'doctorate';

  programLevelButtons.forEach(button => {
    const isSelected = button === selectedButton;
    button.classList.toggle('active', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });

  // Khi mở một bậc học, hiển thị tất cả đề tài và cập nhật thông báo rỗng ban đầu.
  if (level === 'masters' && mastersPanel) {
    filterResearchPanel('mastersPanel', 'researchGrid', 'emptySectorMessage', 'all', mastersPanel.querySelector('.tab-btn'));
  } else if (level === 'doctorate' && doctoratePanel) {
    filterResearchPanel('doctoratePanel', 'doctoralResearchGrid', 'doctoralEmptyMessage', 'all', doctoratePanel.querySelector('.tab-btn'));
  }
}

// Lọc thẻ đề tài theo data-sector.
function filterSector(sectorKey, selectedButton) {
  filterResearchPanel('mastersPanel', 'researchGrid', 'emptySectorMessage', sectorKey, selectedButton);
}

// Lọc thẻ đề tài Tiến sĩ theo data-sector.
function filterDoctoralSector(sectorKey, selectedButton) {
  filterResearchPanel('doctoratePanel', 'doctoralResearchGrid', 'doctoralEmptyMessage', sectorKey, selectedButton);
}

// Hàm lọc dùng chung: cập nhật nút đang chọn, ẩn/hiện thẻ và báo khi chưa có đề tài.
function filterResearchPanel(panelId, gridId, emptyMessageId, sectorKey, selectedButton) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  panel.dataset.activeSector = sectorKey;

  const tabBtns = panel.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));
  if (selectedButton) selectedButton.classList.add('active');

  const cards = panel.querySelectorAll(`#${gridId} .research-card`);
  const searchToolbar = panel.querySelector('[data-search-toolbar]');
  const searchInput = searchToolbar?.querySelector('.research-search-input');
  const searchField = searchToolbar?.querySelector('.research-search-field');
  const acceptedDateInput = searchToolbar?.querySelector('.research-search-date');
  const searchCount = searchToolbar?.querySelector('.research-search-count');
  const query = normalizeResearchSearchText(searchInput?.value || '');
  const fieldKey = searchField?.value || 'all';
  const acceptedDateFilter = acceptedDateInput?.value || '';
  const searchIsActive = Boolean(query || acceptedDateFilter);

  let visibleCards = 0;
  cards.forEach(card => {
    const sectorMatches = sectorKey === 'all' || card.getAttribute('data-sector') === sectorKey;
    const cardSearchValues = {
      title: card.dataset.title || card.querySelector('.thesis-title')?.textContent || '',
      studentName: card.dataset.studentName || '',
      supervisorName: card.dataset.supervisorName || '',
      acceptedDate: card.dataset.acceptedDate || ''
    };
    const fieldsToSearch = fieldKey === 'all'
      ? Object.values(cardSearchValues)
      : [cardSearchValues[fieldKey] || ''];
    const textMatches = !query || fieldsToSearch.some(value =>
      normalizeResearchSearchText(value).includes(query)
    );
    const dateMatches = !acceptedDateFilter
      || acceptedDateToIso(cardSearchValues.acceptedDate) === acceptedDateFilter;

    if (sectorMatches && textMatches && dateMatches) {
      card.style.display = 'flex';
      visibleCards++;
    } else {
      card.style.display = 'none';
    }
  });

  const emptyMessage = document.getElementById(emptyMessageId);
  if (searchCount) {
    searchCount.textContent = searchIsActive
      ? `Tìm thấy ${visibleCards} đề tài`
      : `Đang hiển thị ${visibleCards} đề tài`;
  }

  if (emptyMessage) {
    if (!emptyMessage.dataset.defaultMessage) {
      emptyMessage.dataset.defaultMessage = emptyMessage.textContent;
    }
    emptyMessage.hidden = visibleCards > 0;
    emptyMessage.textContent = visibleCards === 0 && searchIsActive
      ? 'Không tìm thấy đề tài phù hợp.'
      : emptyMessage.dataset.defaultMessage;
  }
}

// Mở trang chi tiết; PDF được tải từ hộp chọn ở cuối trang đó.
function openThesisDetail(id, type = 'thesis') {
  const query = new URLSearchParams({ id, type });
  window.location.href = `thesis.html?${query.toString()}`;
}
