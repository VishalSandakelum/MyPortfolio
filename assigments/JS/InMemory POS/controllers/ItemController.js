$('#itemsavebtn').click(function(){
    let newItem = Object.assign({},Item);

    newItem.itmcode = $('#itemCode').val();
    newItem.itmname = $('#itemName').val();
    newItem.itmqty = $('#itemQuantity').val();
    newItem.itmprice = $('#itemPrices').val();

    item.push(newItem);
});

//This Function For View All Item
$('#itmviewallbtn').click(function(){
    $('#itmtable td').parent().remove();
    getAllData();
 });

 //This Function For Get All Data From Array
 function getAllData(){
    for(i in item){
      console.log(item[i]);
      let itmcode = item[i].itmcode;
      let itmname = item[i].itmname;
      let itmqty = item[i].itmqty;
      let itmprice = item[i].itmprice;

      datarow(itmcode,itmname,itmqty,itmprice);
    }
  }

  //This Function For All Data Add Add To The Table
  function datarow(itmcode,itmname,itmqty,itmprice){

    let row = `<tr>
                <td>${itmcode}</td>
                <td>${itmname}</td>
                <td>${itmprice}</td>
                <td>${itmqty}</td>
              </tr>`;

    $("#itmtable").append(row);
    setClickeventForTable();
  }
