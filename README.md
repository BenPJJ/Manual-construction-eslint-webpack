# ESlint-Simple
一个简单的eslint搭建和使用

``` js
$ npm install
$ eslint [options][file].js
```

自我手动搭建

## 第一步：

本地安装

>  npm install eslint --save-dev

## 第二步：

设置配置文件

> eslint --init

![初始化](C:/Users/jj/Desktop/%E5%89%8D%E7%AB%AF%E5%A4%A7%E6%A1%86%E6%9E%B6%E7%9F%A5%E8%AF%86%E5%BD%92%E7%BA%B3%E4%B8%8E%E6%80%BB%E7%BB%93/Eslint/media/%E5%88%9D%E5%A7%8B%E5%8C%96.png)

完成后，项目的根路径会自动新建一个`.eslintrc.js` 文件

```js
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};
```

## 第三步：

执行命令，检查代码语法

> eslint index.js

## 第四步：

根据项目需求配置`rules` 规则