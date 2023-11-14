## 도서 관리 시스템
![image](https://github.com/sin6338ki/book_sys/assets/130349912/8704d786-3a23-422b-b32c-1b7992566e8b)

### 시스템 아키텍처
![image](https://github.com/sin6338ki/book_sys/assets/130349912/f1b4036c-609d-4855-a434-610fcafe9841)

### ERD
![image](https://github.com/sin6338ki/book_sys/assets/130349912/25687abb-ee6e-467b-b51d-4096cf0dec61)

### 주요 기능 
- 회원 관리 : 회원 등록, 로그인, 로그아웃
- Redux 활용 회원 정보 저장
- spring-security-crypto PasswordEncoding하여 Hash값 DB 저장
- 도서 대출 : 도서 목록 조회/검색, 회원 목록 조회/검색, 대출 신청
- 도서 반납 : 도서 대출 전체 이력 조회, 반납 신청
- 도서 등록 및 수정
- 해당 도서 대출 이력 조회
- Tailwind CSS 적용 디자인
- Springdoc(Swagger) 적용하여 API 문서 자동화
- Jenkins 를 통한 CI/CD 구축

### 향후 발전 방향 
- FRONT-END 빌드 실패 >> key 권한 및 접근 권한 문제 발생으로 build 파일 접근 불가 >> 문제 해결 예정
- 사진, 상세 도서 설명 등 기능 추가
- BACK-END 코드 리팩토링
- spring security 적용 보안 설정 진행
- docker 적용

### 트러블슈팅(차후 정리 필요) 
1. front-end nginx 사용으로 인한 build 파일 접근 불가 > 권한 설정
2. properies 파일 외부에서 주입
   >> 백엔드 배포 서버에 properties 파일 생성, deploy.sh 실행시 jar파일에 주입 : 파일 작성시 띄어쓰기 주의 (\ 줄바꿈 후 띄어쓰기 X, 경로 작성 주의)
   >> back-end 빌드 실패 >> build 옵션 설정 (테스트 제외)

