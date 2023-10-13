const modaltwo = new bootstrap.Modal(document.querySelector("#staticBackdropitem"), {});

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
    getAllDataitm();
 });

 $('#itemupdatebtn').click(function(){
    updateItem($('#itemCode').val());
 });

 //This Function For Set Click Action For Table Row, When Click They Row Get The Data From they Row And Set Data To The Save Form Field 
 function setitmClickeventForTable(){
    $('#itmtable tr').click(function () {
      
      let itmcode = $(this).children().eq(0).text();
      let itmname = $(this).children().eq(1).text();
      let itmprice = $(this).children().eq(2).text();
      let itmqty = $(this).children().eq(3).text();

      $('#itemCode').val(itmcode);
      $('#itemName').val(itmname);
      $('#itemQuantity').val(itmqty);
      $('#itemPrices').val(itmprice);
      
      $('#itemCode').disabled = true;

      showitmSaveForm();
    });
  }

 //This Function For Get All Data From Array
 function getAllDataitm(){
    for(i in item){
      console.log(item[i]);
      let itmcode = item[i].itmcode;
      let itmname = item[i].itmname;
      let itmqty = item[i].itmqty;
      let itmprice = item[i].itmprice;

      datarowitm(itmcode,itmname,itmqty,itmprice);
    }
  }

  //This Function For All Data Add Add To The Table
  function datarowitm(itmcode,itmname,itmqty,itmprice){

    let row = `<tr>
                <td>${itmcode}</td>
                <td>${itmname}</td>
                <td>${itmprice}</td>
                <td>${itmqty}</td>
              </tr>`;

    $("#itmtable").append(row);
    setitmClickeventForTable();
  }

  function showitmSaveForm(){
    modaltwo.show();
  }

  function updateItem(CODE){
    console.log("ok");
    brI:for(i in item){
        if(CODE===item[i].itmcode){
            item[i].itmcode = $('#itemCode').val();
            item[i].itmname = $('#itemName').val();
            item[i].itmprice = $('#itemPrices').val();
            item[i].itmqty = $('#itemQuantity').val();

          break brI;
        }
        console.log(item);
      }
      $('#itmtable td').parent().remove();
      getAllDataitm();
  }

  //This Function For Delete Item From Array
  function deleteItem(CODE){
    let newArray = [];

    if(checkID(CODE)){
      for(i in item){
        if(CODE===item[i].itmcode){
        }else{
          newArray.push(item[i]);
        }
      }
      item = newArray;
      alert("Successfully Item Deleted");
      console.log(item);
    }else{
      alert("Something Wrong, Please check & enter correct Item CODE !");
    }
  }
