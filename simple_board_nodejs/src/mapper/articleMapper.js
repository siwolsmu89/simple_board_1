module.exports = (sql, params, callback) => {
    // mariaDB connection
    const mariaConnection = require('./../config/mariaConnection')();
    // mybatis-mapper import
    const mybatis = require('mybatis-mapper');
    // mybatis mapper 생성
    mybatis.createMapper(['./simple_board_nodejs/src/mapper/articleMapper.xml']);

    // 결과를 담기 위한 변수
    let result = {};
    // 쿼리에 파라미터가 필요한 경우 사용
    let queryParams = {};

    mariaConnection.then(conn=>{
        conn.query(mybatis.getStatement('articleMapper', sql, queryParams)).then(rows=>{
            try {
                result.status = 'success';
                result.data = JSON.stringify([...rows]);
                callback(result.data);
            }catch (e) {
                result.status = 'failed';
                result.message = e.toString();
            }
        });
    });

}