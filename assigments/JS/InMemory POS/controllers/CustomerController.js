        
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
          newCustomer.nam = cusnam.value;
          newCustomer.cusnomber = address.value;
          newCustomer.cussalry = Salary.value;

          //Data Save
          customerAr.push(newCustomer);
          //Data Add For Table
          datarow();
          
        });


        function datarow(){

          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const td3 = document.createElement("td");
          const td4 = document.createElement("td");

          td1.textContent=cusnam.value;
          td2.textContent=cusId.value;
          td3.textContent=cusAddress.value;
          td4.textContent=cusSalary.value;

          tr.append(td1,td2,td3,td4);
          document.querySelector("#cusdatatable").append(tr);

        }


        //This Function For View All Customer
        viewallbtn.addEventListener("click",function(){
          getAllData();
        });

        function getAllData(){
          for(i in customerAr){
            console.log(customerAr[i]);
          }
        }