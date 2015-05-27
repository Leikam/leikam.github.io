# FrontendConf 2015, Москва
- [Список докладов](http://frontendconf.ru/2015/schedule.html)
- [Лента твитов](https://twitter.com/search?q=%23frontconfmsk)

## Основные тезисы:
- будущее JS (наверное про будущее CSS тоже было, но я эту ветку я пропустил)
- сборщики
- шаблонизаторы
- MV* фреймворки

Много хайпа вокруг CoffeeScript, его, кажется, разлюбили.  
Цитата:
> Кофескрипт имеет плюсы и минусы: плюсы – он позволяет не ставить точку с запятой,
> минусы – список из 8 пунктов.

Зато теперь все любят новый ES6+ и радостно используют компиляторы.
Несколько тезисов с конференции:
>TypeScript самый мощный и самый популярный способ типизировать JS.

В то же время Babel поддерживает больше фич, но не типизацию.

## Доклады

### **[Функциональное программирование](http://frontendconf.ru/2015/abstracts/1741)**
- Иммутабельность и чистые функции == легие тесты
- Мммутабельные коллеции
- Пример из React
- (!) Прокрутка кода с изменением входящих данных и промоткой по истории назад

 
### **Статистика** 
#### [Реалтайм статистика скорости работы нативных и веб-приложений у реальных пользователей](http://frontendconf.ru/2015/abstracts/1777)
Павел Довбуш (Badoo)  

- Performance Timing API -  все метрики
- Ни гугл ни Яндекс не подошли
- http://tiny.css/Jinba

..и ту же тему продолжает:

#### [Глубокая аналитика скорости сайта](http://frontendconf.ru/2015/abstracts/1772)
Николай Мациевский  

Сгруппированные данные о времени загурзки:
- по типам файлов
- по рефереру
- по типу оптимизации
- ..и другое.

 
### **[Пакуйте чемоданы. Грузите апельсины](http://frontendconf.ru/2015/abstracts/1724)**
Владимир Кузнецов (Graph)  
[Cлайды](http://mistakster.github.io/frontendconf-2015/?full#1)

- Рассказ о сборщиков, звезды - webpack & browserify
- Концеции в фокусе: CommonJS, AMD, UMD, ES7

 
### **[(Не)безопасный frontend](http://frontendconf.ru/2015/abstracts/1769)**
Сергей Белов  
[Слайды](http://www.slideshare.net/sergeybelove/frontend-48484878)

- CSP (content security policy) - позволяет ограничить пути поставки ерсурсов
- Популярная уязвимость через сборку Adobe Flex
- Как утекают токены через загружаемые картинки, еслив гетах есть какая-то информация

 
### **[Как перестать отлаживать асинхронный код и начать жить](http://frontendconf.ru/2015/abstracts/1771)**
Андрей Саломатин (Productive Mobile)  
[Слайды](http://www.slideshare.net/moscowjs/ss-47134995)

- Callback
- Promises (медленные)
- Coroutines

Нативное будущее:
- Async/Await
- Async Generators

 
### **[Десктопные приложения на web технологиях](http://frontendconf.ru/2015/abstracts/1718)**
Дмитрий Дудин  
[Слайды](html5.by/slides/mwjs)  
[Статья](http://html5.by/blog/nwjs)

- nw.js, electron
- структура приложения:
    + HTML, CSS, JS
    + package.json
- Возможность собрать десктопное приложение из готового API
- Широкие возможность применять методы длф fs
- Кроссплатформенность
- [Хакатонмод] Собрать морду для упраления проектом.

 
### **[Быстрый ренеринг с DOM шаблонизаторами](http://frontendconf.ru/2015/abstracts/1753)**
Борис Каплуновский  
- templ - собственный шаблонизатор
- под ударом – Angular, React
- Основные аргументы против вес, скорсоть работы, много замеров против
- Virtual DOM, глубокого стека и неоправданной сложности

 
### **[TypeScript: особенности разработки](http://frontendconf.ru/2015/abstracts/1733)**
Александр Майоров (Tutu.ru)  

- JS compilers
- CoffeeScript
- TypeScript ~= ES6+
    - следит за типизацией, защита от ошибок
    - мифы о TS
    - хорошая поддержка у JetBrains
    - TypeScript = Babel(он без типизации) + FLOW (by Facebook)
- Разрущителилегенд-мод: вопрос про Babel vs TS обернулся не в сторону TypeScript

 
### **[JavaScript завтра](http://frontendconf.ru/2015/abstracts/1722)**
Сергей Рубанов (Exante Limited)  
[Слайды](http://www.slideshare.net/SergeyRubanov/javascript-48352266)

- батхерт по CoffeScript
- Dart перестал разрабатывать вирт машину
- asm.js и гонка улучшений джаваскриптов
- AOT vs V8 JIT
- Новая нумерация версий
- Транскопиляторы (traceur, babel)
    - Статичесская типизация
    - Встроенная типизация в JS VM: SoundScript, Sane Mode
    - работает в Canary

> Всегда ставтье на JavaScript (B. Eik)

 
### **[HTML5 Web Components: следующий шаг к модульности вашего проекта](http://frontendconf.ru/2015/abstracts/1762)**
Андрей Рахманов (Enaza)  

- поддержка WebComponents (tekmlates, custom elements, shadow dom, imports), workarounds
- Polyfills: native, bosonic,, x-tag, polymer
- Nodejs + browserify + gulp + jade + stylus
- Polymer Vulcanize для конкатенации импортов

Все это вылтлось в технологический стек, который создает веб-компонент со всеми составляющими одной командой

#### Полезные ссылки
- http://webcomponents.org
- http://component.kitchen

 
### **[HTML GL - возьмите столько FPS, сколько вам нужно, и немного эффектов впридачу](http://frontendconf.ru/2015/abstracts/1737)**
Денис Радин   
- Простая инициализация через html-gl
- ~100 000 000 textured areas
- Пример с CryEngine
- Рендеринг на WebGL, 20 000 зайцев
- Как мешает встроенная эврестика
- Есть ограничения html2canvas (например на инпутах)

## **Презентации из докладов с параллельного потока**
- [Отладка кода в браузере by Антон Шувалов](http://www.slideshare.net/ssuser92c928/ss-48511656)
- [Оживляем текст by Юля Бухвалова](http://yoksel.github.io/text-may2015/#1)
- [Мейкап и контроль качества верстки by Тимофей Чаптыков](http://2gis.github.io/makeup/)
- [Компонентный веб, проникновение в дизайн by Антон Виноградов](http://www.slideshare.net/awinogradov/ss-48422586)
- [PostCSS by Андрей Ситник](http://ai.github.io/about-postcss/)














