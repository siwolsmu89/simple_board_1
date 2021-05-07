module.exports = (app) => {
    const articleMapper = require('./../mapper/articleMapper');

    // '/articles' url에 대한 post 요청 처리
    app.post('/articles', function(req, res) {
        const pagination = req.body.pagination;
        const sqlObj = {
            id: 'getArticleList',
            type: 'select'
        }
        articleMapper(sqlObj, pagination, (result) => {
            res.send(result);
        });
    });

    app.post('/articleView', function(req, res) {
        console.log("article View");
        const updateSql = {
            id: 'updateArticleView',
            type: 'update'
        }
        articleMapper(updateSql, req.body, () => {
            const getSql = {
                id: 'getArticleByNo',
                type: 'select'
            }
            articleMapper(getSql, req.body, (result) => {
                res.send(result);
            } );
        });
    });
}