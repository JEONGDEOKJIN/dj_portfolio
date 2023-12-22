# Create-React-App

```sh
npm install -D tailwindcss postcss autoprefixer style-loader css-loader postcss-loader
```

```sh
npx tailwindcss init -p
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'], // 이부분추가
    theme: {
        extend: {},
    },
    plugins: [],
}
```

```css
// src/App.css

@tailwind base;
@tailwind components;
@tailwind utilities;

// 이하 생략
```

```jsx
// index.js
```

## webpack loader 설정

필요한 패키지 설치

```sh
npm install tailwind-cra-webpack-plugin
```

webpack.config.js 파일생성

```

```

## icons

```sh
npm install react-icons --save
```


## git hub page 설치 설명 블로그 
https://velog.io/@bami/React-GitHub-Pages%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0


```json
build:{
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```


# github page 배포 정리 
```sh
# package.json 파일 수정 
    # hompage 경로 
        "name": "portfolio",
        "version": "0.1.0",
        "private": true,
        "homepage": "https://jeongdeokjin.github.io/dj_portfolio/",
    
    # script 
        "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"

# 설치 | npm i 했는데 왜 설치가 안 되는 건지 모르겠음.
npm install gh-pages

# 실행 
npm run deploy
```



# 프로젝트 시작하려면 

``` bash 
# 1. 로컬에서 프로젝트 열기 
npm start

# 2. 로컬에서 수정하고 빌드하기
npm build 

# 3. 빌드된 것 배포하기 
npm run deploy

# 4. https://github.com/JEONGDEOKJIN/dj_portfolio 푸쉬 하기 

# 5. 변경 확인 

```