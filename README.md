# ALA-frontend main branch

## 기술 스택

|       기술        |  버전   |
| :---------------: | :-----: |
|       Node        | 14.17.0 |
|       Yarn        | 1.22.5  |
|       React       | 17.0.2  |
|       Redux       |  4.1.0  |
|    Redux-saga     |  1.1.3  |
| styled-components |  5.3.0  |

## 아키텍처

## Git Rule

`branch rule` <br/>

<strong>main</strong>

- 최종 완료된 코드를 머지하는 브랜치
- 배포할 코드를 관리하는 브랜치
- CI/CD가 이루어질 브랜치

<strong>develop</strong>

- main에서 분기
- 기능 개발이 완료된 코드를 관리하는 브랜치
- feature에서 기능 개발이 완료되는 코드를 merge
- CI/CD가 이루어질 브랜치

<strong>feature</strong>

- develop에서 분기
- 기능 별로 관리하는 브랜치
- 브랜치명은 feature/#이슈번호-기능
  - (ex) feature/#1-Login
- 개발이 완료된 브랜치는 develop으로 PR

<strong>release</strong>

- develop에서 분기
- 릴리즈를 위한 브랜치
- 배포하기 전 마지막 테스트
- 완료된 경우 master로 merge

<strong>hotfix</strong>

- master에서 분기
- 배포된 서비스에 문제가 생기는 경우를 관리하는 브랜치

`commit rule` <br/>

<strong>Feature</strong>

- 새로운 기능 추가

<strong>Fix</strong>

- 버그 수정

<strong>Docs</strong>

- 문서 수정

<strong>Style</strong>

- 코드 포맷팅, 세미콜론 등 코드 변경이 없는 경우

<strong>Refactor</strong>

- 코드 리팩토링

<strong>Chore</strong>

- 그 외, 설정 파일 수정 등

(ex) Feature: 제목 \n 본문 \n #이슈번호
