const ref = () => `
    Раздел: package.json
        devDependencies:
            babel-eslint -- позволяет проверить линтером весь валидный Babel код. Используется eslint
            babel-loader -- позволяет транспиллировать JS код. Транспилит babel. Запускается из Webpack
            babel-preset-env -- набор пресетов, позволяющий использовать последние возможности JS без 
                поллифиллов
            babel-preset-react -- данный пресет включает следующие пресеты: preset-flow, syntax-jsx, 
                transform-react-jsx, transform-react-display-name
            clean-webpack-plugin -- позволяет очистить папку со сборкой
            css-loader -- позволяет @import и url() как import/require() и резолвит их
            eslint-plugin-import -- плагин поддерживает ES2015 импорты
            eslint-plugin-jsx-a11y -- проверяет выполнение правил доступности в jsx
            eslint-plugin-react -- добавляет специфические для реакт правила проверки
            mini-css-extract-plugin  -- извлекает CSS из JS и создает файл со стилями
            style-loader -- позволяет работать с CSS, LESS и SASS файлами
            webpack-dev-middleware -- передает обработанные файлы webpack-серверу
            webpack-hot-middleware -- делает возможным HMR на сервере или в приложении
            webpack-hot-server-middleware -- выполняет горячую замену сборки на сервере
            webpack-merge -- позволяет объединять массивы и объекты
            webpack-node-externals -- определяет внешние модули, которые не должны входить в сборку
        dependencies:
            cross-env -- запускает скрипты, указывающие переменные окружения
            react-hot-loader -- модифицирует реакт-компонент в реальном времени

    Замечания.
        CSS на при рендеринге страницы на сервере не нужен, поэтому в конфиге вебпак для сервера в 
            module->rules->use используется правило 'css-loader/locals'. Благодаря этому правилу css не
            добавляется на страницу, а только записывается в source-map. На клиенте импорты CSS выполнены 
            не будут




`;
console.log(ref());
