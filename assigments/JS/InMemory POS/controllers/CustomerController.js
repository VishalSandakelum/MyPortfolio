        
        //Save Form Text Field ID
        const savebtn = document.querySelector("#customersavebtn");
        const cusnam = document.querySelector("#cusName");
        const customerid = document.querySelector("#cusId");
        const address = document.querySelector("#cusAddress");
        const Salary = document.querySelector("#cusSalary");

        const customerarr = new Array();
        const table = document.querySelector("#cusdatatable");
        const viewallbtn  =  document.querySelector("#viewallbtn");

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

        //
        function setClickeventForTable(){
          $('#cusdatatable tr').click(function () {
            
            let id = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let address = $(this).children().eq(2).text();
            let salary = $(this).children().eq(3).text();
    
            console.log(id,name);
            customerid.innerText = id;
            cusnam.innerText = name;
            address.innerText = address;
            salary.innerText = salary;
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
