        
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

        //This Function For Add New Button
        $('#addnewbtn').click(function(){
          customerid.disabled = false;
          clearcustomerTextfield();
        });

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

        //This Function For Delete Button Action
        $('#deletebtn').click(function(){
          let id = $('#cusinputfield').val();
          console.log(id);
          deleteCustomer(id);
          $('#cusinputfield').val('');
        });

        //This Function For Update Customer Button Action
        $('#customerupdatebtn').click(function(){
          updateCustomer(customerid.value);
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
            
            customerid.disabled = true;

            showSaveForm();
          });
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

        //This Function For Delete Customer From Array
        function deleteCustomer(ID){
          let newArray = [];

          if(checkID(ID)){
            for(i in customerAr){
              if(ID===customerAr[i].cusid){
              }else{
                newArray.push(customerAr[i]);
              }
            }
            customerAr = newArray;
            alert("Successfully Customer Deleted");
            console.log(customerAr);
          }else{
            alert("Something Wrong, Please check & enter correct ID !");
          }
        }

        //This Function For Check the Input ID Alredy Exicts OR Not
        function checkID(ID){
          for(i in customerAr){
            if(ID===customerAr[i].cusid){
              return true;
            }else{
              return false;
            }
          }
        }

        //This Function For Update Customer When Click the Update Button
        function updateCustomer(ID){
          br:for(i in customerAr){
            if(ID===customerAr[i].cusid){
              let updatecus = Object.assign({},Customer);

              customerAr[i].cusid = customerid.value;
              customerAr[i].name = cusnam.value;
              customerAr[i].cusnomber = address.value;
              customerAr[i].cussalry = Salary.value;

              break br;
            }
            console.log(customerAr);
          }
          $('#cusdatatable td').parent().remove();
          getAllData();
        }

        //This Function For When Click The Add new Customer Button , Clear All TextField
        function clearcustomerTextfield(){
          $('#cusId').val('');
          $('#cusName').val('');
          $('#cusAddress').val('');
          $('#cusSalary').val('');
        }
