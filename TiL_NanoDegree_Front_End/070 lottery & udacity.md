## lottery

###  naver나 구글 지도 api 달기 









-----



### 저장된 숫자 출력하는 카운트 기능

 ㅇㅇ

localstorage.length로 간단히 해결될 줄 알았는데 컴포넌트에서는 

update된 것을 

app.vue에서 인지를 잘 못한다. 

app.vue에서 data vinding을 해줘서. 컴포넌트로 내려주면 해결 될 것 같다



요기까지 

이벤트가 발생하는 쪽에 데이터 바인딩을 해줘야 데이터 변화를 감지할 수 있다!!!



해당 index키 값이 제대로 위치로 설정이 안 되어 있어서 제대로 동작을 안 한다. 



## 예전 번호들 긁어오기

api 그냥 다른 서비스 쓸 떄 사용 설명서 

api.google.com 

google map api 



외부 데이터 

외부 기능 



처음에 검색으로 긁어온다 생각했는데 로또 api가 검색해보니 따로 있었다. 



모달로 로또 api가져오기 







## 리스트에 그냥 번호 추가하기  ETCㅣ

이런식으로 출력되게 별 필요 없으려나ㅇㅍ

ㄷ

###  캡쳐 기능  

사실 지도보다 더 유용할 것 같다. 굳이 근처 판매점 검색 하려나.... 

 아닌가 잘 모르겠다. 







##  Udacity Project 3

### 1. svg 에는 alt 대신 title을 써야 한다

ㅇ=ㅇ html validator로 체크 할 것! 

[html validation w3c](https://validator.w3.org/#validate_by_upload)

### 2. svg hard로 넣지 말고 img안에 넣어라 



### 3. codeblock 마다 간격을 두기 

```html

```



```
<div class="foo">
    <div class="bar">
        <!-- content -->
    </div>

    <div class="bar">        
        <!-- content -->
    </div>
</div>


<div class="foo">
    <!-- etc -->
</div>
```



### srcset를 활용해라

You can use `srcset` to tell browser to download the most optimized image size for different device / screen size.
When using `srcset`, we need to also use `sizes` to truly optimize the requests.

```
<img  src="images/great_pic_800.jpg"
      sizes="(max-width: 400px) 100vw, (min-width: 401px) 50vw"
      srcset="images/great_pic_400.jpg 400w, images/great_pic_800.jpg 800w"
      alt="great picture">
```



[lesson](https://classroom.udacity.com/courses/ud882/lessons/3574748851/concepts/39896486020923#)



srcset 1배율 2배율 ->>>



요기 잘 모르겠다.. size  33.3333vw로 하면 되지 않으려나 margin도 줘야 되는데  어떻게 하지 



### footer linkedin, github 등을 포함시켜라 



###  

###  {} brackket 띄어쓰기 !!

### height set auto or 없애라

### img css 폴더 따로 관리해라 



### 미디어쿼리를 이용해서 리디자인 할 것 



미디어쿼리 가이드라인이 없어서 그냥 떨구면 되는 것인가 

글자 크기를 줄일 것인가 ... 

무난한 글자 크기를 줄이는 방향으로 가보자 ㅁ



412

5x 모바일에서 텍스트가 겹치는 문제 

해결 방안 텍스트 사이즈를 줄이거나.. 개행시키거나 



아래 왤케 빈공간이 남지..



ipad 



ipad pro 



desktop 기준으로도 다 문제 







### JS Loops 



14. quiz  다시 풀기 팩토리얼 

 15.

16.



argument 와 parameter차이 

파라미터는 정의 하는 것이고 

arguments는 실제 대응하는 값들 





## 기효샘  피드백 



<<<<<<< //master

        // #2-3
        // App.vue 에서 SaveList.vue 로 넘길 때 Array 가 아니라 String 으로 변환해서 넘길수도 있습니다.
      //  this.savedNumbers.push(String(this.lottoNumbers));
        // this.savedNumbers.push(templottoNumbers);
     // }
     // else{
     //   alert('저장할 번호가 없어요 !!!')
     // }
=======//
>>>>>>>// master



<<<<<<< master

                <span class="btn-save-lottonumber-icon" @click="deleteLottoNumbers(savedlottoNumber,index)">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
                <!--method로 바꾸려는 시도   -->
                <!-- <span class="each-number">{{displayNumbers(savedlottoNumber.numbers)}}</span> -->
    
                <!-- #3 -->
                <!-- methods 로 바꾸시려면 v-on:click 이나 @click 으로 사용하시면 되지 않을까요? -->
                <!-- 왜 v-text 를 사용하셨는지는 모르겠지만, v-text 역할이 {{ }} 와 동일하므로 가급적 {{ }} 사용하시길  -->
                <span class="each-number-for-method" v-on:click="displayNumbers(savedlottoNumber)">{{savedlottoNumber}}</span>
    
                <!--Computed 적용하려 했으나 잘 안 됨   -->
                <!-- <span class="eachnumber" >{{ displayNumbers(savedlottoNumber.numbers)}}</span> -->
                <!-- <span class="each-number" v-text="displayNumbers(savedlottoNumber.numbers)"></span> -->
    
                <!-- #4 -->
                <!-- 희찬님이 computed 로 어떤걸 구현하려는 건지는 모르겠으나, 일단 computed 와 methods 의 가장 큰 차이점은
                1. computed 계산된 값이 캐시가 된다는 점.
                2. computed 인자를 받을 수 없다는 점
                3. 인자를 받기 위해서는 methods 를 사용한다는 점
                을 먼저 정확히 구분하셔야 합니다. https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods 참고
    
                그럼에도 불구하고 computed 를 편법으로 사용하시고 싶으면,
                아래 computed 에 구현한 map() 방식을 참고하세요. -->
                <!-- <span class="eachnumber">{{ doubleSavedLottoNumber }}</span> -->

=======
                <span class="each-number">{{savedlottoNumber.numbers}}</span>
                <span class="btn-delete-lottonumber-icon" @click="deleteLottoNumbers(savedlottoNumber,savedlottoNumber.index,index)">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
>>>>>>> master

<<<<<< master

        // doubleSavedLottoNumber() {
        //   return this.savedNumbers.map(function (data) {
        //     data *= 2;
        //     return data;
        //   });
        // },
=======
        displayNumbers(Numbers) {
            return Numbers;
        }
>>>>>>> master







