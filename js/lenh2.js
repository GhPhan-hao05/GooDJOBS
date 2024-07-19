function zoom(n) {
  if (n == 1) {
    hinh.width = 300;
    hinh.height = 400;
  } else {
    hinh.width = 900;
    hinh.height = 600;
  }
}

var product = [
  {
    pid: 3,
    src: "/Picture/hoagiabo1.png",
    title: "Hoa hồng giả mix xanh đỏ",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "1",
    new: 1,
    discount: 0.9,
  },
  {
    pid: 3,
    src: "/Picture/hjoagiabo2.png",
    title: "Hoa hồng giả mix đỏ trắng ",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻ và vải lụa, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "2",
    new: 0,
    discount: 0,
  },
  {
    pid: 3,
    src: "/Picture/hoagiabo3.png",
    title: "Hoa tuylip mix hoa lau trắng",
    content: 25000,
    mota: "hoa nhựa được cố định chắc chắn, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "3",
    new: 0,
    discount: 0,
  },
  {
    pid: 3,
    src: "/Picture/hoagiabo4.png",
    title: "Cẩm tú cầu mix hoa cúc",
    content: 25000,
    mota: "hoa được làm từ nhựa, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "4",
    new: 0,
    discount: 0,
  },
  {
    pid: 2,
    src: "/Picture/hoagiabo5.png",
    title: "Hoa cúc giấy",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "5",
    new: 0,
    discount: 0.85,
  },
  {
    pid: 2,
    src: "/Picture/hoagiay1.png",
    title: "Hoa hồng giấy",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "6",
    new: 1,
    discount: 0.85,
  },
  {
    pid: 2,
    src: "/Picture/hoagiabo7.png",
    title: "Hoa sao giấy",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "7",
    new: 1,
    discount: 0.9,
  },
  {
    pid: 2,
    src: "/Picture/hoagiay2.png",
    title: "Hoa hồng giấy",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "8",
    new: 0,
    discount: 0,
  },
  {
    pid: 4,
    src: "/Picture/hoagia1.png",
    title: "Hướng dương",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, màu sắc tươi mới và hương thơm nhân tạo an toàn với sức khoer",
    detail: "9",
    new: 0,
    discount: 0,
  },
  {
    pid: 4,
    src: "/Picture/hoagia2.png",
    title: "Mẫu đơn lẻ",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, màu sắc tươi mới 1 nhánh lớn gồm 5 nhánh nhỏ",
    detail: "10",
    new: 0,
    discount: 0,
  },
  {
    pid: 4,
    src: "/Picture/hoagia3.png",
    title: "Lay ơn lẻ",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, có mùi hương nhân tạo an toàn cho sức khỏe 1 pack gồm 4 hoa nhỏ",
    detail: "11",
    new: 1,
    discount: 0.9,
  },
  {
    pid: 4,
    src: "/Picture/hoagia4.png",
    title: "Hoa hồng lẻ",
    content: 25000,
    mota: "hoa được làm từ nhựa dẻo, có mùi hương nhân tạo an toàn cho sức khỏe 1 pack gồm 4 hoa nhỏ",
    detail: "12",
    new: 0,
    discount: 0,
  },
  {
    pid: 5,
    src: "/Picture/hoatuoile1.png",
    title: "Hoa tuylip tách lẻ",
    content: 20000,
    mota: "hoa tươi được nhập trực tiếp từ cánh đồng với nhiều màu sắc cam, vàng, đỏ",
    detail: "13",
    new: 1,
    discount: 0,
  },
  {
    pid: 5,
    src: "/Picture/hoatuoile2.png",
    title: "Hoa hướng dương tách lẻ",
    content: 20000,
    mota: "Hoa hướng dương cỡ lớn được trang trí kèm một số hoa mini",
    detail: "14",
    new: 0,
    discount: 0,
  },
  {
    pid: 5,
    src: "/Picture/hoatuoile3.png",
    title: "Hoa vân môn tách lẻ",
    content: 20000,
    mota: "Với màu trắng tinh khiết, hoa vân môn thích hợp cho cô dâu trong ngày cưới",
    detail: "15",
    new: 0,
    discount: 0,
  },
  {
    pid: 5,
    src: "/Picture/hoatuoile4.png",
    title: "Hoa hồng tách lẻ",
    content: 20000,
    mota: "Những đóa hoa hồng được lựa chọn kỹ càng , luôn đạt yêu cầu về độ tươi",
    detail: "16",
    new: 0,
    discount: 0,
  },
  {
    pid: 6,
    src: "/Picture/hoacodau2.png",
    title: "Hoa cô dâu tông trắng",
    content: 20000,
    mota: "Bó hoa là sự phối hợp của các loại hoa trắng, đem lại sự tươi sáng cho cô dâu",
    detail: "17",
    new: 0,
    discount: 0.9,
  },
  {
    pid: 6,
    src: "/Picture/hoabo1.png",
    title: "Hoa bó tông hồng",
    content: 20000,
    mota: "Một bó hoa tông màu chủ đạo là hồng bao gồm nhiều loại hoa hồng, hoa thược dược...",
    detail: "18",
    new: 0,
    discount: 0.9,
  },
  {
    pid: 6,
    src: "/Picture/hoabo2.png",
    title: "Hoa bó mùa hè",
    content: 20000,
    mota: "Bó hoa với sự kết hợp giữa hướng dương và hồng trắng tạo nên sự rực rỡ của mùa hè",
    detail: "19",
    new: 1,
    discount: 0.85,
  },
  {
    pid: 6,
    src: "/Picture/hoabo4.png",
    title: "Hoa tặng người yêu",
    content: 20000,
    mota: "Bó hoa được cắm tỉ mĩ là một món quà thật tuyệt với để tặng cho người yêu",
    detail: "20",
    new: 0,
    discount: 0.85,
  },
  {
    pid: 7,
    src: "/Picture/hoabo6.png",
    title: "Hy vọng",
    content: 20000,
    mota: "Bó hoa tông màu xanh, màu của nìm tin và hy vọng",
    detail: "21",
    new: 0,
    discount: 0.85,
  },
  {
    pid: 7,
    src: "/Picture/tinhyeu.png",
    title: "Tình yêu",
    content: 20000,
    mota: "Với tông màu đỏ và hồng nhạt, bó hoa thể hiện tình yêu to lớn dành cho đối phương",
    detail: "22",
    new: 0,
    discount: 0,
  },
  {
    pid: 7,
    src: "/Picture/yeuthuong.png",
    title: "Yêu thương",
    content: 20000,
    mota: "Với thiết kế chỉnh chu, Bó hoa thể hiện sự quý mến của mình đối với người nhận",
    detail: "23",
    new: 0,
    discount: 0,
  },
  {
    pid: 7,
    src: "/Picture/mocmac.png",
    title: "Mộc mạc",
    content: 20000,
    mota: "Tông màu chủ yếu là trắng và xanh lá, Màu sắc của sự nhẹ nhàng và mộc mạc",
    detail: "24",
    new: 1,
    discount: 0,
  },
];
function seeDetail(n) {
  noidung = '<div class="row mt-5">';
  var x;
  for (p in product) {
    if (product[p].detail == n) {
      noidung += '<div class=" col-lg-5 col-md-5 col-sm-5 col-12 ">';
      noidung +=
        '<img src="' + product[p].src + '" alt="" class="img-fluid rounded" >';
      noidung += "</div>";
      noidung += '<div class="col-lg-6 col-md-6 col-sm-6 col-12 ps-5 ">';
      noidung += '<div class="h3">' + product[p].title + "</div>";
      noidung += '<div class="mt-2 mb-2">' + product[p].mota + "</div>";
      if (product[p].discount != 0) {
        noidung += "<div ><del>" + product[p].content + `VND` + "</del></div>";
        noidung +=
          "<div > " +
          product[p].content * product[p].discount +
          `VND` +
          "</div>";
      } else {
        noidung += "<div >&nbsp;</div>";
        noidung += "<div > " + product[p].content + `VND` + "</div>";
      }
      noidung +=
        '<div class="btn w-75 text-center bg-btn mt-3 add" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addCart(' +
        product[p].detail +
        ')"> Add to Card</div>';
      noidung +=
        '<div class="btn w-75 text-center btn-outline-dark mt-3"> Favorite <i class="far fa-heart"></i></div>';
      noidung +=
        '<div class="btn w-75 text-center btn-dark mt-3"> Buy Now</div>';
      noidung += "</div>";
      x = product[p].pid;
    }
  }
  noidung +=
    `</div>
    <div class="mb-3 mt-3">
        <a onclick="goBack(` +
    x +
    `)">
            <div class="fa-layers fa-fw fa-3x ">
            <div class="fas fa-circle text-muted"></div>
            <div class="fas fa-chevron-left text-light" data-fa-transform="shrink-10"></div>
            </div>
        </a>
    </div>`;
  content.innerHTML = noidung;
}

function displayhoanhua(n) {
  var noidung = '<div class="row">';
  for (p in product) {
    if (product[p].pid == n) {
      if (product[p].pid == 2 || product[p].pid == 3 || product[p].pid == 4) {
        noidung += '<div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">';
        noidung += '<div class="card">';
        if (product[p].discount != 0) {
          noidung +=
            '<div class="badge bg-primary position-absolute mt-3 ms-3">-' +
            (100 - product[p].discount * 100) +
            "%</div>";
        }
        noidung +=
          '<img src="' +
          product[p].src +
          '" alt="item" class="img-fluid rounded ">';
        noidung += '<div class="card-body">';
        noidung += '<div class="card-title h3"> ' + product[p].title + "</div>";
        if (product[p].discount != 0) {
          noidung +=
            "<div ><del>" + product[p].content + `VND` + "</del></div>";
          noidung +=
            "<div > " +
            product[p].content * product[p].discount +
            `VND` +
            "</div>";
        } else {
          noidung += '<div class="card-text">&nbsp;</div>';
          noidung +=
            '<div class="card-text"> ' + product[p].content + "VND</div>";
        }
        noidung +=
          '<a href="#" class="btn bg-btn w-100 text-center  mt-4" onclick="seeDetail(' +
          product[p].detail +
          ')">See Item</a>';
        noidung += " </div> </div> </div>";
      }
    }
  }
  noidung += "</div>";
  content.innerHTML = noidung;
}

function activebtn_hoanhua(n) {
  if (n == 2) {
    let x = document.querySelector("#btn-hoagiay");
    x.classList.add("active");
    let z = document.querySelector(" #btn-hoale");
    z.classList.remove("active");
    let t = document.querySelector(" #btn-hoabo ");
    t.classList.remove("active");
  } else if (n == 3) {
    let x = document.querySelector("#btn-hoabo");
    x.classList.add("active");
    let y = document.querySelector("#btn-hoagiay  ");
    y.classList.remove("active");
    let z = document.querySelector(" #btn-hoale");
    z.classList.remove("active");
  } else {
    let x = document.querySelector("#btn-hoale");
    x.classList.add("active");
    let y = document.querySelector("#btn-hoagiay  ");
    y.classList.remove("active");
    let t = document.querySelector(" #btn-hoabo ");
    t.classList.remove("active");
  }
}

function displayallhoanhua() {
  var noidung = '<div class="row">';
  for (p in product) {
    if (product[p].pid == 2 || product[p].pid == 3 || product[p].pid == 4) {
      noidung += '<div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">';
      noidung += '<div class="card">';
      if (product[p].discount != 0) {
        noidung +=
          '<div class="badge bg-primary position-absolute mt-3 ms-3">-' +
          (100 - product[p].discount * 100) +
          "%</div>";
      }
      noidung +=
        '<img src="' +
        product[p].src +
        '" alt="item" class="img-fluid rounded ">';
      noidung += '<div class="card-body">';
      noidung += '<div class="card-title h3"> ' + product[p].title + "</div>";
      if (product[p].discount != 0) {
        noidung += "<div ><del>" + product[p].content + `VND` + "</del></div>";
        noidung +=
          "<div > " +
          product[p].content * product[p].discount +
          `VND` +
          "</div>";
      } else {
        noidung += '<div class="card-text">&nbsp;</div>';
        noidung +=
          '<div class="card-text"> ' + product[p].content + "VND</div>";
      }
      noidung +=
        '<a href="#" class="btn bg-btn w-100 text-center  mt-4" onclick="seeDetail(' +
        product[p].detail +
        ')">See Item</a>';
      noidung += " </div> </div> </div>";
    }
  }
  noidung += "</div>";
  content.innerHTML = noidung;
}

function display_hoatuoi(n) {
  var noidung = '<div class="row ">';
  for (p in product) {
    if (product[p].pid == n) {
      noidung += '<div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">';
      noidung += '<div class="card">';
      if (product[p].discount != 0) {
        noidung +=
          '<div class="badge bg-primary position-absolute mt-3 ms-3">-' +
          (100 - product[p].discount * 100) +
          "%</div>";
      }
      noidung +=
        '<img src="' +
        product[p].src +
        '" alt="item" class="img-fluid rounded ">';
      noidung += '<div class="card-body">';
      noidung += '<div class="card-title h3"> ' + product[p].title + "</div>";
      if (product[p].discount != 0) {
        noidung += "<div ><del>" + product[p].content + `VND` + "</del></div>";
        noidung +=
          "<div > " +
          product[p].content * product[p].discount +
          `VND` +
          "</div>";
      } else {
        noidung += '<div class="card-text">&nbsp;</div>';
        noidung +=
          '<div class="card-text"> ' + product[p].content + "VND</div>";
      }
      noidung +=
        '<a href="#" class="btn bg-btn w-100 text-center mt-4" onclick="seeDetailhoatuoi(' +
        product[p].detail +
        ')">See Item</a>';
      noidung += " </div> </div> </div>";
    }
  }
  noidung += "</div>";
  content1.innerHTML = noidung;
}

function activebtn_hoatuoi(n) {
  if (n == 2) {
    let x = document.querySelector("#btn-hoabotuoi");
    x.classList.add("active");
    let z = document.querySelector(" #btn-hoaletuoi");
    z.classList.remove("active");
    let t = document.querySelector(" #btn-hoatheochude ");
    t.classList.remove("active");
  } else if (n == 3) {
    let x = document.querySelector("#btn-hoaletuoi");
    x.classList.add("active");
    let y = document.querySelector("#btn-hoabotuoi  ");
    y.classList.remove("active");
    let z = document.querySelector(" #btn-hoatheochude");
    z.classList.remove("active");
  } else {
    let x = document.querySelector("#btn-hoatheochude");
    x.classList.add("active");
    let y = document.querySelector("#btn-hoaletuoi  ");
    y.classList.remove("active");
    let t = document.querySelector(" #btn-hoabotuoi ");
    t.classList.remove("active");
  }
}

function displayallhoatuoi() {
  var noidung = '<div class="row ">';
  for (p in product) {
    if (product[p].pid == 5 || product[p].pid == 6 || product[p].pid == 7) {
      noidung += '<div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">';
      noidung += '<div class="card">';
      if (product[p].discount != 0) {
        noidung +=
          '<div class="badge bg-primary position-absolute mt-3 ms-3">-' +
          (100 - product[p].discount * 100) +
          "%</div>";
      }
      noidung +=
        '<img src="' +
        product[p].src +
        '" alt="item" class="img-fluid rounded ">';
      noidung += '<div class="card-body">';
      noidung += '<div class="card-title h3"> ' + product[p].title + "</div>";
      if (product[p].discount != 0) {
        noidung += "<div ><del>" + product[p].content + `VND` + "</del></div>";
        noidung +=
          "<div > " +
          product[p].content * product[p].discount +
          `VND` +
          "</div>";
      } else {
        noidung += '<div class="card-text">&nbsp;</div>';
        noidung +=
          '<div class="card-text"> ' + product[p].content + "VND</div>";
      }

      noidung +=
        '<a href="#" class="btn bg-btn w-100 text-center mt-4" onclick="seeDetailhoatuoi(' +
        product[p].detail +
        ')">See Item</a>';
      noidung += " </div> </div> </div>";
    }
  }
  noidung += "</div>";
  content1.innerHTML = noidung;
}

function seeDetailhoatuoi(n) {
  noidung = '<div class="row mt-5">';
  for (p in product) {
    if (product[p].detail == n) {
      noidung += '<div class=" col-lg-5 col-md-5 col-sm-5 col-12 ">';
      noidung +=
        '<img src="' + product[p].src + '" alt="" class="img-fluid rounded">';
      noidung += "</div>";
      noidung += '<div class="col-lg-6 col-md-6 col-sm-6 col-12 ps-5 ">';
      noidung += '<div class="h3">' + product[p].title + "</div>";
      noidung += '<div class="mt-2 mb-2">' + product[p].mota + "</div>";
      if (product[p].discount != 0) {
        noidung += "<div ><del>" + product[p].content + `VND` + "</del></div>";
        noidung +=
          "<div > " +
          product[p].content * product[p].discount +
          `VND` +
          "</div>";
      } else {
        noidung += "<div >&nbsp;</div>";
        noidung += "<div > " + product[p].content + "VND</div>";
      }
      noidung +=
        '<div class="btn w-75 text-center bg-btn mt-3 " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addCart(' +
        product[p].detail +
        ')"> Add to Card</div>';
      noidung +=
        '<div class="btn w-75 text-center btn-outline-dark mt-3"> Favorite <i class="far fa-heart"></i></div>';
      noidung +=
        '<div class="btn w-75 text-center btn-dark mt-3"> Buy Now</div>';
      noidung += "</div>";
    }
  }
  noidung +=
    `</div>
    <div class="mb-3 mt-3">
        <a onclick="goBack(` +
    product[p].pid +
    `)">
            <div class="fa-layers fa-fw fa-3x ">
                <div class="fas fa-circle text-muted"></div>
                <div class="fas fa-chevron-left text-light" data-fa-transform="shrink-10"></div>
            </div>
        </a>
    </div>`;
  content1.innerHTML = noidung;
}

function goBack(n) {
  if (n == 2 || n == 3 || n == 4) {
    displayallhoanhua();
  } else displayallhoatuoi();
}

function addCart(n) {
  var noidung = "";
  for (p in product) {
    if (product[p].detail == n) {
      noidung +=
        `
        
            <div class="cart-items">
                <div class="cart-row row">
                    <div class="cart-item cart-column col-3">
                        <img class="cart-item-image" src="` +
        product[p].src +
        `" width="100" height="100">
                        
                    </div>
                    <div class="cart-item cart-column col-3">
                        <span hidden class="xxx">` +
        product[p].detail +
        `</span>
                        <span class="cart-item-title">` +
        product[p].title +
        `</span>`;
      if (product[p].discount != 0) {
        noidung += "<div ><del>" + product[p].content + `VND` + "</del></div>";
        noidung +=
          `<span class="cart-price cart-column">` +
          product[p].content +
          `</span>`;
      } else {
        noidung += "<div >&nbsp;</div>";
        noidung +=
          `<span class="cart-price cart-column">` +
          product[p].content +
          `VND</span>`;
      }

      noidung +=
        `</div>
                    <div class="cart-item cart-column col-4">
                        <span >` +
        product[p].mota +
        `</span>
                    </div>
                    <input class="cart-quantity-input" type="number" value="1">

                    <div class="cart-quantity cart-column col-2">
                        
                        <button class="btn bg-btn add" type="button" onmouseover="removex();">Xóa</button>
                    </div>
                </div>
            </div>
             `;
    }
  }
  x.innerHTML += noidung;
}

// function Xcount(n){
//     addCart(m)
//     if(m==m){
//         var x=document.getElementsByClassName("cart-quantity");
//     }

// }
// var x=document.getElementsByClassName("cart-quantity");
// console.log(x)

function removex() {
  var remove_cart = document.getElementsByClassName("add");
  for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i];
    button.addEventListener("click", function () {
      var button_remove = event.target;
      button_remove.parentElement.parentElement.remove();
    });
  }
}

function bread1(n) {
  if (n == 1) {
    breadnhua.innerHTML = "Hoa bằng giấy";
  } else if (n == 2) {
    breadnhua.innerHTML = "Hoa bó";
  } else {
    breadnhua.innerHTML = "Hoa lẻ từng loại";
  }
}

function bread2(n) {
  if (n == 1) {
    breadtuoi.innerHTML = "Hoa bó";
  } else if (n == 2) {
    breadtuoi.innerHTML = "Hoa lẻ từng loại";
  } else {
    breadtuoi.innerHTML = "Hoa theo chủ đề";
  }
}

function nhua() {
  noidung = `<div class="container"><div class="row pt-3" >
            <div class="col-3 ">
                <h3>HOA NHÂN TẠO</h3>
                <div class="navbar navbar-expand-lg  ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navhoanhua" aria-controls="navhoanhua" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navhoanhua">
                        <div class="list-group list-group-flush d-fixed">
                            <a href="#" class="list-group-item list-group-item-action" onclick="displayhoanhua(2);activebtn_hoanhua(2);bread1(1)" id="btn-hoagiay">Hoa bằng giấy</a>
                            <a href="#" class="list-group-item list-group-item-action" onclick="displayhoanhua(3);activebtn_hoanhua(3);bread1(2)" id="btn-hoabo">Hoa bó</a>
                            <a href="#" class="list-group-item list-group-item-action" onclick="displayhoanhua(4);activebtn_hoanhua(4);bread1(3)" id="btn-hoale">Hoa lẻ từng loại </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-9 mb-4">
                
                <div id="content"></div>
            </div></div> `;
  trangchu.innerHTML = noidung;
}
function tuoi() {
  noidung = `<div class="container"><div class="row pt-3">
    <div class="col-3 ">
        <h3>HOA TƯƠI</h3>
        <div class="navbar navbar-expand-lg  ">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navhoanhua" aria-controls="navhoanhua" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="collapse navbar-collapse" id="navhoanhua">
                <div class="list-group list-group-flush d-fixed">
                    <a href="#" class="x list-group-item list-group-item-action" onclick="display_hoatuoi(6);activebtn_hoatuoi(2);bread2(1)" id="btn-hoabotuoi">Hoa bó</a>
                    <a href="#" class="x list-group-item list-group-item-action" onclick="display_hoatuoi(5);activebtn_hoatuoi(3);bread2(2)" id="btn-hoaletuoi">Hoa lẻ từng loại </a>
                    <a href="#" class="x list-group-item list-group-item-action" onclick="display_hoatuoi(7);activebtn_hoatuoi(4);bread2(0)" id="btn-hoatheochude">Hoa theo chủ đề </a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-9">
        <div id="content1"></div>
    </div> 
</div></div> `;
  trangchu.innerHTML = noidung;
}

function home() {
  noidung = `<div class="container-xl">
        <div class="row bg-main ">
            <div class="col col-12 col-md-4 col-lg-4 bg-title1 ps-5 align-middle " >
                <div class="mt-5 pt-5">
                    <div  class="h4 color-text-bolder pt-5  ">Chúng tôi tạo ra những bó hoa</div> 
                    <div class="display-5 color-text-1 font pt-3 ">hoàn hảo cho mọi dịp</div>
                </div>
            </div>
            <div class="col col-12 col-md-8 col-lg-8">
                <div id="carouselExampleIndicators" class="carousel slide position-relative">
                    <div class="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>   
                    </div>
                    <div class="carousel-inner">
                        
                        <div class="carousel-item active ">
                            <img src="Picture/main.png" class="d-inline w-100" alt="..."  >
                            <div class="carousel-caption mb-5">
                                <div class="h1 block-subtitle "><div class="caption-item  textshadow"><p>The update</p></div></div>
                                <div class="h3 block-title"><div class="caption-item  textshadow"><p>Get up to 20% off </p><p>on new arrivals</p></div></div>
                                <button type="button" class="btn bg-btn btn-md"><a href="#" >Shop now</a></button>
                            </div>
                        </div>    
                        <div class="carousel-item">
                            <img src="Picture/hoahong2.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption mb-5 ">
                                <div class="h1 block-subtitle"><div class="caption-item textshadow"><p>The store is always near you</p></div></div>
                                <div class="h3 block-title"><div class="caption-item textshadow"><p>Free Shipping on orders  </p><p>$35 and up</p></div></div>
                                <button type="button" class="btn bg-btn btn-md"><a href="#" >Shop now</a></button>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src="Picture/bg1final.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption mb-5 ">
                                <div class="h1 block-subtitle "><div class="caption-item textshadow"><p>New in this week</p></div></div>
                                <div class="h3 block-title"><div class="caption-item textshadow"><p>Up to 40% off </p><p>on all items</p></div></div>
                                <button type="button" class="btn bg-btn btn-md"><a href="#" >Shop now</a></button>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src="Picture/bg8.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption mb-5 ">
                                <div class="h1 block-subtitle"><div class="caption-item textshadow"><p>Flower for this season</p></div></div>
                                <div class="h3 block-title"><div class="caption-item textshadow"><p>Seasonal flowers </p><p>from many regions</p></div></div>
                                <button type="button" class="btn bg-btn btn-md"><a href="#" >Shop now</a></button>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src="Picture/bg4.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption mb-5 color-text-green">
                                <div class="h1 block-subtitle"><div class="caption-item textshadow"><p>Plastic flowers with artificial scent</p></div></div>
                                <div class="h3 block-title"><div class="caption-item textshadow"><p>Colors and scents </p><p>are safe for health</p></div></div>
                                <button type="button" class="btn bg-btn btn-md"><a href="#" >Shop now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-4 col-md-4 col-12 px-4 mb-4">
                <div class="h4 text-center">FREE PACKING</div>
                <div class="text-center text-muted">Free packing when ordering as a gift</div>
            </div>
            <div class="col-lg-4 col-md-4 col-12 px-4 mb-4">
                <div class="h4 text-center">SUSTAINABLE PROCESS</div>
                <div class="text-center text-muted">Our products are responsibly produced and packed in an eco-friendly way.</div>
            </div>
            <div class="col-lg-4 col-md-4 col-12 px-4 mb-4">
                <div class="h4 text-center ">2 DAYS RETURN</div>
                <div class="text-center text-muted">We are sure you’ll love our plastic flowers, but if not, you can always send it back.</div>
            </div>
        </div>
    </div>
    <div class="container">
        <hr>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-12 mb-5">
                <img src="Picture/bg6.png" alt="" class="img-fluid d-block w-100" >
                <div class="h5 ">PLASTIC FLOWER</div>
                <button class="btn bg-btn" onclick="nhua();displayallhoanhua();"><a href="#" class="color-text-green" onclick>Buy now</a></button>
             </div>
            <div class="col-lg-4 col-md-4 col-12 mb-5">
                <img src="Picture/bg7.png" alt="" class="img-fluid d-block w-100">
                <div class="h5 ">FRESH FLOWER</div>
                <button class="btn bg-btn" onclick="tuoi();displayallhoatuoi();"><a href="#" class="color-text-green">Buy now</a></button>
            </div>
            <div class="col-lg-4 col-md-4 col-12 mb-5">
                <img src="Picture/bg9.png" alt="" class="img-fluid d-block w-100">
                <div class="h5">DECORATION</div>
                <button class="btn bg-btn"><a href="#" class="color-text-green">Book now</a></button>
            </div>
        </div>
    </div>
    <div class="container">
        <hr>
    </div>
    <div class="container">
            <div class="row">
                <div class="col-12 text-center h4">HÃY PHẢN HỒI VỚI CHÚNG TÔI ĐỂ CÓ TRẢI NGHIỆM MUA HÀNG TỐT NHẤT</div>
            </div>
            <div class="mb-3 row ">
                <div class="col-3"></div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="row">
                        <div class="col-12">
                            <label for="exampleFormControlInput1" class="form-label">Your Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>   
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label for="exampleFormControlInput1" class="form-label">Số điện thoại của bạn</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="+84">
                        </div>   
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Phản hồi cho chúng tôi</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div> 
                    <div class="row mt-2">
                        <div class="col-12">
                            <button type="submit" style="border:none;" class="bg-btn" value="Submit">Submit</button>
                        </div>
                    </div>     
    
                </div>
                <div class="col-3"></div>
            </div>
        </div>
    `;
  trangchu.innerHTML = noidung;
}

