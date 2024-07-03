document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = Randcolorgen();
  });
  
  let rand = Math.random();
  console.log(rand);
  
  function Randcolorgen() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * letter.length)];
    }
    return color;
  }
  