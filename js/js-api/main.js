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