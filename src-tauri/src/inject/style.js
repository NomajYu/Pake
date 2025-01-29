window.addEventListener('DOMContentLoaded', _event => {
  // Customize and transform existing functions
  const contentCSS = `

  `;
  const contentStyleElement = document.createElement('style');
  contentStyleElement.innerHTML = contentCSS;
  document.head.appendChild(contentStyleElement);

  // Top spacing adapts to head-hiding scenarios
  const topPaddingCSS = `
    #layout > ytmusic-nav-bar{
      padding-top: 20px;
    }

    .columns .column #header,
    .main > div > div.panel.give_me > div.header {
      padding-top: 30px;
    }

    ytd-masthead>#container.style-scope.ytd-masthead {
      padding-top: 12px;
    }

    #__next header.HeaderBar_header__jn5ju {
      padding-top: 16px;
    }

    #root > .excalidraw-app> .excalidraw-container .App-menu.App-menu_top{
       margin-top: 15px;
    }

    .geist-page nav.dashboard_nav__PRmJv,
    #app > div.layout > div.header-container.showSearchBoxOrHeaderFixed > header > a {
      padding-top:10px;
    }

    .geist-page .submenu button{
      margin-top:24px;
    }

    .container-with-note #home, .container-with-note #switcher{
      top: 30px;
    }

    #__next .overflow-hidden>.overflow-x-hidden .scrollbar-trigger > nav {
      padding-top: 12px;
    }

    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.absolute.left-0.right-0 > div > div.flex.items-center.gap-2 > button{
      margin-left: 60px;
      margin-right: -10px;
    }

    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.dark.flex-shrink-0.overflow-x-hidden.bg-black > div > div > div > div > nav > div.flex.flex-col.pt-2.empty\\:hidden.dark\\:border-white\\/20 > a,
    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.group.fixed.bottom-3.right-3.z-10.hidden.gap-1.lg\\:flex > div,
    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary > div > div > div > div > nav > div.flex.flex-col.pt-2.empty\\:hidden.dark\\:border-white\\/20 > a {
      display: none;
    }

    #__next .md\\:px-\\[60px\\].text-token-text-secondary.text-xs.text-center.py-2.px-2.relative{
      visibility:hidden;
    }

    #__next>div>div>.flex.h-screen.w-full.flex-col.items-center {
      padding-top: 20px;
    }

    body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.z-\\[21\\].flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary.max-md\\:\\!w-0 > div > div > div > nav > div.flex.justify-between.h-\\[60px\\].items-center.md\\:h-header-height {
       padding-top: 25px;
    }

    body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.composer-parent.flex.h-full.flex-col.focus-visible\\:outline-0 > div.flex-1.overflow-hidden.\\@container\\/thread > div > div.absolute.left-0.right-0 > div{
      padding-top: 35px;
    }

    #__next .sticky.left-0.right-0.top-0.z-20.bg-black{
      padding-top: 0px;
    }

    #header-area > div > .css-gtiexd > div:nth-child(1) > div, #header-area .logoIcon .user-info{
      padding-top: 20px;
    }

    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary > div > div > div > div > nav, #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main {
      padding-top: 6px;
    }

    #__next > div.AnnouncementWrapper_container__Z51yh > div > aside.SidebarLayout_sidebar__SXeDJ.SidebarLayout_left__k163a > div > div > header{
      padding-left: 84px;
      padding-top: 10px;
    }

    #page .main_header, .cb-layout-basic--navbar,
    #app .splitpanes.splitpanes--horizontal.no-splitter header,
    .fui-FluentProvider .fui-Button[data-testid="HomeButton"],
    #__next > div.PageWithSidebarLayout_centeringDiv___L9br > aside .ChatPageSidebar_logo__9PIXq {
      padding-top: 20px;
    }

    #tabs-sidebar--tabpanel-0 > div.tw-flex.tw-items-center.tw-mb-\\[12px\\].tw-mt-\\[14px\\].tw-px-4 {
      padding-top: 15px;
    }

    #tabs-sidebar--tabpanel-1 > div > div.tw-p-\\[16px\\].tw-flex.tw-flex-col.tw-gap-1\\.5{
      padding-top: 30px;
    }

    #tabs-sidebar--tabpanel-2 > div > h2 {
      padding-top: 20px;
      height: 70px;
    }

    .lark > .dashboard-sidebar, .lark > .dashboard-sidebar > .sidebar-user-info , .lark > .dashboard-sidebar .index-module_wrapper_F-Wbq{
      padding-top:15px;
    }

    #app-root .mat-mdc-tooltip-trigger.main-menu-button.mdc-icon-button {
      margin-top: 15px;
    }

    .lark > .main-wrapper [data-testid="aside"] {
      top: 15px;
    }

    #global > div.header-container > .mask-paper {
      padding-top: 20px;
    }

    #background.ytd-masthead {
      height: 68px;
    }

    .wrap.h1body-exist.max-container > div.menu-tocs > div.menu-btn{
      top: 28px;
    }

    #pake-top-dom:active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
    }

    #pake-top-dom{
      position:fixed;
      background:transparent;
      top:0;
      width: 100%;
      height: 20px;
      cursor: grab;
      -webkit-app-region: drag;
      user-select: none;
      -webkit-user-select: none;
      z-index: 99999;
    }

    @media (max-width:767px){
      #__next .overflow-hidden.w-full .max-w-full>.sticky.top-0 {
        padding-top: 20px;
      }

      #__next > div.overflow-hidden.w-full.h-full  main.relative.h-full.w-full.flex-1 > .flex-1.overflow-hidden .h-32.md\\:h-48.flex-shrink-0{
        height: 0px;
      }
    }
  `;
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  if (window['pakeConfig']?.hide_title_bar && isMac) {
    const topPaddingStyleElement = document.createElement('style');
    topPaddingStyleElement.innerHTML = topPaddingCSS;
    document.head.appendChild(topPaddingStyleElement);
  }
});
