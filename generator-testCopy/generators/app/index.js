// 此文件作为Generator的核心入口
// 需要导出继承自Yeoman Generator的类型
// Yeoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入等

const Generator = require('yeoman-generator')

module.exports = class extends (
  Generator
) {
  prompting() {
    // Yeoman在询问用户环节调用此方法
    // 在此方法中可以调用父类的prompt() 方法发出对用户的命令行询问
    // 返回为Promise 
    return this.prompt([
      // 每个对象包括一个问题 type:输入方式 name用户输入的值保存的键 message提示用户
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname, // appname 父类当中自动拿到的目录文件夹名字 为项目生成目录名称
      },
    ]).then((answer) => {
      // answer => { name: 'user input value' } 用户输入
      this.answer = answer // writing传入此answer
    })
  }
  writing() {
    // Yeoman自动在生成文件阶段调用此方法
    // 尝试在项目目录中写入文件
    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )

    // 通过模板方式写入文件到目标目录
    // const temp = this.templatePath('foo.txt')
    // const output = this.destinationPath('foo.txt')
    // // 模板上下文
    // const context = this.answer //{ title: 'Hello', success: false }
    // this.fs.copyTpl(temp, output, context)
    const temp = this.templatePath('bar.html')
    const output = this.destinationPath('bar.html')
    // 模板上下文 用户输入的键值
    const context = this.answer //{ title: 'Hello', success: false }
    this.fs.copyTpl(temp, output, context)
  }
}
