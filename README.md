# MergeNumberAndSort

# การสร้าง project และเตรียม dependency สำหรับ Typescript ด้วยโปรแกรม Visual Studio Code
npm i -g typescript ในการติดตั้งโปรแกรมของ Typescript 
npm i -g ts-node typescript '@types/node' ใช้ในการสามารถรัน file .ts ได้โดยไม่ต้องสร้างไฟล์ .js ก่อนแล้วใช้ node ในการรัน file 
ts-node {filename.ts} ใช้สำหรับรันโปรแกรมที่เป็น file .ts ได้เลย

# ในการสร้าง unit test ในที่นี้ผมใช้ jest เป็น framework ในการสร้าง
npm i jest เพื่อติดตั้งตัว jest
npm install typescript jest ts-jest @types/jest --save-dev เป็น dependency ที่ใช้สำหรับการใข้งาน unit test ของ jest
npm init -y สร้าง file package.json เพื่อใช้ในการรัน script (เปลี่ยน value ของ key ที่ชื่อ test เป็น "jest" ใน file package.json)
tsc --init สร้าง file tsconfig.json

สร้าง file jest.config.js with this code 

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};

npm test สำหรับการ run test 
