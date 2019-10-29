function verify() {
    if (getStorage('uid')) {
        obj = dashboard();
        getCategory(obj)
    }
    else {
        window.location.href = "index.html"
    }
}

function getCategory(obj) {
    axios.defaults.headers.common['w_auth'] = obj.w_auth;

    axios.get(`${url}/subcategory/list`).then((res) => {
        console.log(res.data);
        res.data.map(d => {
            document.getElementById("category").innerHTML +=
                `                                <option value=${d.id}>${d.name}</option>
            `
        })

    })
}


function addEquipment() {
    obj = getStorage('uid')
    if (obj) {
        category = document.getElementById('category').value
        loc = document.getElementById('loc').value
        capacity = document.getElementById('capacity').value
        quantity = document.getElementById('quantity').value
        pin = document.getElementById('pin').value
        unit = document.getElementById('unit').value
        // alert(category + loc + capacity + quantity + pin + unit)


        const sendData =
        {
            subcategory: category,
            company: obj.companyId,
            equipmentStatus: "1",
            location:loc,
            pinCode: pin,
            quantity: quantity,
            capacity: capacity,
            unit: unit
        }
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = obj.w_auth;
        axios.post(`${url}/equipment/save`, sendData)
            .then((res) => {
                console.log(res);
                // alert("Equipment Added")
                alert("Equipment added")
                //route("/dash")
                window.location.reload();
            })
            .catch(e=>{
                console.log(e)
            })


    }
    else {
        // window.location.href = "index.html"
    }
}