const Generator = require('yeoman-generator')

module.exports = class extends (
  Generator
) {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        defualt: this.appname,
      },
      {
        type: 'list',
        name: ''
      }
    ]).then((answer) => {
      this.answer = answer
    })
  }
  // 把每个文件通过模板转换到目标路径
  // 遍历
  // <%%= BASE_URL %>需要多家一个%转义
  writing() {}
}
// 1.创建templates文件夹 放入vue项目所需文件
// 2.接受用户输入 并将vue项目中用到name的地方统一使用 <%= name %> 的方式替换
