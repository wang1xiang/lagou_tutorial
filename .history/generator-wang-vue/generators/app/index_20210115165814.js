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
        name: 'projectPrefix',
        message: 'whether to create the following content',
        choices: [
          {
            name: 'Yes',
            value: 'router',
            checked: true,
          },
          {
            name: 'Vuex',
            value: 'vuex',
          },
        ],
      },
    ]).then((answer) => {
      this.answer = answer
    })
  }
  // 把每个文件通过模板转换到目标路径
  // 遍历
  writing() {
    const templates = [
      '.browserslistrc',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.eslintrc.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'postcss.config.js',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/store/actions.js',
      'src/store/getters.js',
      'src/store/index.js',
      'src/store/mutations.js',
      'src/store/state.js',
      'src/utils/request.js',
      'src/views/About.vue',
      'src/views/Home.vue',
    ]
    templates.forEach((temp) => {
      this.fs.copyTpl(
        this.templatePath(temp),
        this.destinationPath(temp),
        this.answer
      )
    })
  }
}
// 1.创建templates文件夹 放入vue项目所需文件
// 2.接受用户输入 并将vue项目中用到name的地方统一使用 <%= name %> 的方式替换
