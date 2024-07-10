# Ajax(Asynchronous JavaScript and XML, 에이잭스)

- JavaScript 에서 Web Application Server, Web Server 에 비동기방식으로 요청을 보내고 응답을 받아 처리를 수행하는 웹 개발 기법
- Web Browser 화면을 그대로 유지하면서 HTML 에 포함된 JavaScript 코드가 서버와 통신을 하여 요청을 보내고, 응답을 받아 화면을 JavaScript 코드로 그린다.
- Web Browser 에 보이는 전체 화면중에서 일부만 화면을 다시 그릴수 있다. 현재 화면이 새로 고침되거나 하지 않고 일부만 변경하여 업무를 처리 할수 있도록 하는 방법

## HTML 문서에 포함된 JavaScript 에서 Ajax 통신을 통하여 서버로 부터 데이터를 받아오는 방법

- Web Browser 에서 서버로 요청을 보내고 응답을 받을때는 최종적으로 무조건 HTML 코드로 받는다. 서버가 화면에 보여질 모든 것을 HTML 코드로 만들고, HTML 코드를 Browser 로 보내서(응답, Response) Browser 에 내용을 그려서 사용자에게 보여준다.
- Ajax 방식에서는 서버가 응답을 할때 HTML 코드 뿐만아니라, 순수 데이터만 직접 보낼수 있다. 이때는 응답받은 데이터를 javaScript 를 사용하여 화면에 그리는 일을 수행해야 한다.
- JavaScript 에서 Ajax 통신을 하는 방법은 초기부터 XMLHttpRequest 라는 도구를 주로 사용했다.
- XMLHttpRequest 도구를 사용하면 서버에 요청을 보내고 응답을 받는 것 뿐만 아니라, 사용자의 컴퓨터에 저장된 파일을 불러와서 가공하여 화면에 보여주는 일도 수행할 수 있다.
- 현재 이 프로젝트에서는 index1.html 파일에 구현된 layout 을 그대로 유지하면서, 필요에 따라 dog_detail.html 파일을 읽어와서 화면의 section 부분을 새롭게 그려서 detail 화면을 보여주는 기법이다
- XMLHttpRequest 는 사용자 컴퓨터에 저장된 로컬 파일을 읽을 수 있는 기능있다. 만약 사용자 컴퓨터에 중요한 정보가 담긴 파일이 저장된 위치를 알게 된다면, Web Browser 에 그 정보를 보여서 중요정보를 노출시킬수 있다. 보안적인 문제가 발생할 수 있다.
- 최근 보안 관리 차원에서 Browser XMLHttpRequest 를 사용하여 로컬 파일을 읽을 수 없게 만들어 가고 있는 중이다.

- 원격 서버에 Ajax 통신을 통하여 데이터를 요청할때는 지금현재 JavaScript 버전에서는 `fetch` 라는 도구를 사용하도록 하고 있다.
