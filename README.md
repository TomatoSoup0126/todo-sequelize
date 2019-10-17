# Todo List
Todo List SQL版
- CRUD實作
- 登入系統實作
- 第三方網站登入實作
- 各種錯誤操作提示
- 密碼採用bcryptjs進行雜湊保證其安全性

### 功能
- 可註冊個人帳號
- 可使用facebook帳號進行登入
- 使用者登入後會看到屬於自己的待辦事項
- 首頁會顯示全部的待辦事項
- 可以進階檢視詳細的建立日期與更新日期
- 新增項目
- 修改項目
- 刪除項目

### 環境建置

- 安裝MySQL
於官方網頁中[下載](https://www.mysql.com/downloads/)後直接安裝

- 安裝MySQL Workbench
於官方網頁中[下載](https://www.mysql.com/products/workbench/)後直接安裝

- 啟動MySQL資料庫
```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```

- 建立table
```
npx sequelize-cli db:migrate
```

- 建立seeder
```
npx sequelize-cli db:seed:all
```

- 使用終端機從github clone本專案
   ```
   $ git clone https://github.com/TomatoSoup0126/Expense_record.git
   ```

- 移至本專案資料夾中 
  ```
  $cd [路徑名稱]
  ```
- 安裝相關聯npm檔案
  ```
  $ npm install
  ```
- 安裝nodemon (選擇性)
  ```
  $ npm install -g nodemon
  ```
- 第三方登入需於根資料夾創建`.env`檔案，並寫入下列資訊才能作用

  [facebook](https://developers.facebook.com/apps/)：
  ```
  FACEBOOK_ID=自己的應用程式編號
  FACEBOOK_SECRET=自己的應用程式密鑰
  FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
  ```


### 啟動伺服器
```
$ npm run dev
```
若成功啟動，終端機會顯示
`Express is listening on localhost:3000`

### 連至網頁
於瀏覽器中輸入下列網址
```
http://localhost:3000/users/login
```
便可連至該專案網頁

- 備有兩組seeder供測試
```
penguin@test.com
123456
```
```
tomatosoup@test.com
123456
```


### 關閉伺服器
於終端機中輸入`control`+`C`即可關閉伺服器結束本專案

## 使用工具
- [Node.js](https://nodejs.org/en/) - 伺服器建置
- [Express](https://www.npmjs.com/package/express) - 伺服器建置
- [MySQL](https://www.mysql.com/) - 資料庫建置
- [handlebars](https://handlebarsjs.com/) - 網頁模版引擎
- [Bootstrap](https://getbootstrap.com/) - 前端樣式
- [Font-awesome](https://fontawesome.com/) - 前端圖標
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - 密碼雜湊功能
- [connect-flash](https://www.npmjs.com/package/connect-flash) - 訊息提示
- [dotenv](https://www.npmjs.com/package/dotenv) - 讀取環境變數
- [passport](https://www.npmjs.com/package/passport) - 認證用middleware


