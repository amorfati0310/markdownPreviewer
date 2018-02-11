# Markdown Previewer


`create-react-app`을 통해서 만든 마크타운 프리뷰어 입니다.

## Design

마크다운 프리뷰어를 만드는데 필요한 부품

입력창  -> 변환 -> 디스플레이 창


boilerPlate 만들 필요성이
RCC, RSC,

[참고_사이트](http://markdownlivepreview.com/)


### 우여곡절

프리뷰 컴포넌트를 만들어서 props로 state를 전달해주었었는데
출력이  html이 그대로 나오는 <p>aaaa</p> 이런식으로 완전 날 것이 출력되었다
그래서 다른 라이브러리를 알아보았다 Markdown.js -> react-markdown.js
리액트 마크다운.js


```
   <MarkdownPreview markdownText={this.displayMarkdownText(this.state.textInput)}/>
```

라이브러리를 알아볼 때에도 리액트에 최적화 된 react markdown preveiw 이런 식으로 검색해봤으면 시간을 줄일 수 있었을 텐데 하는 아쉬움
