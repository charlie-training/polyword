let date = new Date()

const firstDate = new Date('April 14, 2025 00:00:00')

const msPerDay = 8.64e+7

let dateIndex = Math.floor((date.getTime() - firstDate.getTime()) / msPerDay)

export default dateIndex
