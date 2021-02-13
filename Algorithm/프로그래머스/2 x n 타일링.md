## 문제

문제 설명
가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

타일을 가로로 배치 하는 경우
타일을 세로로 배치 하는 경우

직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
가로의 길이 n은 60,000이하의 자연수 입니다.
경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.


## 내 풀이
```java
class Solution {
    static int S_NUM = 1000000007;
    static int[] sArr =new int [60001];
    public int solution(int n){
        int answer = 0;
        sArr[1] = 1;
        sArr[2] = 2;
        answer = dp(n);
        return answer;
    }
    
    static int dp(int n){
        if(n==0) return 0;
        if(sArr[n]!=0) return sArr[n];
        sArr[n] = (dp(n-2) + dp(n-1))%S_NUM;
        return sArr[n];
        
    }
    
}

```
