document.getElementById('Wildan').addEventListener('click', function () {
    swal({
      buttons: {
        confirm: "Ok",
      },
      content: {
        element: "img",
        attributes: {
          src: "./popup/Wildan.png", // Ganti dengan URL gambar Anda
          style: "max-width: 300px;"
        },
      },
    })
  });


  document.getElementById('Sultan').addEventListener('click', function () {
    swal({
      buttons: {
        confirm: "Ok",
      },
      content: {
        element: "img",
        attributes: {
          src: "./popup/Sultan.png", // Ganti dengan URL gambar Anda
          style: "max-width: 300px;"
        },
      },
    })
  });