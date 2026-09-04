(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme ---------- */
  var THEME_KEY = 'dd-theme';
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }
  (function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    applyTheme(saved === 'light' || saved === 'dark' ? saved : 'dark');
  })();
  document.getElementById('themeToggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });

  /* ---------- Hero stats ---------- */
  var heroStats = document.getElementById('heroStats');
  STATS.forEach(function (s) {
    var d = document.createElement('div');
    d.innerHTML =
      '<div class="stat-value">' + s.value + '</div>' +
      '<div class="stat-label">' + s.label + '</div>';
    heroStats.appendChild(d);
  });

  /* ---------- Marquee (doubled for seamless loop) ---------- */
  var marqueeTrack = document.getElementById('marqueeTrack');
  var logoCount = 6;
  function buildLogos() {
    var html = '';
    for (var pass = 0; pass < 2; pass++) {
      for (var i = 1; i <= logoCount; i++) {
        var n = String(i).padStart(2, '0');
        html += '<img src="assets/tlogo-' + n + '.png" alt="Client logo ' + i + '" />';
      }
    }
    return html;
  }
  marqueeTrack.innerHTML = buildLogos();

  /* ---------- Skills ---------- */
  var skillsRow = document.getElementById('skillsRow');
  SKILLS.forEach(function (name) {
    var chip = document.createElement('div');
    chip.className = 'skill-chip';
    chip.textContent = name;
    skillsRow.appendChild(chip);
  });

  /* ---------- Tools ---------- */
  var toolsRow = document.getElementById('toolsRow');
  TOOLS.forEach(function (t) {
    var item = document.createElement('div');
    item.className = 'tool-item';
    item.innerHTML =
      '<div class="tool-badge">' + t.code + '</div>' +
      '<div class="tool-name">' + t.name + '</div>';
    toolsRow.appendChild(item);
  });

  /* ---------- Guarantee ---------- */
  var guaranteeList = document.getElementById('guaranteeList');
  GUARANTEE_POINTS.forEach(function (g) {
    var row = document.createElement('div');
    row.className = 'guarantee-row';
    row.innerHTML =
      '<div class="guarantee-icon"></div>' +
      '<div><div class="guarantee-title">' + g.title + '</div><div class="guarantee-body">' + g.body + '</div></div>';
    guaranteeList.appendChild(row);
  });

  /* ---------- Testimonials ---------- */
  var testimonialsGrid = document.getElementById('testimonialsGrid');
  TESTIMONIALS.forEach(function (q) {
    var card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML =
      '<div class="testimonial-quote">&ldquo;' + q.quote + '&rdquo;</div>' +
      '<div class="testimonial-person"><div class="avatar"></div><div><div class="testimonial-name">' + q.name + '</div><div class="testimonial-role">' + q.role + '</div></div></div>';
    testimonialsGrid.appendChild(card);
  });

  /* ---------- Footer socials ---------- */
  var footerSocials = document.getElementById('footerSocials');
  SOCIAL_LINKS.forEach(function (soc) {
    var a = document.createElement('a');
    a.className = 'social-icon';
    a.href = soc.href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', soc.label);
    a.innerHTML = soc.icon;
    footerSocials.appendChild(a);
  });

  /* ---------- Work: tabs + grid ---------- */
  var tabsRow = document.getElementById('tabsRow');
  var workGrid = document.getElementById('workGrid');
  var activeTab = 'Brand Identity';

  function renderTabs() {
    tabsRow.innerHTML = '';
    TAB_LIST.forEach(function (label) {
      var btn = document.createElement('button');
      btn.className = 'tab-btn' + (label === activeTab ? ' active' : '');
      btn.textContent = label;
      btn.addEventListener('click', function () {
        activeTab = label;
        renderTabs();
        renderWork();
      });
      tabsRow.appendChild(btn);
    });
  }

  function renderWork() {
    workGrid.innerHTML = '';
    WORK_DATA.filter(function (w) { return w.category === activeTab; }).forEach(function (w) {
      var hasLink = !!w.hasCaseStudy;
      var el = document.createElement(hasLink ? 'a' : 'div');
      el.className = 'work-card' + (hasLink ? ' has-link' : '');
      if (hasLink) el.href = 'case-study.html?project=' + w.slug;

      var fillHtml = w.image
        ? '<div class="bg" style="background-image:url(' + w.image + ')"></div>'
        : '<div class="placeholder-fill">' + w.placeholder + '</div>';

      el.innerHTML =
        fillHtml +
        '<div class="wash"></div>' +
        '<div class="darken"></div>' +
        '<div class="accent-bar"></div>' +
        '<div class="label">' + w.name + '</div>';
      workGrid.appendChild(el);
    });
  }

  renderTabs();
  renderWork();

  /* ---------- Float tags switch work tab ---------- */
  document.querySelectorAll('.float-tag[data-tab]').forEach(function (tag) {
    tag.addEventListener('click', function () {
      activeTab = tag.getAttribute('data-tab');
      renderTabs();
      renderWork();
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add('is-revealed'); });
  } else if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-revealed'); });
  }
})();
