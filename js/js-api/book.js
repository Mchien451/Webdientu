

const getListBook = () => {
  axios
    .get(
      "http://api-env.eba-rzek4r84.ap-southeast-1.elasticbeanstalk.com/api/product/findAll"
    )
    .then(function (res) {
      bookList = res.data.content;
      console.log(bookList)
      renderBookList(bookList);
      renderBookInfo(bookList);
    })
    .catch(function (error) {
      console.log(error);
    });
};



getListBook();

const renderBookList = (bookList) => {
  let contents = "";
  for (var i = 0; i < bookList.length; i++) {
    contents += `
        <div class="col-xl-3 col-md-3">
                            <div class="product">
                                <div class="product_image_showcase"><a href="product.html" onclick="test(${bookList[i].id})"><img
                                            src="${bookList[i].imageLink}" alt="" class="product_image_img"></a></div>
                                <div class="product_content">
                                    <div class="product_info align-items-center justify-content-center">
                                        <div>
                                            <div class="product_name"><a href="product.html">${bookList[i].author.fullName}</a></div>
                                            <div class="product_text">${bookList[i].publisher.informationPublisher} </div>
                                        </div>
                                        <div
                                            class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div class="sale_price">
                                                <del>₺15.99</del>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="sale_price"><b>%40</b></div>
                                            </div>
                                        </div>
                                        <div class="product_price">₺11<span>.99</span></div>
                                    </div>

                                    <div class="product_buttons">
                                        <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                            <div title="Add to shopping cart"
                                                class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                <div>
                                                    <div><img src="images/cart.svg" class="svg" alt="">
                                                        <div>+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

        `;
    document.getElementsByClassName("bookItem")[0].innerHTML = contents;
  }
};

const test = (id) => {
    console.log(id)
}

const renderBookInfo = (book) => {
    console.log(123)
}