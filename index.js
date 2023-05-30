const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://isma955:12345@cluster0.c0o27ym.mongodb.net/online-library?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

//   app.use(require("./routes/admin.routes"))
  app.use(require("./routes/book.routes"))
  app.use(require("./routes/user.routes"))

  app.listen(3002, () => {
      console.log('server has been started')
  })