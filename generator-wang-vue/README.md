模拟 vue-cli 创建 vue-generator

- 实现思路

  1. 实现与用户交互，提供是否创建特定文件目录
  2. 拷贝 Vue 模板文件到 app/tempaltes 下，通过拷贝的方式复制到新创建的项目中

- 初始化项目

  创建 generator-wang-vue 项目，并初始化 package.json，安装yeoman-generator 

- 生成模板文件

  将 vue-cli 生成的初始化项目所有文件导入到 templates 文件夹，并修改项目需动态生成的文件，如项目名称（index.html、README.md、pageage.json）
  
- 生成用户输入

  在prompt提供用户输入，并将结果保存在this.answer中
  
- 模板拷贝

  将用户需拷贝的文件名整理出来，获取用户输入，根据用户输入去判断是否需要生成某些指定文件或生成模板中的相应属性

  
