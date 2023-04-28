function solution(nums) {
    let answer = 0;
    let num = 0;
    let cnt = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                num = nums[i] + nums[j] + nums[k];
                cnt = 0;
                for (let n = 1; n <= num; n++) {
                    if (num % n === 0) cnt++;
                }
                if (cnt === 2) answer++;
            }
        }
    }

    return answer;
}