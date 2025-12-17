export default function getDaysMonth(year, month) {
    const date = new Date(year, month - 1, 1)
    const days = []

    while (date.getMonth() === month -1) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    
    return days;
}