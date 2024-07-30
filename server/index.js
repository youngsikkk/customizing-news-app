const express = require("express");
const cors = require("cors"); // 크로스 오리진 요청을 허용하기 위한 미들웨어
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/newsfeed', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello from Express!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});