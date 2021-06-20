document.getElementById('gen').onclick = doGen

function doGen() {
  let n = parseInt(document.getElementById('val').value)

  if (n <= 2) {
    document.write('Число должно быть больше 2')
  } else if (n % 2 === 0) {
    generateOddSquare(n)
  } else {
    generateNotOddSquare(n)
  }
}

function generateNotOddSquare(n) {
  magicSquare = Array(n)
    .fill(0)
    .map((x) => Array(n).fill(0))
  let i = parseInt(n / 2)
  let j = n - 1
  for (num = 1; num <= n * n; ) {
    if (i == -1 && j == n) {
      j = n - 2
      i = 0
    } else {
      if (j == n) j = 0

      if (i < 0) i = n - 1
    }
    if (magicSquare[i][j] != 0) {
      j -= 2
      i++
      continue
    } else magicSquare[i][j] = num++
    j++
    i--
  }

  document.write('Размер магического квадрата ' + n + '<br>')
  document.write(
    'Сумма каждой строки или столбца ' +
      parseInt((n * (n * n + 1)) / 2) +
      '<br><br>'
  )
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) document.write(magicSquare[i][j] + ' ')
    document.write('<br>')
  }
}

function generateOddSquare(n) {
  let arr = Array(n)
    .fill(0)
    .map((x) => Array(n).fill(0))
  let i, j

  for (i = 0; i < n; i++) for (j = 0; j < n; j++) arr[i][j] = n * i + j + 1

  for (i = 0; i < parseInt(n / 4); i++)
    for (j = 0; j < parseInt(n / 4); j++) arr[i][j] = n * n + 1 - arr[i][j]

  for (i = 0; i < parseInt(n / 4); i++)
    for (j = 3 * parseInt(n / 4); j < n; j++) arr[i][j] = n * n + 1 - arr[i][j]

  for (i = 3 * parseInt(n / 4); i < n; i++)
    for (j = 0; j < parseInt(n / 4); j++) arr[i][j] = n * n + 1 - arr[i][j]

  for (i = 3 * parseInt(n / 4); i < n; i++)
    for (j = 3 * parseInt(n / 4); j < n; j++) arr[i][j] = n * n + 1 - arr[i][j]

  for (i = parseInt(n / 4); i < 3 * parseInt(n / 4); i++)
    for (j = parseInt(n / 4); j < 3 * parseInt(n / 4); j++)
      arr[i][j] = n * n + 1 - arr[i][j]

  document.write('Размер магического квадрата ' + n + '<br>')
  document.write(
    'Сумма каждой строки или столбца ' +
      parseInt((n * (n * n + 1)) / 2) +
      '<br><br>'
  )
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) document.write(arr[i][j] + '  ')
    document.write('<br>')
  }
}
