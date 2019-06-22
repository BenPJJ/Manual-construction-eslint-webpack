# eslint + webpack 搭建
eslint搭配着webpack来使用

``` js
$ npm install
$ eslint [options][file].js
```

## 第一步：

- 全局安装

> npm install eslint -g

> npm install eslint-plugin-vue -g

- 本地安装

> npm install eslint --save-dev

## 第二步：

配置.eslintrc.js 文件

> eslint --init

配置webpack.config.js 文件

> npm install webpack webpack-cli --save-dev

> npm install eslint-loader  --save-dev

配置webpack.config.js

    const path = require('path')
    
    module.exports = {
        mode: 'development',
        entry: path.resolve(__dirname, 'main.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js?[chunkhash]' 
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    loader: 'eslint-loader'
                }
            ]
        }
    }

## 第三步：

在package.json加上scripts的运行命令

"build": "webpack --config webpack.config.js"

## 第四步：

执行命令

npm run build

会发现编译成功，出现了一个dist目录，以及对应的生成的build.js，并执行了代码规范
