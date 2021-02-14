## 문제
![2 x n 타일링 문제](./images/2 x n 타일링.PNG)

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
