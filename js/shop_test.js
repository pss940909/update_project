window.onload = function () {
  AOS.init();
  let productId = location.href.split("=")[1];
  console.log(productId);
  const productRenderPanel = document.querySelector(".product_main");
  axios
    .get(`https://json-server-vercel-ashen.vercel.app/productData/${productId}`)
    .then((res) => {
      const data = res.data;
      console.log(data);
      let productTemp = `<div class="product_img"><img src="${data.imgUrl}" alt="" width='500'/></div>
    <!-- 右側產品內容 -->
    <div class="product_text">
      <h3 class="product_title">${data.title}</h3>
      <h3 class="product__item_price">$${data.price}</h3>
      <ul class="product_details">
        <li>Dimensions: $${data.dimensions}</li>
        <li>Color: ${data.color}</li>
        <li>
          Material: ${data.material}
        </li>
        <li>Assembly Required:${data.assembly_required}</li>
      </ul>
      <ul class="product_qty">
        <li>
          <a href="#">-</a>
        </li>
        <li>1</li>
        <li>
          <a href="#">+</a>
        </li>
      </ul>
      <a href="#" class="add_to_cart_btn">Add to Cart</a>
    </div>`;
      productRenderPanel.innerHTML = productTemp;
    });
};

// {
//     id: 1,
//     title: "Classic Sofa",
//     color: "Ivory",
//     material:
//       "Construction - Kiln-Dried Wood And Poly Fill Cushions. Fabric - 95% Polyester, 5% Linen.",
//     assembly_required: "No",
//     origin_price: 23999,
//     price: 21000,
//     dimensions: '39"H x 81"W x 35"D',
//     imgUrl: "img/product4.jpg",
//     category: "sofa",
//   },
