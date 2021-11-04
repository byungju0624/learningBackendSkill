# Study Back-end

> 1. Node.JS
>
> - 자바스크립트 런타임 환경
> - 노드를 배워야 하는 이유
>   - 자바스크립트로 다 할 수 있다.
>   - 절반이 넘는 개발자들이 사용하고 있다.
>   - 큰 기업들이 노드를 통해서 서버를 만들고 있다.
>   - 쉽고 심플하지만 파워풀하고 유연하다.
>   - 강력한 커뮤니티가 존재한다.
>   1. 자바스크립트 런타임 환경
>   2. 싱글 스레드
>      - 동기적인 프로그램 언어
>   3. Non-Blocking I/O
>   4. Event-Driven
>   - Event Loop : Call Stack이 비어있을 때까지 기다리다가 비어있으면 Task Queue에 있는 callback함수를 Call Stack으로 가져온다. callback함수가 들어오면 callback함수를 실행한다.
>   - Node.JS APP은 싱글 스레드 이지만 Node APIs는 멀티 스레딩이 가능하기 때문에 알아서 병렬적으로 처리하다가 우리가 원하는 동작이 완료되면 우리가 등록한 콜백함수를 테스크 큐에 옮겨준다. 테스크 큐와 우리 어플리케이션을 연결하는
>     이벤트 루프라는 것이 테스크 큐에 콜백을 콜스택이 비어있을 때 하나씩 가져온다.
> - 노드서버의 특징 및 장/단점
>   - 하나의 메인 싱글 스레드가 있다. 하나의 스레드가 요청을 받아서 필요한 일들을 처리할 수 있는 곳으로 위임해둠으로써 여러가지 요청을 빠르게 처리할 수 있다.

---

> 2. console 활용
>
> - console.clear(): 이전에 출력된 로그를 지우고 싶을 때 사용
> - log level에 따른 사용, 심각성에 따라서 색을 다르게 표현해준다. 배포했을 때 서버의 심각성을 빠르게 알 수 있고, 에러가 있을 때 에러의 부분을 수정하기 쉬워진다.
>   - console.log('log'): 개발할때 개발자를 위해서
>   - console.info('info'): 중요한 정보를 남기고 싶을때
>   - console.warn('warn'): 경보
>   - console.error('error'): 심각한 에러가 발생했을때, 사용자에러, 시스템 에러
> - assert: 첫 번째 인자로 전달되는 값이 true가 아닐 때 로그로 출력
> - table: 테이블 형태로 출력
> - dir: log와 같지만 옵션을 넣어서 사용할 수 있다. 중첩된 오브젝트를 어느 선까지 보여줄껀지 결정할 수 있다.
> - time,timeEnd: 시간을 측정, 성능 확인 때 사용하면 좋다.
> - count: 작성한 함수가 몇번 호출 되었는지 확인할 때 사용할 수 있다.
> - countReset: 카운트를 리셋할 수 있다.
> - trace: 함수가 어떻게 호출되었는지 확인하고 싶을 때 사용한다. 디버깅할 때 유용하다.

---

> 3. this
>
> - global 영역에서 선언한 함수 안의 this는 global을 바라본다.
> - class 안에서의 this는 해당 class를 바라본다.
> - node.JS안에서의 this는 module에 있는 exports와 같다.

---

> 4. Buffer and Stream
> 1. Buffer
>    - 메모리에서 어떤 고정된 사이즈의 메모리 덩어리, 숫자의 배열
>    - 메모리에 들어있는 데이터 자체
>    - 유니코드 형태로 표현
> 1. Stream
>    - 이벤트 베이스,데이터를 조금씩 가져온다.
>    - 일반적으로 데이터, 패킷, 비트 등의 일련의 연속성을 갖는 흐름을 의미

---

> 5. HTTP(Hypertext Transfer Protocol)
>
> - 텍스트타입의 HTML,JSON 뿐만 아니라 MP3나 Video등 다양한 미디어를 전송하는 프로토콜.
> - 요청과 반응으로 이루어진 프로토콜(request-response protocol)
> - 클라이언트가 서버에 특정한 일을 요청하고 서버는 요청에 대한 응답을 보내준다.
> - 1989년부터 개발을 시작했다.
> - 1994년 즈음 http에 보안이 추가된 프로토콜이 생겼다.(HTTPS)
> - HTTP는 주고받는 데이터의 암호화가 되어 있지 않기 때문에 제 3자가 중간에 데이터를 가로채서 읽을 수 있다.
> - HTTPS는 TLS/SSL같은 조금더 암호화된 안전한 방식으로 전달하기 때문에 제 3자가 데이터를 가로챌 수 없다.
> - HTTP V1: 텍스트를 베이스를 한다. 데이터를 주고받을 때 모든 것이 텍스트 형태로 전달되기 때문에 다른 사람이 봤을 때 내용을 바로 이해할 수 있다. 압축하지 않기 때문에 사이즈가 크고 한번에 하나의 파일만 전달할 수 있다.
> - HTTP V2: 텍스트 형태가 아니라 바이너리(로우 데이터) 형태로 서로 주고 받는다. 제 3자가 그냥 보기에도 한눈에 이해하기 어렵다.헤더 부분도 압축해서 주고 받고, 멀티 플렉싱이 가능하다.(여러개의 파일을 전달 가능하다.)
>   1. Status Code
>      - HTTP 표준에서 정의됐기 때문에 공통적으로 약속된 언어
>      - 1xx(Infomational),2xx(Successful),3xx(Redirection),4xx(Client Error),5xx(Server Error)
>      1. 1xx
>         - 100: 클라이언트가 요청을 하고 있을 때 계속 요청을 하라고 할때 나타낸다.
>         - 102: 처리 중인 것을 나타낼때 사용한다.
>      2. 2xx
>         - 200: 클라이언트가 요청한 리소스를 찾았다면 성공했다고 나타낼때
>         - 201: 클라이언트가 어떤 특정한 리소스를 만들기를 요청한다면 만들어졌을 때
>         - 204: 요청한 것을 처리했지만 거기에 대한 콘텐츠가 없을 때
>      3. 3xx
>         - 301: 요청한 것에 대한 URL이 다른 URL로 영구적으로 바뀌었을때
>         - 302: 요청한 것은 임시적으로 다른 곳으로 옮겨졌으니 다른 곳으로 가라는 내용
>         - 303: 302와 비슷하나 GET 요청에서만 사용가능
>         - 307, 308: 임시적으로 또는 영구적으로 redirection을 나타낸다.
>      4. 4xx
>         - 400: 클라이언트가 무언가 요청했을 때 쿼리가 잘못 됐거나 API가 잘못된 방식으로 사용할 때
>         - 401: 로그인된 특정한 키를 가진 사람이 요청가능한데 요청이 없는 사람이 요청할 때
>         - 403: 로그인한 사람이긴 하지만 특정한 일을 할 권한이 없을때
>         - 404: 원하는 URL이 없을 때
>         - 405: 해당 URL의 한해서 쓰거나 삭제하는 기능이 허용되지 않을때
>         - 409: 클라이언트가 만들고자 하는 리소스가 이미 존재하거나 충돌이 날때
>      5. 5xx
>         - 500: 서버내부에서 문제가 생겨서 처리할수 없을때
>         - 502: 중간에 있는 서버가 요청을 받아서 처리해야하는데 어떻게 처리해야 할지 모를때
>         - 503: 서버가 준비되지 않았을 때
>   2. Request
>      - URL(Uniform Resource Locator): 리소스가 어디있는 지 고유한 값을 나타내는 주소같은 것
>      - GET(해당하는 리소스를 가져올때)
>      - POST(URL에 가리키고 있는 곳에 무언가를 만들고 싶을 때)
>      - PUT(기존 URL에 있는 리소스를 업데이트하고 싶을때)
>      - DELETE(삭제할때),PATCH(부분적으로 업데이트 할때)
>      - HEAD(데이터는 받지 않고 헤더만 받고 싶을때)
>      - OPTIONS(URL에서 사용가능한 모든 리퀘스트 옵션을 알고 싶을 때)
>      - TRACE(요청에 대한 반응을 필요로 할때)
>      - Idenpotent: 동일한 요청을 몇번했을 때 항상 서버를 동일한 상태를 유지할 수 있냐를 나타낸다.

---
