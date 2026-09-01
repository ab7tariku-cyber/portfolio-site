(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('project');
  var project = (slug && PROJECTS[slug]) ? PROJECTS[slug] : PROJECTS.lhc;

  document.title = project.name + ' — Abraham Tariku';

  /* ---------- Hero ---------- */
  var csHero = document.getElementById('csHero');
  csHero.innerHTML = project.heroImage
    ? '<img src="' + project.heroImage + '" alt="' + project.name + '" />'
    : '<div class="placeholder-fill" style="position:absolute;inset:0;">Hero image for ' + project.name + '</div>';

  /* ---------- About ---------- */
  document.getElementById('csMetaBrand').textContent = 'Brand — ' + project.name;
  document.getElementById('csMetaType').textContent = 'Type — ' + project.category;
  document.getElementById('csHeadline').textContent = project.headline;
  document.getElementById('csOverview1').textContent = project.overview1;
  document.getElementById('csOverview2').textContent = project.overview2;

  /* ---------- Gallery ---------- */
  var galleryImages = project.gallery || [];
  var csGallery = document.getElementById('csGallery');
  for (var i = 0; i < 13; i++) {
    var item = document.createElement('div');
    item.className = 'cs-gallery-item';
    var img = galleryImages[i];
    item.innerHTML = img
      ? '<img src="' + img + '" alt="" />'
      : '<div class="placeholder-fill" style="position:absolute;inset:0;">Mockup ' + (i + 1) + '</div>';
    csGallery.appendChild(item);
  }

  /* ---------- Next project ---------- */
  var idx = ALL_SLUGS.indexOf(project.slug);
  var nextSlug = ALL_SLUGS[(idx + 1) % ALL_SLUGS.length];
  var nextProject = PROJECTS[nextSlug];

  document.getElementById('nextProjectLink').href = 'case-study.html?project=' + nextSlug;
  document.getElementById('nextProjectName').textContent = nextProject.name + ' →';
  var nextInner = document.getElementById('nextProjectInner');
  if (nextProject.heroImage) {
    var img = document.createElement('img');
    img.src = nextProject.heroImage;
    img.alt = nextProject.name;
    nextInner.insertBefore(img, nextInner.firstChild);
  } else {
    var ph = document.createElement('div');
    ph.className = 'placeholder-fill';
    ph.style.position = 'absolute';
    ph.style.inset = '0';
    ph.textContent = nextProject.name + ' visual';
    nextInner.insertBefore(ph, nextInner.firstChild);
  }
})();
