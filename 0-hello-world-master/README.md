# hello-world

Это проект, чтобы проверить работоспособность инструментария.

**1\.** Главный инструмент любого веб-разработчика - это веб-браузер ([Google Chrome](https://www.google.com/intl/ru_ru/chrome/), [Mozilla Firefox](https://www.mozilla.org/ru/firefox/new/) и др.)

В каждом веб-браузере существуют инструменты разработчика, которые позволяют просматривать элементы страницы, стили этих элементов и их свойства.  
Но самое главное - эти инструменты позволяют работать с кодом, смотреть его исходники, отлавливать ошибки - делать то, что нужно каждому уважающему себя разработчику.

По умолчанию в Google Chrome инструменты открываются на клавишу **F12**.

**2\.** Для удобной разработки приложений и написания кода необходимо использовать среду разработки - IDE.  

Существует две основных IDE для веба: 
- [VS Code](https://code.visualstudio.com/) от Microsoft
- [WebStrom](https://www.jetbrains.com/ru-ru/webstorm/) от JetBrains

В этом курсе для совместной разработки мы будем использовать VS Code с расширением [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack).

**3\.** Для того, чтобы работать с JS на серверной части нам понадобится [Node.js](https://nodejs.org/en/) версии Current.

На первых интенсивах серверная часть не понадобится, но в дальнейшем, когда будем работать с более сложными веб-приложением, это будет необходимо.

**4\.** Так как все интенсивы у нас выложены на GitHub, надо будет на нём [зарегистрироваться](https://github.com/join).

Чтобы взаимодействовать между своими репозиториями на GitHub и локальным хранилищами, нам понадобится [Git](https://git-scm.com/) - система контроля версий.  
Незаменимый инструмент любого разработчика!

**!!!ВАЖНО!!!**: В путях установки не должно быть кириллицы, это может привести к проблемам.

Чтобы проверить, что всё работает, проделаем следующие шаги: 
- [ ] Сделать Fork этого репозитория на свой аккаунт в GitHub (кнопка справа сверху).
- [ ] Склонировать полученный репозиторий через команду `git clone *ссылка на репозиторий из вашего аккунта*`.
- [ ] Создать или подключиться к сессии Live Share через VS Code.
- [ ] Поредактировать код совместно (например, поменять слово world на свои имена).
- [ ] Запустить `index.js` и убедиться, что в интегрированном терминале всем видно вывод скрипта. Запускать через NodeJS.
- [ ] Поменяться в Live Share: закрыть текущую сессию, после чего сессию создает другой участник.
- [ ] Сделать `git add .` (добавляет все изменения), `git commit -m "Task done"` (делает коммит и присваивает ему название) и `git push origin HEAD` (пушит коммит на GitHub).
- [ ] Сделать Pull Request в GitHub. В описании реквеста написать своё ФИО.