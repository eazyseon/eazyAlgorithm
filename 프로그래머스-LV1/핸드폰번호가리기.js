function solution(phone_number) {
    let num = phone_number.length-4

    return new Array(num).fill('*').concat([...phone_number.slice(-4)]).join('')
}