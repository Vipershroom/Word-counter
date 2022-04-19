const input = document.getElementById("inp")
const word_count = document.getElementById("word-count")
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let count = 0
    let inpArr = input.value.split(" ")
    for (words of inpArr) {
        count += 1
    }
    word_count.textContent = `Words: ${count}`
})