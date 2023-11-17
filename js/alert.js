document.getElementById('Wildan').addEventListener('click', function () {
  swal({
    buttons: false,
    content: {
      element: "img",
      attributes: {
        src: "./popup/Wildan.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  })
});

document.getElementById('Irgy').addEventListener('click', function () {
  swal({
    buttons: false,
    content: {
      element: "img",
      attributes: {
        src: "./popup/Irgy.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  })
});

document.getElementById('Sherin').addEventListener('click', function () {
  swal({
    buttons: false,
    content: {
      element: "img",
      attributes: {
        src: "./popup/Sherin.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  })
});

document.getElementById('Aisyah').addEventListener('click', function () {
  swal({
    buttons: false,
    content: {
      element: "img",
      attributes: {
        src: "./popup/Aisyah.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  })
});

document.getElementById('Fathih').addEventListener('click', function () {
  swal({
    buttons: {
      cancel: "Tidak Sekarang",
      confirm: "Kunjungi Personal Website",
    },
    content: {
      element: "img",
      attributes: {
        src: "./popup/Fathih.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  }).then((value) => {
    if (value) {
      window.open("https://patzypazty.github.io/Fathih-Apriandi/#home", "_blank");
    }
  });
});

document.getElementById('Sultan').addEventListener('click', function () {
  swal({
    buttons: false,
    content: {
      element: "img",
      attributes: {
        src: "./popup/Sultan.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  })
});

document.getElementById('Raidan').addEventListener('click', function () {
  swal({
    buttons: false,
    content: {
      element: "img",
      attributes: {
        src: "./popup/Raidan.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  })
});

document.getElementById('Yoga').addEventListener('click', function () {
  swal({
    buttons: false,
    content: {
      element: "img",
      attributes: {
        src: "./popup/Yoga.png", // Ganti dengan URL gambar Anda
        style: "max-width: 100%;"
      },
    },
  })
});
