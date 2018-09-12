# webpack@3.0.0

注意与fis3打包区分,另外注意extract-text-webpack-plugin与webpack对应，安装npm inatall extract-text-webpack-plugin@next --save，webpack3.0.0版。


1）在做自动化打包时，首先打到目录文件，启动两个命令webpack --watch，webpack-dev-server --hot。

2）先在dist文件夹下新建bundle.js并在html文件中引入，其次以main.js为入口，将需要打包的全部以
require形式引入。

3）在show.js文件中，因为引入jquery，需要import $ ...全局引入，并且对于工具函数tool.js中，
所有的内容放到一个对象中，以export default形式输出对象。

4）这样才能保证在show.js中调用它的函数，在调用时依然以import引入，形式import Tool from './tool.js'，
调用时Tool.prints()。
