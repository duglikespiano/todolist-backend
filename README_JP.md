# todolist_backend(jp)

##### [한국어 버전은 이 곳을 클릭해주세요](README.md)

##### [Click here for English version](README_EN.md)

## - 目次 -

1. 概要
2. Project 目標
3. Postman API 呼び出し試演
4. 今後具現予定機能
5. 改善必要内容
   </br>
   </br>

### 1. 概要

- Project タイトル: todolist_backend
- 期間 : 2023.01.09 - 2023. 01. 15(7 日)
- 人員 : 1 人
- 技術スタック : </br>
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logo=typeorm&logoColor=white"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
  </br>
  </br>

### 2. Project 目標

1. todolist の為の簡単な CRUD 機能の API 製作
2. frontend server との連動出来るように具現する事
3. Postman の API 呼び出し機能を使う事
   </br>
   </br>

### 3. Postman API 呼び出し試演 </br>

1. todoitem 追加</br>
   <img src='./ref/todo_add.gif' width=600px>
2. todoitem 読み込み</br>
   <img src='./ref/todo_get.gif' width=600px>
3. todoitem 修正</br>
   <img src='./ref/todo_modify.gif' width=600px>
4. todoitem 削除</br>
   <img src='./ref/todo_remove.gif' width=600px>
5. cetegory タイトル修正</br>
   <img src='./ref/category_namechange.gif' width=600px>
6. cetegory 内容全体削除</br>
   <img src='./ref/todo_removeall.gif' width=600px>
7. Postman API 呼び出し test</br>
   <img src='./ref/runtest.gif' width=600px>
   </br>
   </br>

### 4. 今後具現予定機能

1. 二つ以上の category 表を表現する為の ERD 改善
2. もっと具体的なエラーハンドリング
   </br>
   </br>

### 5. 改善必要内容

1. MVC model の適用
2. 全体的な refactoring
