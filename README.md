## 指令

`npm run start` run 開發環境

`npm run build` 打包靜態部署文件

`npm run deploy` 部署至 github page

## Demo

[連結](https://chou0728.github.io/react-calculator/)

## 項目結構

```javascript
├── public
│   └── index.html             專案主要html
│
├── src                        專案主要資源
│   │
│   ├── components             共用組件
│   │   └── ...
│   │
│   ├── store                  redux相關資源
│   │   ├── actions.js
│   │   ├── actionTypes.js
│   │   ├── reducer.js
│   │   └── index.js
│   │
│   ├── App.js                 react 根元件
│   ├── App.scss               專案 style
│   ├── index.js               專案 js 注入點
│   └── ...
│
├── .prettierrc.js             prettierrc 格式
├── .prettierignore            不想被prettierrc套用格式的文件
├── .gitignore                 不想被git紀錄的文件
└── package.json               package套件列表
```
