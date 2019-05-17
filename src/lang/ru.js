export default {
  route: {
    dashboard: 'Панель',
    introduction: 'Вступление',
    documentation: 'Документация',
    guide: 'Руководство',
    permission: 'Разрешение',
    pagePermission: 'Разрешение страницы',
    directivePermission: 'Директивное разрешение',
    icons: 'Иконки',
    components: 'Компоненты',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Диаграммы',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Пример',
    nested: 'Вложенные маршруты',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Динамическая таблица',
    dragTable: 'Drag Table',
    inlineEditTable: 'Встроенный редактировать',
    complexTable: 'Комплексная таблица',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Форма',
    createArticle: 'Создать',
    editArticle: 'Редактировать',
    articleList: 'Список',
    errorPages: 'Страницы ошибок',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Экспорт Excel',
    selectExcel: 'Экспортировать выбранное',
    uploadExcel: 'Загрузить Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Экспорт Zip',
    theme: 'Тема',
    clipboardDemo: 'Буфер обмена',
    i18n: 'I18n',
    externalLink: 'Внешняя ссылка'
  },
  navbar: {
    logOut: 'Выйти',
    dashboard: 'Панель',
    github: 'Github',
    theme: 'Тема',
    size: 'Глобальный размер',
    search: 'Поиск'
  },
  login: {
    title: 'Форма входа',
    logIn: 'Авторизоваться',
    username: 'Логин',
    password: 'Пароль',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  dashboard: {
    new_visits: 'Новые посещения',
    purchases: 'Покупки',
    messages: 'Сообщение',
    departments: 'Отдели'
  },
  documentation: {
    documentation: 'Документация',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Ваши роли',
    switchRoles: 'Поменяться ролями',
    tips: 'In some cases it is not suitable to use v-permission, such as element Tab component or el-table-column and other asynchronous rendering dom cases which can only be achieved by manually setting the v-if.'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Показать руководство'
  },
  components: {
    documentation: 'Документация',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Фиксированный заголовок, отсортированный по порядку заголовка',
    dynamicTips2: 'Не фиксированный заголовок, отсортированный по порядку кликов',
    dragTips1: 'Порядок по умолчанию',
    dragTips2: 'Порядок после перетаскивания',
    title: 'Заголовок',
    importance: 'Imp',
    type: 'Тип',
    remark: 'Замечание',
    search: 'Поиск',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Дата',
    author: 'Автор',
    readings: 'Readings',
    status: 'Статус',
    actions: 'Действия',
    edit: 'Редактировать',
    publish: 'Публиковать',
    draft: 'Черновик',
    delete: 'Удалять',
    cancel: 'Отменить',
    confirm: 'Подтвердить'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Экспорт',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Экспорт',
    placeholder: 'Please enter the file name(default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading pdf.'
  },
  theme: {
    change: 'Сменить тему',
    documentation: 'Документация по теме',
    tips: 'Советы: Он отличается от выбора темы на панели навигации двумя разными способами создания скинов, каждый из которых имеет свои сценарии применения. Обратитесь к документации для деталей.'
  },
  tagsView: {
    refresh: 'Обновить',
    close: 'Закрыть',
    closeOthers: 'Закрыть другие',
    closeAll: 'Закрыть все'
  },
  company: {
    name: 'Progres'
  }
}
