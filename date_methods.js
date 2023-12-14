/*
const now = new Date()
day = now.getDay()
hours = now.getHours()
minutes = now.getMinutes()
seconds = now.getSeconds()
date_mon = now.getDate()
month = now.getMonth()
year = now.getFullYear()


console.log(now)

console.log(`Сегодня : ${day}\nТекущее время - ${hours}:${minutes}:${seconds}\n`)

console.log(`${date_mon}-${month}-${year}\n`)

tmp_date = new Date(year, 2, 0)


if ((year%4==0)) console.log('Год високосный \n'); else console.log('Год не високосный\n');


for (i = 2014; i < 2050; i++){
    tmp_date = new Date(i, 1)
    if (tmp_date.getDay() == 0) console.log(`В ${i} первое января - воскресенье\n`)
}

*/

function current_time(){
    now = new Date()
    day = now.getDay()
    hours = now.getHours()
    minutes = now.getMinutes()
    seconds = now.getSeconds()

    days_e = ['Sunday', 'Monday ', 'Tuesday ', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    days_r = ['Воскресенье', 'Понедельник', 'Вторник ', 'Среда', 'Четверг', 'Пятница', 'Субота']

    return `Сегодня : ${days_r[day]}\nТекущее время - ${hours}:${minutes}:${seconds}\n`
}

function current_date(){
    now = new Date()
    date_mon = now.getDate()
    month = now.getMonth()
    year = now.getFullYear()

    return `${date_mon}-${month}-${year}\n`
}

function is_leap_year(now = new Date()){
    year = now.getFullYear()

    tmp_date = new Date(year, 1)

    if ((year%4==0)) return true;
    else return false;
}

function first_of_january_is_sunday(){
    for (i = 2014; i < 2050; i++){
        tmp_date = new Date(i, 1)
        if (tmp_date.getDay() == 0) console.log(`В ${i} первое января - воскресенье\n`)
    }
}

function days_to_xmas(){
    now = new Date()
    date_mon = now.getDate()
    month = now.getMonth()
    year = now.getFullYear()

    count_of_days = 0
    while ((now.getMonth() != 0) || (now.getDate() != 7)){
        now = new Date(year, month, date_mon + count_of_days)
        count_of_days++
    }
    return `До рождества ${count_of_days} дней`
}

console.log(current_time())
console.log(current_date())

if(is_leap_year())console.log('Это високосный год\n'); else console.log('Это не високосный год\n')

first_of_january_is_sunday()

console.log(days_to_xmas())