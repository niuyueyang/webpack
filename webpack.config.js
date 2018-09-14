const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');//分离css
const VueLoaderPlugin = require('vue-loader/lib/plugin');//编译vue
const {webplugIn}=require('web-webpack-plugin');
const serviceworker=require("serviceworker-webpack-plugin");//serviceworker【废除】
const OfflinePlugin = require('offline-plugin');//serviceworker【只限于本地】
var ImageminPlugin = require('imagemin-webpack-plugin').default;//压缩图片【未实现】
var SpritesmithPlugin = require('webpack-spritesmith');//图片精灵
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css

module.exports={
	//入口文件
	//entry:'./main.js',
//	entry:{
//		game:'./game.js',
//		index:'./main.js'
//	},
	entry: './file.js',
	output:{
		//将所有文件输出到bundle.js里面
		//filename:'bundle.js',
		filename:'output.js',
		path:path.resolve(__dirname,'file'),
//		publicPath:'/assests/',
		//publicPath:'http://sop.ydtcloud.com/pc/',//输出文件URL
		
	},
	module:{
		rules:[
		
			//test,include,exclude可以为数组，只要满足其中一个条件，就可以被命中
			{
				test:/\.css$/,
				loaders:ExtractTextPlugin.extract({
					//转换.css文件需要使用的Loader
					use:['css-loader']//压缩css代码
				}),
//				use:['style-loader','css-loader','postcss-loader']
				//将css引入js文件中
//				use:['style-loader',{
//					loader:'css-loader',
//					options:{
//						minimize:true
//					}
//				}]，
				//include:path.resolve(__dirname,'src'),//将src里面的css文件全部编译
				//exclude:path.resolve(__dirname,'node_modules'),//排除node_modules里面的css文件
//				
				
			},
			
			//js  es6=>es5
			{
				test:/\.js$/,
				include:path.resolve(__dirname,'js'),
				exclude:path.resolve(__dirname,'node_modules'),
				use:['babel-loader']
			},
			
			//ts【单纯编译ts文件】
//			{
//				test:/\.ts$/,
//				loader:'awesome-typescript-loader'
//			},
			//scss
			{
				test:/\.scss/,
				use:['style-loader','css-loader','sass-loader']
			},
			//react与typeScript结合【.tsx】
//			{
//				test:/\.tsx?$/,
//				loader:'awesome-typescript-loader'
//			},
			//react【.jsx】
//			{
//				test:/\.jsx?$/,
//				loader:'jsx-loader'
//			},
			//vue，与jsx-loader互斥，所以将上面的注销
			{
				test:/\.vue$/,
				use:['vue-loader']
			},
			//vue与ts结合,与reactTs文件夹冲突
//			{
//				test:/\.ts$/,
//				loader:'ts-loader',
//				include:path.resolve(__dirname,'vueTs'),
//				exclude:/node_modules/,
//				options:{
//					//让tsc将vue当成一个Typescript模块去处理，以解决module not found问题，tsc本身不会处理.vue结尾的文件
//					appendTsSuffixTo:[/\.vue$/]
//				}
//			},
//			{
//				//对待非文本采用file-loader
//				test:/\.(gif|png|jpg|jpe?g|eot|woff|ttf|svg|pdf)$/,
//				use:['file-loader']
//			}，
			
//			图片替换base64
			{
				test:/\.(gif|png|jpg|jpe?g|eot|woff|ttf|svg|pdf)$/,
				use:[{
					loader:'url-loader',
					options:{
						//200kB以下使用url-loader
						limit:1024*200,
						//否则采用file-loader
						fallback:'file-loader'
					}
				}]
			}
		]
	},
	resolve:{
		extensions:['.ts','.js','.tsx','.jsx','.vue','.json']
	},
//	resolve:{
//		alias:{
//			components:'./src/components',
//			'react$':'path/to/react.min.js'
//		}，//当通过import Button from 'components/Button'变成 import Button from './src/components/Button',react$只会命中以react结尾的导入语句
//		extensions:['.ts','.js','.json'],//当以require('./data')开始引入时，会自动寻找require('./data.ts')，如果没有再去寻找.js,.json，都没有则会报错
//		modules:['./src/components','node_modules'],//当大量组件都在./src/components下面时，可以通过此种方式，比如import './src/components/button'替换成import 'button',
//		descriptionFiles:['package.json'],//配置描述第三方模块的文件名称
//		enforceExtension:true,//设置为true，所有导入的文件必须带有后缀，import './foo.js'
//		enforceModuleExtension:false,//它只对node_modules下的文件有效，如果enforceExtension设置为true,通过node_modules导入的语句大多没有带后缀名，需要通过它设置false来兼容第三方模块
//	},
	devServer:{
//		hot:true/false,//热替换功能
//		inline:true/false,//是否启用在代码变化后，通过代理客户端控制网页刷新，【最好启用】
		historyApiFallback:{
			rewrites:[
				//使用正则匹配命中路由
				//以user开头都返回user.html
				{from:/^\/user/,to:'/user.html'},
				{from:/^\/game/,to:'/game.html'},
				//其他都返回error.html
				{from:/./,to:'/error.html'}
			]
		},
//		contentBase:path.join(__dirname,'public'),//配置文件根目录，默认为当前目录
		headers:{
			'X-foo':'bar'
		},//
		host:'127.0.0.1',
		port:81,
//		allowedHosts:[
//			'baidu.com',
//			'.host2.com',//host2.com及其所有子域名,*.host2.com都将匹配
//		]，
//		disableHostCheck:true,
		https:true,//使用https服务
//		https:{
//			key:fs.readFileSync('path/to/server.key'),
//			cert:fs.readFileSync('path/to/server.crt'),
//			ca:fs.readFileSync('path/to/ca.pem')
//		},//配置https证书
		compress:true,//是否启用压缩，默认为false
		open:false,//是否自动打开
//		openPage:'',//打开指定URL网页
	},
	//扩展
	plugins:[
		new ExtractTextPlugin('css/[name].css', {
		    allChunks: false
		}),
		new VueLoaderPlugin(),
		new OptimizeCssAssetsPlugin(), // 创建一个压缩CSS文件的插件

		//图片精灵
//		new SpritesmithPlugin({
//          // 目标小图标
//          src: {
//              cwd:  './file/ico',
//              glob: '*.png'
//          },
//          // 输出雪碧图文件及样式文件
//          target: {
//              image: './file/ico/sprite.png',
//              css: './file/css/sprite.css'
//          },
//          // 样式文件中调用雪碧图地址写法
//          apiOptions: {
//              cssImageRef: '../ico/sprite.png'
//          },
//          spritesmithOptions: {
//              algorithm: 'top-down'
//          }
//      }),

//		new ImageminPlugin({
//	      disable: process.env.NODE_ENV !== 'production', // Disable during development
//	      pngquant: {
//	        quality: '95-100'
//	      }
//	    }),
//		new serviceworker({
//			//自定义sw.js所在路径
//			//serviceworker会将文件列表注入生成的sw.js中
//			entry:'./sw.js',
//		}),
		//serviceworker相关配置，只限在本地测试，未达到上线标准
//		new OfflinePlugin({
//			  responseStrategy: 'cache-first', // 缓存优先
//	          AppCache: false,                 // 不启用appCache
//	          safeToUseOptionalCaches: true,   // Removes warning for about `additional` section usage
//	          autoUpdate: true,                // 自动更新
//	          caches: {                        // webpack打包后需要换的文件正则匹配
//	            main: [
//	              '**/*.js',
//	              '**/*.css',
//	              /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//	              /\.(woff2?|eot|ttf|otf)(\?.*)?$/
//	              ],
//	            additional: [
//	              ':externals:'
//	            ]
//	          },
//	          externals: [],                    // 设置外部链接，例如配置http://hello.com/getuser，那么在请求这个接口的时候就会进行接口缓存
//	          excludes: ['**/.*', '**/*.map', '**/*.gz', '**/manifest-last.json'], // 需要过滤的文件
//	          ServiceWorker: {
//	            output: 'sw.js',       // 输出目录
//	            publicPath: 'serviceworker/',    // sw.js 加载路径
//	            scope: 'serviceworker/',                     // 作用域（此处有坑）
//	            minify: true,                   // 开启压缩
//	            events: true                    // 当sw状态改变时候发射对应事件
//	          }
//		})
	],
	target:'web',//web,node,async-node,websorker,electron-main,electron-renderer,如果改为node,则nodeJS里面的代码风格将被保留，如require(...)不会被打包，默认web
	devtool:'source-map',//配置为source-map方便调试，默认为false
	watch:true,//监听模式，默认false
	watchOptions:{
		//默认为空
		ignored:/node_modules/,//支持正则匹配，不监听的文件或文件夹
		aggregateTimeout:300,//监听到变化后，300ms后再去执行，默认300ms
		poll:1000,//判断文件是否发生变化是通过不停的轮循系统指定文件有没有变化实现的，默认询问1000次
	},
//	externals:{
//		jquery:'jQuery'
//	}
}
