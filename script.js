var btn = document.getElementById('btn');
var num = 1;
var animal = document.getElementById('animal-info');
btn.addEventListener('click', () => {
  const ourRequest = new XMLHttpRequest();

  ourRequest.open(
    'GET',
    'https://learnwebcode.github.io/json-example/animals-' + num + '.json'
  );

  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHtml(ourData);
  };

  ourRequest.send();
  num++;
  if (num === 4) {
    btn.style.display = 'none';
  }
});

function renderHtml(data) {
  var htmlString = '';

  for (var i = 0; i < data.length; i++) {
    htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + '.<hr>';
  }

  animal.insertAdjacentHTML('beforeend', htmlString);
}
