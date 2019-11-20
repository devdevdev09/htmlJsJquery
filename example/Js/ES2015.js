// ES2015 정리

// 파라미터를 배열로 받을 수 있음
function test1(param, ...params){
    console.log(param);

    for(let i  = 0 ; i < params.length; i++){
        console.log(params[i]);
    }
}

// object 사용시, 키만 적을 수 있음
function test2(userName){
    // const obj = {
    //     userName : userName
    // }

    const obj = {
        userName,
    }
}
// key&value가 같을 경우 하나만 표기할 수 있음
// 마지막에 ',' 찍어도 상관없음

// 기본값 받기
function test3(test="test3"){
    console.log(test);
}

// test3() => "test3"
// 호출할때 파라미터 없으면 기본값 적용
