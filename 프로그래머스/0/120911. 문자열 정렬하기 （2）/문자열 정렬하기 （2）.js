function solution(my_string) {
    const string = [...my_string.toLowerCase()].sort().join('');
    return string
}