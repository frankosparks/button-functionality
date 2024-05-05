function timeOut() {
  document.querySelector('.btn').innerHTML = 'Loading...'
  setTimeout(function () {
    document.querySelector(".btn").innerHTML = "Finished!";
  }, 1000);
}