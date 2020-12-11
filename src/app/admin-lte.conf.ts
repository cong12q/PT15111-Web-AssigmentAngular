export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'Congnga', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
        {label: 'Configuration', route: 'layout/configuration'},
        {label: 'Custom', route: 'layout/custom'},
        {label: 'Header', route: 'layout/header'},
        {label: 'Sidebar Left', route: 'layout/sidebar-left'},
        {label: 'Sidebar Right', route: 'layout/sidebar-right'},
        {label: 'Content', route: 'layout/content'}
      ]},
    {label: 'COMPONENTS', separator: true},
    {label: 'Danh Mục', route: 'them-moi-danh-muc', iconClasses: 'fa fa-tasks'},
    {label: 'Thể loại', route: 'them-moi-the-loai', iconClasses: 'fa fa-exclamation-triangle'},
    {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
        {label: 'Default Box', route: 'boxs/box'},
        {label: 'Info Box', route: 'boxs/info-box'},
        {label: 'Small Box', route: 'boxs/small-box'}
      ]},
    {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    {label: 'Form', iconClasses: 'fa fa-files-o', children: [
        {label: 'Input Text', route: 'form/input-text'}
    ]},
    {label: 'Đăng Xuất', route: 'logout', iconClasses: 'fa fa-th'}
  ]
};
