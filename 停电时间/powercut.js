function randomDayOfWeek() {
    const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const randomIndex = Math.floor(Math.random() * daysOfWeek.length);
    document.getElementById("randomDay").textContent = daysOfWeek[randomIndex];
}

// 调用函数并输出结果
// var randomDay = randomDayOfWeek();
// console.log('Random day of the week: ' + randomDay);