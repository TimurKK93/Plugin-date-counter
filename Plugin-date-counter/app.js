function declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

const years = document.getElementById('year')
const months = document.getElementById('month')
const days = document.getElementById('day')

const yearText = document.getElementById('year-text')
const monthText = document.getElementById('month-text')
const dayText = document.getElementById('day-text')

// const a = moment()
// const b = moment([2020, 11 - 1, 09])
// const diffDuration = moment.duration(a.diff(b))

const a = moment()
const b = moment('2020-11-09', 'YYYY-MM-DD')
const diff = moment.preciseDiff(a, b, true)

years.innerHTML = diff.years
months.innerHTML = diff.months
days.innerHTML = diff.days

yearText.innerHTML = declOfNum(years.innerHTML, ['год', 'года', 'лет'])
monthText.innerHTML = declOfNum(months.innerHTML, ['месяц', 'месяца', 'месяцев'])
dayText.innerHTML = declOfNum(days.innerHTML, ['день', 'дня', 'дней'])

