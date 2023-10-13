$('#itemsavebtn').click(function(){
    let newItem = Object.assign({},Item);

    newItem.itmcode = $('#itemCode').val();
    newItem.itmname = $('#itemName').val();
    newItem.itmqty = $('#itemQuantity').val();
    newItem.itmprice = $('#itemPrices').val();

    item.push(newItem);
});