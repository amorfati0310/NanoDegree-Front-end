# lottery 

지금 해야 될 것 

1. 기효님 피드백 확인하고 피드백 드리기 배열에 [] 표시가 나오는 부분을 해결할 수 있을까?  이 방법으로 시도 

2. 지금 새로고침을 하면 saved data가 날라가는데 mounted나 created가 될 떄 로컬에 있는 데이터를 saved data로 넣어줘서 그대로 저장하고 있는 방법이 필요할 듯 하다 

3. 예전 당첨번호들 긁어오는 거랑 + 지도 달아서 주변에 로또 판매점 검색해서 알려주는 것 :D 요 기능까지 

4. 추가적으로 번호 수동으로 일부 선택하고 제외할 숫자들 선택하고 요런것들 

   추가하면 얼추 서비스 마무리 까지 될 듯하다 :D 

5. 캡쳐기능 넣어서 사진으로 저장기능도 



이거 ... 이거 하루면 만들 수 있을 줄 알았는데 자꾸 추가하고 싶은 것도 많아지고

내 실력이 받쳐주지 못한 부분도 많고 :D 그래도 조금씩 내가 생각한데로 구현되어 가는 과정이 너무 재밌다. 너무는 오바고 그럭저럭 재밌다 ㅋㅋㅋ



번호별로 색깔 다르게 하기 





1. 로컬 8081로 기효님 버전으로 시도 

1번 피드백 받으면서 형변환을 할 수 있다는 것을 알았고 

+ 형변환

숫자만 있는 데이터는 배열 배열 그렇게 접근하는게 더 깔끔해 보이는데 이거 객체로 구현 마저 해보고 시간 날 때 배열로도 한 번 해보면서 어떤 것이 더 편한지 챠챠 알아봐야겠다. 

+ v-for 가 2번 타고 들어가면서 할 수 있구나 

저번에는 왜 안 됬지?.?

+ sort() 그냥 숫자 바로 정렬 될 것 같은데 유니코드 10이 2 앞에 오기 때문에 따로 안에 함수를 넣어줘야 된다.

a-b 가 오름차순 정렬 

b-a 는 내림차순 정렬 





### transition 

[뷰 트렌지션](https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components)

Enter Enter to 끝

Leave Leave to 끝

상태 를 저장하고 

Enter-active , Leave-active

transition 변화형태를 저장한다.





Slot 어떻게 쓰는

 거였더라..



.modal-mask-enter,.modal-mask-leave-to,

.modal-mask-enter-to, .modal-mask-leave



.modal-mask-enter-active
  transition: all .3 ease



모달 클로즈 기능 좀 더 자세히 다루기 



## 당첨 번호 가지고 오기

### api 







## axios 사용

```
 this.$http.get(`${baseURI}/posts`)
      .then((result) => {
        console.log(result)
        this.posts = result.data
      })
```



오늘 em을 사용해서 크기를 잘 맞추지 못했다. 

rem으로 많이 통일하자 :D 



기능 5개부터 해보고 





Goto main button 추가 





역시 사람 생각이 다 거기서 거기라는 것이 

이미 만들었었어 ㅎㅎ 

https://www.youtube.com/watch?v=QFbHxs4yJQk



