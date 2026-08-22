/**
 * RAJADHANI GROUP OF INSTITUTION, BENGALURU
 * Official Website JavaScript Logic & Interactivity
 */

// ================= PROGRAM DATA DEFINITIONS =================
const PROGRAM_DETAILS = {
  'pu-science': {
    title: 'PU Science (Pre-University)',
    level: 'Pre-University (Karnataka Pre-University Board)',
    duration: '2 Years (Four Semesters / Annual Examination)',
    description: 'A comprehensive pre-university science curriculum structured to build deep theoretical mastery and experiential experimental skills across foundational sciences.',
    combinations: ['PCMB: Physics, Chemistry, Mathematics, Biology', 'PCMC: Physics, Chemistry, Mathematics, Computer Science', 'PCME: Physics, Chemistry, Mathematics, Electronics'],
    highlights: [
      'Dedicated science labs for Physics, Chemistry, Biology, and Computer Science',
      'Intensive coaching for CET, NEET, and JEE foundation',
      'Regular practical demonstrations and conceptual problem solving',
      'Continuous evaluation and parent-mentor feedback loops'
    ],
    eligibility: 'Pass in 10th Standard (SSLC / CBSE / ICSE or recognized equivalent examination).',
    careers: ['Engineering (B.E / B.Tech)', 'Medicine & Healthcare (MBBS / BDS / Allied Health)', 'Pure Sciences & Research (B.Sc / Integrated M.Sc)', 'Computer Applications & Data Sciences (BCA)']
  },
  'pu-commerce': {
    title: 'PU Commerce (Pre-University)',
    level: 'Pre-University (Karnataka Pre-University Board)',
    duration: '2 Years (Four Semesters / Annual Examination)',
    description: 'A rigorous academic grounding in commerce, corporate accounting, economic fundamentals, business organization, and quantitative methods.',
    combinations: ['EBAC: Economics, Business Studies, Accountancy, Computer Science', 'CEBA: Computer Science, Economics, Business Studies, Accountancy', 'HEBA: History, Economics, Business Studies, Accountancy'],
    highlights: [
      'Practical commerce lab for business calculations and accountancy spreadsheets',
      'Foundation orientation for CA / CS / CMA professional examinations',
      'Industry guest lectures on corporate management and market dynamics',
      'Development of analytical, numerical, and business reasoning skills'
    ],
    eligibility: 'Pass in 10th Standard (SSLC / CBSE / ICSE or recognized equivalent examination).',
    careers: ['Chartered Accountancy (CA / CMA / CS)', 'Corporate Finance & Banking (B.Com / BBA)', 'Business Economics & Analytics', 'Corporate Law (BA.LLB / BBA.LLB)']
  },
  'bca': {
    title: 'BCA (Bachelor of Computer Applications)',
    level: 'Undergraduate Degree Program',
    duration: '3 Years (6 Semesters, Affiliated Program)',
    description: 'An advanced computing and software engineering program designed to produce skilled programmers, systems analysts, database administrators, and full-stack developers.',
    combinations: ['Core: Data Structures, Object-Oriented Programming, Web Technologies, Database Systems, Cloud Computing, Operating Systems'],
    highlights: [
      'Modern computer science lab equipped with latest development environments',
      'Project-based capstone assignments each semester',
      'Training in Java, Python, Web Frameworks, SQL, and Network Protocols',
      'Technical seminars and mock coding interviews for campus placements'
    ],
    eligibility: 'Pass in 10+2 / PUC (Science or Commerce with Mathematics / Business Mathematics / Computer Science) or equivalent.',
    careers: ['Software Developer / Full-Stack Engineer', 'Systems Analyst & Cloud Administrator', 'Database Administrator', 'Postgraduate Studies (MCA / M.Sc Computer Science / MBA)']
  },
  'bcom': {
    title: 'B.Com (Bachelor of Commerce)',
    level: 'Undergraduate Degree Program',
    duration: '3 Years (6 Semesters, Affiliated Program)',
    description: 'A comprehensive degree in corporate accounting, financial analysis, direct & indirect taxation, corporate governance, auditing standards, and banking operations.',
    combinations: ['Core: Financial Accounting, Advanced Corporate Accounting, Income Tax, GST, Cost Accounting, Corporate Law, Financial Management'],
    highlights: [
      'Commerce laboratory equipped with accounting automation tools',
      'Regular case studies in corporate tax planning and portfolio management',
      'Workshops on tally, modern fintech tools, and financial modeling',
      'Direct preparation assistance for competitive banking and civil services exams'
    ],
    eligibility: 'Pass in 10+2 / Pre-University (PUC) Commerce, Science, or Arts equivalent.',
    careers: ['Financial Analyst / Corporate Accountant', 'Tax Consultant & Audit Associate', 'Banking Operations Officer', 'Professional Qualifications (CA / CMA / CS / MBA / M.Com)']
  },
  'bba': {
    title: 'BBA (Bachelor of Business Administration)',
    level: 'Undergraduate Degree Program',
    duration: '3 Years (6 Semesters, Affiliated Program)',
    description: 'A dynamic business and management curriculum developing strategic leadership, marketing innovation, human capital management, and entrepreneurial execution.',
    combinations: ['Core: Principles of Management, Marketing Management, Human Resource Management, Financial Management, Organizational Behavior, Business Law'],
    highlights: [
      'Leadership and business communication development seminars',
      'Interactive management games and business plan pitching forums',
      'Corporate industrial visits to leading Bengaluru tech & industrial hubs',
      'Practical exposure to market research and digital business models'
    ],
    eligibility: 'Pass in 10+2 / Pre-University (PUC) or equivalent in any discipline.',
    careers: ['Business Development Executive', 'Marketing & Sales Strategist', 'Human Resources Specialist', 'Entrepreneur & Startup Founder', 'Higher Education (MBA / PGDM)']
  }
};

// ================= DOM CONTENT LOADED EVENT =================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFacultyFilter();
  initScrollAnimations();
  initFormHandlers();
  setCurrentYear();
  initModalBackdropClicks();
});

// ================= 1. NAVIGATION & SCROLLSPY =================
function initNavigation() {
  const navbar = document.getElementById('navbar-header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Sticky Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy highlighting
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile Drawer Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close mobile drawer when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          closeMobileNav();
        }
      });
    });

    // Close when clicking outside menu on mobile
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        closeMobileNav();
      }
    });
  }

  function openMobileNav() {
    navMenu.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

// ================= 2. FACULTY FILTERING =================
function initFacultyFilter() {
  const filterBtns = document.querySelectorAll('.faculty-filter .filter-btn');
  const facultyCards = document.querySelectorAll('.faculty-grid .faculty-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards
      facultyCards.forEach(card => {
        const dept = card.getAttribute('data-dept');
        if (targetFilter === 'all' || dept === targetFilter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// ================= 3. SCROLL REVEAL ANIMATIONS =================
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

// ================= 4. MODALS & PROGRAM DETAILS =================
let selectedProgramForApply = '';

function showProgramModal(programId) {
  const data = PROGRAM_DETAILS[programId];
  if (!data) return;

  selectedProgramForApply = data.title;
  const modalContent = document.getElementById('program-modal-content');
  const modalTitle = document.getElementById('program-modal-title');

  modalTitle.textContent = data.title;

  let combinationsHtml = '';
  if (data.combinations && data.combinations.length > 0) {
    combinationsHtml = `
      <div style="margin-top: 1rem;">
        <h5 style="color: var(--accent-navy); margin-bottom: 0.35rem;">Subject Combinations / Core Areas:</h5>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; line-height: 1.6; color: var(--text-body);">
          ${data.combinations.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  let highlightsHtml = '';
  if (data.highlights && data.highlights.length > 0) {
    highlightsHtml = `
      <div style="margin-top: 1rem;">
        <h5 style="color: var(--accent-navy); margin-bottom: 0.35rem;">Program Highlights:</h5>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; line-height: 1.6; color: var(--text-body);">
          ${data.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  let careersHtml = '';
  if (data.careers && data.careers.length > 0) {
    careersHtml = `
      <div style="margin-top: 1rem;">
        <h5 style="color: var(--accent-navy); margin-bottom: 0.35rem;">Career Pathways & Higher Studies:</h5>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.35rem;">
          ${data.careers.map(car => `<span class="curriculum-tag">${car}</span>`).join('')}
        </div>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; background: var(--color-bg-alt); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
        <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-navy);">${data.level}</span>
        <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted);">${data.duration}</span>
      </div>
      
      <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.65; margin-top: 0.5rem;">
        ${data.description}
      </p>

      ${combinationsHtml}
      ${highlightsHtml}

      <div style="margin-top: 1rem; background: var(--accent-blue-light); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-blue-border);">
        <h5 style="color: var(--accent-navy); font-size: 0.88rem; margin-bottom: 0.2rem;">Eligibility Criteria:</h5>
        <p style="font-size: 0.85rem; color: var(--text-body); margin: 0;">${data.eligibility}</p>
      </div>

      ${careersHtml}
    </div>
  `;

  openModal('program-modal');
}

function openApplyFromProgram() {
  closeModal('program-modal');
  openApplyModal(selectedProgramForApply);
}

function openApplyModal(programName) {
  const select = document.getElementById('apply-program-select');
  if (select && programName) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(programName.toLowerCase()) || select.options[i].value.toLowerCase().includes(programName.toLowerCase())) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  openModal('apply-modal');
}

function showProcedureModal() {
  openModal('procedure-modal');
}

function showPrivacyModal() {
  openModal('privacy-modal');
}

function showTermsModal() {
  openModal('terms-modal');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus close button or first input for accessibility
    const firstInput = modal.querySelector('input, select, textarea, button.modal-close-btn');
    if (firstInput) firstInput.focus();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initModalBackdropClicks() {
  const modals = document.querySelectorAll('.modal-backdrop');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.getAttribute('id'));
      }
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          closeModal(modal.getAttribute('id'));
        }
      });
    }
  });
}

// ================= 5. FORM HANDLING & VALIDATIONS =================
function initFormHandlers() {
  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !phone || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Simulate successful submission
      contactForm.reset();
      showToast('Thank you! Your academic inquiry has been received. Our admission desk will reach out shortly.', 'success');
    });
  }

  // Online Application Form
  const applyForm = document.getElementById('online-apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('applicant-name').value.trim();
      const dob = document.getElementById('applicant-dob').value.trim();
      const parent = document.getElementById('parent-name').value.trim();
      const phone = document.getElementById('applicant-phone').value.trim();
      const email = document.getElementById('applicant-email').value.trim();
      const program = document.getElementById('apply-program-select').value;

      if (!name || !dob || !parent || !phone || !email || !program) {
        showToast('Please complete all mandatory application fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      applyForm.reset();
      closeModal('apply-modal');
      showToast(`Application successfully submitted for ${program}! Our admissions office will contact you for document verification.`, 'success');
    });
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ================= 6. TOAST NOTIFICATIONS =================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  if (type === 'error') {
    toast.style.borderLeftColor = '#ef4444';
  } else {
    toast.style.borderLeftColor = 'var(--accent-emerald)';
  }

  toast.innerHTML = `
    <span style="font-weight: 600;">${type === 'error' ? 'Notice:' : 'Confirmed:'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 20);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4500);
}

// ================= 7. FOOTER CURRENT YEAR =================
function setCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Expose modal handlers to global window for inline HTML onclick attributes
window.showProgramModal = showProgramModal;
window.openApplyFromProgram = openApplyFromProgram;
window.openApplyModal = openApplyModal;
window.showProcedureModal = showProcedureModal;
window.showPrivacyModal = showPrivacyModal;
window.showTermsModal = showTermsModal;
window.closeModal = closeModal;
