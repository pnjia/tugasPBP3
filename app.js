// percabangan

function menghitungTotalKalori(menitLari=0, menitPushUp=0, menitPlank=0) {
    let totalKalori = 0;

    if (menitLari > 0) {
        const kaloriPer5Menit = 60;
        totalKalori += (menitLari / 5) * kaloriPer5Menit;
    }

    if (menitPushUp > 0) {
        const kaloriPer30Menit = 200;
        totalKalori += (menitPushUp / 30) * kaloriPer30Menit;
    }

    if (menitPlank > 0) {
        const kaloriPer1Menit = 5;
        totalKalori += menitPlank * kaloriPer1Menit;
    }

    return totalKalori;
}

console.log(`Total kalori: ${menghitungTotalKalori(5, 30)}`)





// palindrome
const kata = "kAsur ini rusak"
let isPalindrome = false;
let kataDibalik = '';
for (let i = kata.length-1; i >= 0; i--) {
  kataDibalik += `${kata[i]}`
}
if (kata.toLowerCase() === kataDibalik.toLowerCase()) {
  isPalindrome = true
}
console.log(`kata '${kata}' merupakan palindrome: ${isPalindrome} `)




function apakahPalindrome(num) {
  const str = num.toString()  
  return str === str.split('').reverse().join('')
} 

function mencariNextPalindrome(num) {
  num++;
  while(!apakahPalindrome(num)){
    num++
  }
  return num
}
num = 90
console.log(`Angka terdekat dari ${num} adalah ${mencariNextPalindrome(num)}`)


// Array
let papan = [
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.']
  ]
let posisiBarisRaja =  4
let posisiKolomRaja = 2
let posisiBarisBenteng = 3
let posisiKolomBenteng = 2


const raja = papan[posisiBarisRaja][posisiKolomRaja] = 'R'
const benteng = papan[posisiBarisBenteng][posisiKolomBenteng] = 'B'
let skak = false
console.log(papan)
for(let i = 0; i < papan.length; i++) {
  if(papan[i][posisiKolomBenteng] === 'R') {
    skak = true
  } else if(papan[posisiBarisBenteng][i] === 'R'){
    skak = true
  }
}

console.log(skak)
