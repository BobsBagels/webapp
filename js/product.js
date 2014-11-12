var Product = {};

Product.getOptions = function(object){
  $(object).each(function(index,category){
    $(category.products).each(function(index,product){
      $.ajax({ url: 'http://localhost:3000/products/'+product.id, type: 'GET',})
      .done(function(response){
        //debugger;
        trace(response.options);
      })
      .fail(function(jqXHR, textStatus, errorThrown){
      trace(jqXHR, textStatus, errorThrown);
      });
    });
  });
};