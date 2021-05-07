module.exports = (app) => {

    // '/articles' url에 대한 post 요청 처리
    app.post('/articles', function(req, res) {
        const todoMapper = require('./../mapper/articleMapper');
        const pagination = req.body.pagination;
        todoMapper('getArticleList', pagination, (result) => { res.send(result) });
    });
}