const N = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];


const solution = (arr) => {
    let maxNum = Math.max.apply(Math, arr);
    let count = 0;
    let result = [];

    arr.filter((num) => {
        if(num === maxNum) {
            count++;
            if(count === maxNum) {
                result.push(num);
            }
        }
    });

    return result.length > 0 ? result : [0] ;

};

console.log(solution(N));