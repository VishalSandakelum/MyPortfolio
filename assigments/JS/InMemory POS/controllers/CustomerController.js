        
        //Save Form Text Field ID
        const savebtn = document.querySelector("#customersavebtn");
        const cusnam = document.querySelector("#cusName");
        const customerid = document.querySelector("#cusId");
        const address = document.querySelector("#cusAddress");
        const Salary = document.querySelector("#cusSalary");

        const customerarr = new Array();
        const table = document.querySelector("#cusdatatable");
        const viewallbtn  =  document.querySelector("#viewallbtn");

        const modal = new bootstrap.Modal(document.querySelector("#cusstaticBackdrop"), {});

        //This Function For When Click The Save Button Save All Customer Details
        savebtn.addEventListener("click",function(){

          let newCustomer = Object.assign({},Customer);

          newCustomer.cusid = customerid.value;
          newCustomer.name = cusnam.value;
          newCustomer.cusnomber = address.value;
          newCustomer.cussalry = Salary.value;

          //Data Save
          customerAr.push(newCustomer);
          //Data Add For Table
          getAllData();
          console.log(customerAr);
          
        });

        //This Function For View All Customer
        viewallbtn.addEventListener("click",function(){
          $('#cusdatatable td').parent().remove();
          getAllData();
        });

        $('#deletebtn').click(function(){
          let id = $('#cusinputfield').val();
          console.log(id);
          deleteCustomer();
        });

        //This Function For When Click Some Row Show The Update Form With They Row Value
        function showSaveForm(){
          modal.show();
        }

        //This Function For Set Click Action For Table Row, When Click They Row Get The Data From they Row And Set Data To The Save Form Field 
        function setClickeventForTable(){
          $('#cusdatatable tr').click(function () {
            
            let id = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let addres = $(this).children().eq(2).text();
            let salary = $(this).children().eq(3).text();
    
            console.log(address,salary);
            customerid.value = id;
            cusnam.value = name;
            address.value = addres;
            Salary.value = salary;
            
            showSaveForm();
          });
        }

        function deleteCustomer(){
          console.log("double click");
        }

        //This Function For Get All Data From Array
        function getAllData(){
          for(i in customerAr){
            console.log(customerAr[i]);
            let custId = customerAr[i].cusid;
            let custnam = customerAr[i].name;
            let custnom = customerAr[i].cusnomber;
            let custsal = customerAr[i].cussalry;

            datarow(custId,custnam,custnom,custsal);
          }
        }

        //This Function For All Data Add Add To The Table
        function datarow(id,nam,nomb,sal){

          let row = `<tr>
                      <td>${id}</td>
                      <td>${nam}</td>
                      <td>${nomb}</td>
                      <td>${sal}</td>
                    </tr>`;

          $("#cusdatatable").append(row);
          setClickeventForTable();
        }
