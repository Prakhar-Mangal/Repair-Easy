function verify() {
    if (getStorage('uid')) {
        obj = dashboard();
        getEquipments(obj)
    }
    else {
        window.location.href = "index.html"
    }
}

function getEquipments(obj) {
    axios.defaults.headers.common['w_auth'] = obj.w_auth;
    axios.get(`${url}/equipment/list`).then((res) => {
        console.log(res.data);
        res.data.map((d, i) => {
            document.getElementById('lease-table').innerHTML += `  <tr>
                <th scope="row">${d.subcategory.name}</th>
                <td>${d.capacity}</td>
                <td>${d.location}</td>
                <td>${d.quantity}</td>
                <td>${d.pinCode}</td>
                <td> <button onclick="deleteEquipments('${d._id}')" class="btn "style="color:red"> <i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>                                              
               
                </td>
                </tr>             
                
                `
        })
    })
}
 function deleteEquipments(id){
    //  alert(id)
     obj=getStorage('uid')
     const sendData = { data: { _id: id } }
     axios.defaults.headers.common['w_auth'] = obj.w_auth;
        axios.delete(`${url}/equipment/delete`, sendData).then((res) => {
            console.log(res);
             alert("Equipment Deleted")
            window.location.reload()
            //route("/dash")
        })
        .catch(e=>{
            console.log(e)
        })
 }