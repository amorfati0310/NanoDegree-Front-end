# Question 1  savedNumbers???



저장된 숫자를 어떤 형식으로 저장해야 될지 잘 모르겠다. 

내가 설계 하기 나름일 텐데 

1. []

2. []

3. []

   ​

   ​

이런식으로 저장되게 하고 싶은데  객체는 숫자를 넣지 못하고 어떤방식으로 넣어야 될지 잘 모르겠다. 처음에 배열에 [{key 배열 }]

이런식으로 하는  것도 괜찮을 것 같기도 근데 key값을 어떻게 변하게 대응시키지?



```
1) 
savedNumbers:[]

SavedNumber(){
  var lottonumber ={};
  lottonumber..... 이부분 속성값을 계속 변화시키는 걸 잘 모르겠다.
  이렇게 접근하면 속성값을 굳이 변화시킬 필요요는 없네 
  this.savedNumbers.push('')
 
  
}
2번째 방법 2차원 배열로 접근 하면 
savedNumbers:[[]];

savedNumber(){
  
  this.savedNumbers
  
}
이거 어떻게 해야 될까? 
우선 1번 방법 부터 해보고 2번으로도 시도해보자 

```

 







로또 숫자들을 저장하면 

저장된 리스트에서 .key 값들이 하나씩 

```
savedNumber = {

key: value 로 넣으면 
[],[],[],[],[]...
}

예를 들면 

savedNumber.first = locallstorage



```

