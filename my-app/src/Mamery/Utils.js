

//export 就是能 import到別的頁面的東西
export const icon ={
    triangle_one:'🦜',
    triangle_two:'🦜',
    diamond_one:'🐠',
    diamond_two:'🐠',
    star_one:'🦍',
    star_two:'🦍',
    roundShape_one:'🎊',
    roundShape_two:'🎊',
    female_one:'🦚',
    female_two:'🦚',
    male_one:'🦉',
    male_two:'🦉',
    ohm_one:'🐞',
    ohm_two:'🐞',
    bar_one:'🦂',
    bar_two:'🦂',
}










   const shu= '16'

 function shuffle(shu) {
    var currentIndex = shu.length;
    while (currentIndex !== 0) {
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        var temporaryValue = shu[currentIndex];
        shu[currentIndex] = shu[randomIndex];
        shu[randomIndex] = temporaryValue;

    }
    return shu;
}
console.log(shuffle(shu))














































// export const icon=[
// {triangle_one:'🦜'},
// {triangle_two:'🦜'},
// {diamond_one:'🐠'},
// {diamond_two:'🐠'},
// {star_one:'🦍'},
// {star_two:'🦍'},
// {roundShape_one:'🎊'},
// {roundShape_two:'🎊'},
// {female_one:'🦚'},
// {female_two:'🦚'},
// { male_one:'🦉'},
// {male_two:'🦉'},
// {ohm_one:'🐞'},
// {ohm_two:'🐞'},
// {bar_one:'🦂'},
// {bar_two:'🦂'},
// ]
