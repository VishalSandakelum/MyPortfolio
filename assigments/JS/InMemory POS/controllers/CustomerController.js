        
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

        function getAllData(){
          for(i in customerAr){
            console.log(customerAr[i]);
            let custId = customerAr[i].cusId;
            let custnam = customerAr[i].name;
            let custnom = customerAr[i].cusnomber;
            let custsal = customerAr[i].cussalry;

            datarow(custId,custnam,custnom,custsal);
          }
        }

        //This Function For All Data Add Add To The Table
        function datarow(id,nam,nomb,sal){

          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const td3 = document.createElement("td");
          const td4 = document.createElement("td");

          td1.textContent = id;
          td2.textContent = nam;
          td3.textContent = nomb;
          td4.textContent = sal;

          $('#cusdatatable').addClass("table");
          tr.append(td1,td2,td3,td4);
          $('#cusdatatable').append(tr);
          document.querySelector("#cusdatatable").append(tr);

        }
