
let doi = "Shakiraaa";

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/shakiirapa/";

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
  teks.innerHTML = `Terima Kasih ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai Shakiraaa!',
    html: `Selamat ${time()}, Aku mau bilang sesuatu ni sama kamuu hehehe`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Karna kita udah deket kurang lebih 2 bulan').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Jadi aku coba buat beraniin bilang ini ke kamuu`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Jadi aku mau bilang kalau`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Hayooo nunggu yaa??').then((result) => {
                  Swal.fire(
                    'WLEEEEE',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'hehhehehe jangan marah atuhh',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Serem soalnyaa kalo marahhh',
                                '',
                                'error'
                      ).then((result) => {
                        Swal.fire({
                          title: 'Yaudah dee langsung ke intinyaa aja yaa',
                          text: 'Boleh gak?',
                          showDenyButton: true,
                          confirmButtonText: `Boleh`,
                          denyButtonText: `Nggak`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Aku mau kamu jadi pacar aku, kamu mau ga?',
                              icon: '',
                              input: '',
                              showCancelButton: false,
                            }).then((result) => {
                              Swal.fire('wkwkw', 'kaburrrr', 'success').then((result) => {
                                Swal.fire("Jawab nya bales chatt di WA aja ya, kalo iya pake emote kura-kura, kalau engga pake emote buayaa").then((result) => {
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
