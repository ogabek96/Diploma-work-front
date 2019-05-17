export default {
  route: {
    dashboard: 'Panel',
    introduction: 'Introduction',
    documentation: 'Dokumentatsiya',
    guide: 'Qo`llanma',
    permission: 'Ruxsat',
    pagePermission: 'Sahifa ruxsati',
    directivePermission: 'Directiva ruxsati',
    icons: 'Ikonkalar',
    components: 'Komponentlar',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd ro`yhati',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatarni yuklash',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Diagrammalar',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Yaratish',
    editArticle: 'O`zgartirish',
    articleList: 'Ro`yhat',
    errorPages: 'Xato sahifalar',
    page401: '401',
    page404: '404',
    errorLog: 'Error Logi',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Belgilanganlarni Export qilish',
    uploadExcel: 'Excel yuklash',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Zipga Export ',
    theme: 'Stil',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'Tashqi havolalar'
  },
  navbar: {
    logOut: 'Chiqish',
    dashboard: 'Panel',
    github: 'Github',
    theme: 'Tema',
    size: 'Global o`lcham',
    search: 'Qidiruv'
  },
  login: {
    title: 'Kirish oynasi',
    logIn: 'Tizimga kirish',
    username: 'User nomi',
    password: 'Parol',
    any: 'any',
    thirdparty: 'yoki bular bilan bog`laning',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Hujjatlar',
    github: 'Github Repository'
  },
  dashboard: {
    new_visits: 'Yangi kirganlar',
    purchases: 'Sotuvlar',
    messages: 'Xabarlar',
    departments: 'Bo`limlar'
  },
  permission: {
    roles: 'Sizning rollaringiz',
    switchRoles: 'Rollarni o`zgartirish',
    tips: 'In some cases it is not suitable to use v-permission, such as element Tab component or el-table-column and other asynchronous rendering dom cases which can only be achieved by manually setting the v-if.'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Hujjatlar',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'Standart buyurtma',
    dragTips2: 'The after dragging order',
    title: 'Sarlavha',
    importance: 'Imp',
    type: 'Tip',
    remark: 'Izoh',
    search: 'Qidiruv',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Vaqt',
    author: 'Avtor',
    readings: 'Readings',
    status: 'Status',
    actions: 'Amallar',
    edit: 'O`zgartirish',
    publish: 'Chiqarish',
    draft: 'Yopib qo`yish',
    delete: 'O`chirish',
    cancel: 'Bekor qilish',
    confirm: 'Tasdqilash'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading pdf.'
  },
  theme: {
    change: 'Stilni almashtirish',
    documentation: 'Stil hujjatlari',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Yangilash',
    close: 'Yopish',
    closeOthers: 'Qolganlarini yopish',
    closeAll: 'Hammasini yopish'
  },
  company: {
    name: 'Progres'
  }
}
