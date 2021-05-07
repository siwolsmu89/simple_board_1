module.exports = (app) => {
    // articleRoute 사용 설정
    const articleRoute = require('./../routes/article.js');
    articleRoute(app);
}