/* ===== Endpoint Central — Application Control SPA Router & UI Logic ===== */
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
  const demoFab       = document.getElementById('demoFab');
  const demoFabClose  = document.getElementById('demoFabClose');

  /* ---------- STATE ---------- */
  let currentPage = 'dashboard';
  let sidebarCollapsed = false;

  /* ================================================================
   *  SIDEBAR RENDERING
   * ================================================================ */
  function renderSidebar(activeId) {
    const mod = EC_MENU['application-control'];
    if (!mod) return;

    let html = '';
    let firstId = null;
    mod.sections.forEach(sec => {
      html += `<div class="sidebar-section"><div class="sidebar-section-title">${sec.title}</div><ul>`;
      sec.items.forEach(item => {
        if (!firstId) firstId = item.id;
        const cls = item.id === activeId ? ' class="active"' : '';
        if (item.flyout) {
          const flyoutItems = item.flyout.map(f =>
            `<a href="#" class="sidebar-flyout-item" onclick="${f.action};this.closest('.sidebar-flyout-wrap').classList.remove('open');return false"><i class="${f.icon}"></i> ${f.label}</a>`
          ).join('');
          html += `<li class="sidebar-flyout-wrap" onmouseenter="ecPositionFlyout(this)">`;
          html += `<a href="#" data-page="${item.id}" data-flyout="true"${cls}>${item.label} <i class="fa fa-caret-right" style="float:right;font-size:10px;margin-top:3px;color:#999"></i></a>`;
          html += `<div class="sidebar-flyout">${flyoutItems}</div>`;
          html += `</li>`;
        } else {
          const badgeHtml = item.badge ? ` <span style="background:#e53935;color:#fff;font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px;margin-left:4px">${item.badge}</span>` : '';
          html += `<li><a href="#${item.id}" data-page="${item.id}"${cls}>${item.label}${badgeHtml}</a></li>`;
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

    /* Sidebar click handlers */
    sidebarNav.querySelectorAll('a[data-page]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        /* Flyout items toggle their sub-menu instead of navigating */
        if (a.dataset.flyout) {
          const wrap = a.closest('.sidebar-flyout-wrap');
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
        window.location.hash = pid;
      });
    });
  }

  function showPage(pageId) {
    currentPage = pageId;
    const gen = EC_PAGES[pageId];
    pageContent.innerHTML = gen ? gen() : `<div class="content-inner" style="padding:60px;text-align:center;color:#999"><i class="fa fa-file" style="font-size:48px;display:block;margin-bottom:12px"></i>Page "${pageId}" content not yet available.</div>`;
    pageContent.scrollTop = 0;
  }

  /* ================================================================
   *  HASH ROUTER
   * ================================================================ */
  function onHashChange() {
    const hash = (window.location.hash || '#dashboard').slice(1);
    const pageId = hash || 'dashboard';
    renderSidebar(pageId);
    showPage(pageId);
  }

  /* ================================================================
   *  UI EVENTS
   * ================================================================ */

  /* -- Top nav: only Application Control is functional, others are placeholders -- */
  topNav.querySelectorAll('.topnav-item').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const mod = a.dataset.module;
      if (mod === 'application-control') {
        window.location.hash = 'dashboard';
      }
      /* Highlight clicked tab */
      topNav.querySelectorAll('.topnav-item').forEach(t => t.classList.remove('active'));
      a.classList.add('active');
    });
  });

  /* -- Overflow "..." toggle -- */
  overflowBtn.addEventListener('click', e => {
    e.stopPropagation();
    overflowMenu.classList.toggle('open');
  });

  /* -- Close dropdowns on outside click -- */
  document.addEventListener('click', e => {
    overflowMenu.classList.remove('open');
    userDropdown.classList.remove('open');
    document.querySelectorAll('.btn-dropdown-wrap.open').forEach(el => {
      if (!el.contains(e.target)) el.classList.remove('open');
    });
    /* Close sidebar flyouts */
    document.querySelectorAll('.sidebar-flyout-wrap.open').forEach(el => {
      if (!el.contains(e.target)) el.classList.remove('open');
    });
    /* Close action menus */
    document.querySelectorAll('.ec-action-menu.open').forEach(el => {
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

  /* -- Demo FAB close -- */
  if (demoFabClose) {
    demoFabClose.addEventListener('click', e => {
      e.stopPropagation();
      demoFab.classList.add('hidden');
    });
  }

  /* ================================================================
   *  INIT
   * ================================================================ */
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
})();

/** Position a sidebar flyout using fixed positioning so it isn't clipped by sidebar overflow */
function ecPositionFlyout(wrapEl) {
  const flyout = wrapEl.querySelector('.sidebar-flyout');
  if (!flyout) return;
  const rect = wrapEl.getBoundingClientRect();
  flyout.style.left = rect.right + 'px';
  flyout.style.top  = rect.top + 'px';
}
