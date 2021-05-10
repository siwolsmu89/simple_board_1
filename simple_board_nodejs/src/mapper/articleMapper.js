module.exports = (sqlObj, params, callback) => {
    // mariaDB connection
    const mariaConnection = require('./../config/mariaConnection')();
    // mybatis-mapper import
    const mybatis = require('mybatis-mapper');
    // mybatis mapper 생성
    mybatis.createMapper(['./simple_board_nodejs/src/mapper/articleMapper.xml']);

    // 로그를 찍기 위한 sql 포맷
    const sqlFormat = {language : 'sql', indent : '  ', uppercase : true};
    
    // 결과를 담기 위한 변수
    let result = {};
    // 쿼리에 파라미터가 필요한 경우 사용
    let queryParams = {};

    if (params) {
        queryParams = params;
    }

    const query = mybatis.getStatement('articleMapper', sqlObj.id, queryParams, sqlFormat);

    console.log("Sql :: ", sqlObj.id);

    mariaConnection.then(conn=>{
        conn.query(query).then(rows => {
            try {
                result.status = 'success';
                result.data = '';
                result.data = rows;
            } catch (e) {
                result.status = 'failed';
                result.message = e.toString();
            }
            callback(result.data);
        });
    });

    return result;
}