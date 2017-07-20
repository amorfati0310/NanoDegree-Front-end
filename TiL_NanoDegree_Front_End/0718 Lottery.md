# Lottery 기능 추가  

## 1.저장버튼 저장하면 같은 것 저장 못하게 하기 



transition 추가 하기 



겹치는 부분 save it 하면 다시 같은 거는 save 못하게 하기 

그럴러면 

내가 아는 방법 한에서 

1..data를 이용해서 Make LottoNumber가 눌리면 true 값으로 놓고 save it 버튼이 transition 되도록 하고  save it버튼을 누르면 

다시 사라지는 형태 



2. 또 다른 	방법 있을까 버튼 활성화 클릭이 안 되게 하는 방법도 있을 것 같고 

   position 으로 다른 layer text만 같은 것이 위로 씌워지는 형태도 있을 것 같은데 

   1번 방법 없애버리는게 젤 괜찮아 보인다. 사용자에게 정보를 아예 제공 안하는 것이 좋은 방법 같다.



1번으로 추가 완료 

----

## 2. 저장 리스트 마다 delete버튼으로 지울 수 있게 하기 



지우는 것 추가  했어요 :D 

수업 떄 한 거=ㅂ= 붙이기만 하면 됬는데 멍청이 같이 

@v-on: 이러고 이벤트를 왜 못 받지 ... 그래도 디버깅 콘솔로 찍어가며 

얘가 못 받네 하며 알아냈다. 로그 찍어가며 디버깅 한 건 칭찬해 ~~ 





## 3 . Lottery 몽땅 지우는 기능이랑 로컬스토리지로 저장하고 블러오는 기능 추가하기 







## 4. 지도 붙이는 것도 얼른 해보고 싶다아~~ 

 

## 5. MAX COUNT 는 10까지로 

+ ​



### 6. 그리고 저장된 넘버들에 indexing 처리 정도는 해야 좋을듯 하다 

내가 저장한 1번 , 2번 정도 







----------

# Udacity 

## Project 3 

### Code Quality

- All code ( `HTML` element names, attributes, attribute values) is lowercase (except `text/CDATA`).
- Code does not have trailing white spaces.
- Indentation is consistent (either all tabs or all 2 spaces or all 4 spaces etc).
- Code uses a new line for every block, list or table element and indent every such child element (it's acceptable to put all `<li>`elements in one line).
- [Optional] When quoting attribute values, code uses double quotation marks.


- `HTML` documents use `HTML5` `<!doctype html>`.
- Code passes [`HTML`](https://validator.w3.org/#validate_by_input) and [`CSS`](https://jigsaw.w3.org/css-validator/#validate_by_input) validators.
  *[Optional] Code does not use entity references unless necessary e.g. characters with special meaning in `HTML` (like < and &) as well as control or “invisible” characters (like no-break spaces).
- [Optional] Code omits type attributes for style sheets and scripts.


- Code does not have trailing white spaces.
- Indentation is consistent (either all tabs or all 2 spaces or all 4 spaces etc).
- Code indents all block content, that is rules within rules as well as declarations to reflect hierarchy and improve understanding.
- Code uses a semicolon after every declaration for consistency and extensibility reasons.
- Code always uses a space after a property name's colon, but no space between property and colon, for consistency reasons.
- Code always use a single space between the last selector and the opening brace that begins the declaration block.
- Code always start a new line for each selector and declaration.
- Code always put a blank line (two line breaks) between rules.
- [Optional] Code uses double quotation marks for attribute selectors or property values. Do not use quotation marks in `URI` values (`url()`).


- Code uses meaningful or generic ID and class names that are as short as possible but as long as necessary.
- Code does not use element names in conjunction with IDs or classes.
- Code uses shorthand properties where possible.
- [Optional] Code omits unit specification after 0 values.
- [Optional] Code includes leading 0s in decimal values for readability.
- [Optional] Code uses 3-character hexadecimal notation where possible.
- [Optional] Code separate words in ID and class names by a hyphen.
- [Optional] Code avoids user agent detection as well as `CSS` "hacks"—try a different approach first.


- `HTML` templates and documents use `UTF-8` encoding. (no `BOM`) i.e. `<meta charset="utf-8">`.
  *[Optional] Mark todos and action items with `TODO`

쭉 읽어볼 것 

이 사람들 HTML Validatior랑 CSS Validator 



### Please do not hard-code SVG code into HTML file.

image 폴더 안에 svg 를 넣거나 



### 가독성을 높이기 위해서 코드 블록 사이에 빈 줄을 추가해랏! 







footer에 이 친구 말대로 아이콘들 넣어보기 





For a fun practice, we can arrange some social icons in `<footer>` section by including LinkedIn, Github, etc. links.

One quick way to implement this is to use [FontAwesome](http://fontawesome.io/). There are many different logo icons that we can choose to fit the social icon list.







샘 주석 2에서 