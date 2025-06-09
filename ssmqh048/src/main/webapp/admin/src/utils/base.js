const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmqh048/",
            name: "ssmqh048",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmqh048/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "忘忧小区物业管理系统"
        } 
    }
}
export default base
