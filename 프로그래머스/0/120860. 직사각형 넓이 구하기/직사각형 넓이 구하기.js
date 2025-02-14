function solution(dots) {
    var answer = 0;
    const rows = new Set();
    const col = new Set();
    
    dots.forEach(point =>{
        rows.add(point[1]); //x
        col.add(point[0]); //y
    });
    const width = Math.max(...rows) - Math.min(...rows);
    const heigth = Math.max(...col) - Math.min(...col);
    
    return width * heigth;
}