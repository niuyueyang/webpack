const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin')
module.exports={
	//入口文件
	entry:'./main.js',
	output:{
		//将所有文件输出到bundle.js里面
		filename:'bundle.js',
		path:path.resolve(__dirname,'./dist'),
		//publicPath:'http://sop.ydtcloud.com/pc/',//输出文件URL
		
	},
	module:{
		rules:[
		
			//test,include,exclude可以为数组，只要满足其中一个条件，就可以被命中
			{
				test:/\.css$/,
				loaders:ExtractTextPlugin.extract({
					//转换.css文件需要使用的Loader
					use:['css-loader']
				})
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
//			{
//				//对待非文本采用file-loader
//				test:/\.(gif|png|jpg|jpe?g|eot|woff|ttf|svg|pdf)$/,
//				use:['file-loader']
//			}
			
			
		]
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
		new ExtractTextPlugin('css/[name].min.css', {
		    allChunks: false
		})
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
