// express import
const express = require('express');
// app 생성
const app = express();
// port 지정
const port = '8080';

// JSON 사용 설정
app.use(express.json());

// route 연결
const route = require('./../routes');
route(app);

// 서버를 시작하고 지정된 포트에서 연결을 청취
app.listen(port, () => {
    console.log(`simple_board_nodejs app is listening at port ${port}...`);
});

