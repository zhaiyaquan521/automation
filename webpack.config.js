module.exports = {
    //入口js
    entry: "./src/main.js",
    //输出
    output: {
        path: __dirname+'/build',
        filename: "build.js"
    },

    module: {

        loaders: [
            //babel处理js
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除此文件夹
                loader: 'babel-loader'
            },
            //处理css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer:{
        contentBase: './',//内置服务器动态加载页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true
    }
}