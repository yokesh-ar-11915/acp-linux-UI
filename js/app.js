/* ===== Application Control Plus — SPA Router & UI Logic ===== */
(function () {
  'use strict';

  /* --- DOM refs --- */
  const topNav        = document.getElementById('topNav');
  const overflowBtn   = document.getElementById('overflowBtn');
  const overflowMenu  = document.getElementById('overflowMenu');
  const sidebar       = document.getElementById('sidebar');
  const sidebarNav    = document.getElementById('sidebarNav');
  const pageContent   = document.getElementById('pageContent');
  const collapseBtn   = document.getElementById('sidebarCollapseBtn');
  const userMenu      = document.getElementById('userMenu');
  const userDropdown  = document.getElementById('userDropdown');

  /* Modules that appear directly in the topnav (all tabs are visible now) */
  const VISIBLE_TABS = ['overview', 'manage', 'policies', 'insight', 'reports', 'settings'];

  /* ---------- STATE ---------- */
  let currentModule = 'overview';
  let currentPage   = 'dashboard';
  let sidebarCollapsed = false;

  /* ================================================================
   *  ROUTING
   * ================================================================ */
  function navigate(moduleKey, pageId) {
    const mod = MENU[moduleKey];
    if (!mod) return;

    currentModule = moduleKey;

    /* --- Highlight topnav --- */
    topNav.querySelectorAll('.topnav-item').forEach(a => a.classList.remove('active'));
    const directTab = topNav.querySelector(`.topnav-item[data-module="${moduleKey}"]`);
    if (directTab) directTab.classList.add('active');

    /* --- Overflow highlight --- */
    overflowMenu.querySelectorAll('a[data-module]').forEach(a => a.classList.remove('active'));
    const overflowLink = overflowMenu.querySelector(`a[data-module="${moduleKey}"]`);
    if (overflowLink) overflowLink.classList.add('active');

    /* --- Sidebar --- */
    if (mod.hasSidebar) {
      sidebar.classList.remove('hidden');
      sidebar.classList.toggle('collapsed', sidebarCollapsed);
      renderSidebar(mod.sections, pageId);
      const firstItem = pageId || mod.sections[0]?.items[0]?.id;
      showPage(firstItem || moduleKey);
    } else {
      sidebar.classList.add('hidden');
      sidebarNav.innerHTML = '';
      showPage(pageId || moduleKey);
    }

    /* Close overflow menu */
    overflowMenu.classList.remove('open');
  }

  function renderSidebar(sections, activeId) {
    let html = '';
    let firstId = null;
    sections.forEach(sec => {
      html += `<div class="sidebar-section"><div class="sidebar-section-title">${sec.title}</div><ul>`;
      sec.items.forEach(item => {
        if (!firstId) firstId = item.id;
        const cls = item.id === activeId ? ' class="active"' : '';
        if (item.flyout) {
          const flyoutItems = item.flyout.map(f =>
            `<a href="#" class="sidebar-flyout-item" onclick="${f.action};this.closest('.sidebar-flyout-wrap').classList.remove('open');return false"><i class="${f.icon}"></i> ${f.label}</a>`
          ).join('');
          html += `<li class="sidebar-flyout-wrap" onmouseenter="positionFlyout(this)">`;
          html += `<a href="#" data-page="${item.id}" data-flyout="true"${cls}>${item.label} <i class="fa fa-caret-right" style="float:right;font-size:10px;margin-top:3px;color:#999"></i></a>`;
          html += `<div class="sidebar-flyout">${flyoutItems}</div>`;
          html += `</li>`;
        } else {
          html += `<li><a href="#${currentModule}/${item.id}" data-page="${item.id}"${cls}>${item.label}</a></li>`;
        }
      });
      html += '</ul></div>';
    });
    sidebarNav.innerHTML = html;

    /* If no explicit activeId, mark the first */
    if (!activeId && firstId) {
      const first = sidebarNav.querySelector(`a[data-page="${firstId}"]`);
      if (first) first.classList.add('active');
    }

    /* Sidebar click */
    sidebarNav.querySelectorAll('a[data-page]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        /* Flyout items toggle their sub-menu instead of navigating */
        if (a.dataset.flyout) {
          const wrap = a.closest('.sidebar-flyout-wrap');
          /* Close any other open flyouts first */
          sidebarNav.querySelectorAll('.sidebar-flyout-wrap.open').forEach(w => {
            if (w !== wrap) w.classList.remove('open');
          });
          wrap.classList.toggle('open');
          return;
        }
        const pid = a.dataset.page;
        sidebarNav.querySelectorAll('a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        showPage(pid);
        window.location.hash = `${currentModule}/${pid}`;
      });
    });
  }

  function showPage(pageId) {
    currentPage = pageId;
    const gen = PAGES[pageId];
    pageContent.innerHTML = gen ? gen() : `<div class="content-inner" style="padding:60px;text-align:center;color:#999"><i class="fa fa-file" style="font-size:48px;display:block;margin-bottom:12px"></i>Page "${pageId}" content not yet available.</div>`;
    pageContent.scrollTop = 0;
  }

  /* ================================================================
   *  HASH ROUTER
   * ================================================================ */
  function onHashChange() {
    const hash = (window.location.hash || '#overview').slice(1);
    const parts = hash.split('/');
    const mod = parts[0] || 'overview';
    const page = parts[1] || null;
    navigate(mod, page);
  }

  /* ================================================================
   *  UI EVENTS
   * ================================================================ */

  /* -- Topnav tab clicks -- */
  topNav.querySelectorAll('.topnav-item').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const mod = a.dataset.module;
      window.location.hash = mod;
    });
  });

  /* -- Overflow "..." toggle -- */
  overflowBtn.addEventListener('click', e => {
    e.stopPropagation();
    overflowMenu.classList.toggle('open');
  });

  /* -- Overflow menu item clicks -- */
  overflowMenu.querySelectorAll('a[data-module]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      window.location.hash = a.dataset.module;
    });
  });

  /* -- Close overflow on outside click -- */
  document.addEventListener('click', e => {
    overflowMenu.classList.remove('open');
    userDropdown.classList.remove('open');
    /* Close any open button dropdowns */
    document.querySelectorAll('.btn-dropdown-wrap.open').forEach(el => {
      if (!el.contains(e.target)) el.classList.remove('open');
    });
    /* Close sidebar flyouts */
    document.querySelectorAll('.sidebar-flyout-wrap.open').forEach(el => {
      if (!el.contains(e.target)) el.classList.remove('open');
    });
  });

  /* -- Sidebar collapse -- */
  collapseBtn.addEventListener('click', () => {
    sidebarCollapsed = !sidebarCollapsed;
    sidebar.classList.toggle('collapsed', sidebarCollapsed);
    collapseBtn.querySelector('i').className = sidebarCollapsed
      ? 'fa fa-angle-double-right'
      : 'fa fa-angle-double-left';
  });

  /* -- User dropdown -- */
  userMenu.addEventListener('click', e => {
    e.stopPropagation();
    userDropdown.classList.toggle('open');
  });

  /* ================================================================
   *  INIT
   * ================================================================ */
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
})();

/** Position a sidebar flyout using fixed positioning so it isn't clipped by sidebar overflow */
function positionFlyout(wrapEl) {
  const flyout = wrapEl.querySelector('.sidebar-flyout');
  if (!flyout) return;
  const rect = wrapEl.getBoundingClientRect();
  flyout.style.left = rect.right + 'px';
  flyout.style.top  = rect.top + 'px';
}
