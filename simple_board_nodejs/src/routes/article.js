module.exports = (app) => {
    const articleMapper = require('./../mapper/articleMapper');

    // '/articles' url에 대한 post 요청 처리
    app.post('/articles', function(req, res) {
        const pagination = req.body.pagination;
        let selectResult = {};
        let sqlObj = {
            id: 'getArticleList',
            type: 'select'
        }
        const selectParams = {
            articleStart: (pagination.currentPage - 1) * 10 + 1,
            articleEnd: (pagination.currentPage) * 10
        }

        articleMapper(sqlObj, selectParams, (result) => {
            selectResult.articles = result;
            sqlObj = {
                id: 'getTotalArticleCount',
                type: 'select'
            }
            articleMapper(sqlObj, selectParams, (result) => {
                selectResult.totalCount = result[0].totalCount;
                res.send(selectResult);
            });
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
            });
        });
    });

    app.post('/addArticle', function(req, res) {
        console.log("article add", req.body);
        const addSql = {
            id: 'addNewArticle',
            type: 'insert'
        }
        articleMapper(addSql, req.body, (result) => {
            res.send(result);
            console.log(result);
        });
    });

    app.post('/deleteArticle', function(req, res) {
        console.log("article delete", req.body);
        const deleteSql = {
            id: 'deleteArticle',
            type: 'delete'
        }
        articleMapper(deleteSql, req.body, (result) => {
            res.send(result);
        })
    })
}