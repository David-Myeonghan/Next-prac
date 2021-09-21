## readme

### 참여자 Contributor

-   @David-Myeonghan

### Tech Requirement (Tech Stack)

-   Create-next-app
-   Next.js
-   TypeScript
-   ESLint
-   Babel 설정 (IE 11 대응시) - ES2015 이전 문법 지원하게 된다.
    -   https://nextjs.org/docs/advanced-features/customizing-babel-config

### Docker

```
- Dockerfile을 이용해서 Docker Container
- Docker Compose를 사용하고 있습니다.

### Script
```

$ npm run dev

```

```

$npm run build
$npm run deploy

```

```

### 테스트

-   유닛 테스트
    -   코드상 기능 점검 (로직 점검 a->b), 기초
-   E2E 테스트(End to End Test)

    -   실제 동작을 바탕으로 기능 점검
    -   예, 어떤 버튼을 클릭했을 때, url이 의도된 대로 바뀌었다. (브라우저에서)
    -   로직이 아닌, 의도한대로 동작하는지 점검
    -   예, 버튼을 클릭해서 유저의 데이터를 받아올 때,
    -   유저 데이터를 잘 받아왔는지,
    -   데이터가 잘 렌더링 되고 있는지.
    -   실제 환경 테스트, 브라우저별 E2E 테스트 도구와 Selenium과 연동 시키기

-   테스트 통과는 우리가 의도한 대로는 동작한다는 뜻
-   엣지 케이스는 실제 발생했을 때 대응
-   크리티컬한 것은 미리 대응 (열번 클릭시, 열 번 결제!)
-   열 번 클릭시, 로깅 열번..?

-   Jest 사용
-   ```
    $ npm run test
    ```

```

```
