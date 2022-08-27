
let doi = "Shakiraaa";

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/galihhhhr/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if(n >= 0 && n < 5){
    return "Malem"
  } else if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai Shakiraaa!',
    html: `Selamat ${time()}, Apa kabar hari inii?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Semoga baik-baik saja, jangan lupa makan dann makan buahh').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Jaga kesehatan yaa`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Semangat jalanin harinya`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Pokoknya jangan sering telat makannn!').then((result) => {
                  Swal.fire(
                    'Jangan keseringan tidur larut malemm!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan telat makan!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Gaboleh sakittt!!!',
                                '',
                                'error'
                      ).then((result) => {
                        Swal.fire({
                          title: 'Oh iya aku mau ngomong',
                          text: 'Boleh gak?',
                          showDenyButton: true,
                          confirmButtonText: `Boleh`,
                          denyButtonText: `Nggak`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'emot kura-kura heheheheee',
                              icon: '',
                              input: '',
                              showCancelButton: false,
                            }).then((result) => {
                              Swal.fire('wkwkw', 'kaburrrr', 'success').then((result) => {
                                Swal.fire("Bye bye").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Yahhh yaudah dee kalo dah ga boleh').then((result) => {
                              Swal.fire("byeee ").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
