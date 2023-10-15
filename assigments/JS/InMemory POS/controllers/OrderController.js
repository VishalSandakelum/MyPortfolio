let cusstate = document.querySelector('#cusstate');
let itmsatate = document.querySelector('#inputitmState');

cusstate.style.borderm = '2px solid red'

for (i in customerAr) {
    const option = document.createElement("option");
    option.text = customerAr[i].cusid;
    
    cusstate.appendChild(option);
}

for (i in item) {
    const option = document.createElement("option");
    option.text = item[i].itmcode;
    
    itmsatate.appendChild(option);
}

cusstate.addEventListener("change", function() {
    if(cusstate.value !== ''){
        for(i in customerAr){
            if(cusstate.value === customerAr[i].cusid){
                $('#cusIDfield').val(customerAr[i].cusid);
                $('#cusNameField').val(customerAr[i].name);
                $('#CusSalaryField').val(customerAr[i].cussalry);
                $('#CusNumberField').val(customerAr[i].cusnomber);
            }
        }
    }
});

itmsatate.addEventListener("change", function() {
    console.log(itmsatate.value !== '');
    if(itmsatate.value !== ''){
        for(i in item){
            if(itmsatate.value === item[i].itmcode){
                $('#itIdField').val(item[i].itmcode);
                $('#itemNamefield').val(item[i].itmname);
                $('#itemPriceField').val(item[i].itmprice);
                $('#qtyOnhandFieitm').val(item[i].itmqty);
            }
        }
    }
});