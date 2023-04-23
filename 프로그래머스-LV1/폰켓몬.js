function solution(nums) {
    const getNums = nums.length/2;
    const arr = [...new Set(nums)]
    return  arr.length>=getNums? getNums: arr.length;
}