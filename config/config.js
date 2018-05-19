exports.port = '3000';  // Порт 
exports.serverName = 'localhost:' + exports.port; // имя сервера

// exports.appRoot = __dirname + '/../';       // пример из хелпдеска
// exports.tmpDir = exports.appRoot + 'temp/'; // Для файлов. из хелпдеска

/**
 * Database, mongodb
 */
exports.db = {
    connectString: 'mongodb://localhost/Pol4Portal'
};

// Таймаут сессии
exports.socketIo = {
    expire: 60 * 5,        // in seconds
    timeout: 15000,        // in milliseconds
    secret: 'Pol4'       // todo Fill secret key
};

/**
 * Session storage (in mongodb)
 */
exports.session = {
    maxAge: 30 * 60 * 1000, // in seconds
    secret: 'Pol4'        // todo Fill secret key
};

/**
 * Project list
 */
exports.projects = [
    {
        code:    'Pol4Portal',                  
        domain:  'localhost:3000',            
        name:    'Pol4Portal',                          // Проект
        title:   'Портал Поликлиники №4 г.Темиртау',    // Заголовок
        // литеральная кодировка проектов (сапорт, заявки и т.д.)
        letters: ['HD', // сапорт - helpdesk
        'CL', // Заявка на регистрацию логина
        'UL', // Заявка на сброс пароля
        'US' // Обновление сайта / новость 
                    ]                                  

    }
];

// Цветовая маркеровка
exports.markDateRed = 60 * 60 * 24 * 3; // 3 days
exports.markDateOrange = 60 * 60 * 24 * 2; // 2 days
exports.markDateGreen = 60 * 60 * 24; // 1 days
// Настройка файлов для прикрепления- 5мб предел, 10 штук
exports.files = {
    maxSize:  5 * 1024 * 1024,  // In bytes
    maxCount: 10,
    extensions: [
        'jpg', 'jpeg', 'png', 'bmp', // Картинки
        'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ods', 'odt', 'txt', 'rtf' // Виды документов
    ]
};
// свойства для заявок
exports.tickets = {
    // редактор
    editor: {
        allowedTags: "<p><span><b><strong><i><em><br><h1><h2><h3><h4><ul><ol><li><s><sub><sup><code>"
    },
    // лимит на страницу
    page: {
        limit: 50 // заявок на страницу - 50
    },
    // лимит на новости/заметки
    news: {
        limit: 20 // новостей на страницу - 20
    }
};

// Заявка поумолчанию - сапорт
exports.ticketFromEmailProject = 'HD';
