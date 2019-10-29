function verify() {
    if (getStorage('uid')) {
        obj = dashboard();
        getRequirments(obj)
    }
    else {
        window.location.href = "index.html"
    }
}

function getRequirments(obj) {
    axios.defaults.headers.common['w_auth'] = obj.w_auth;
    axios.get(`${url}/requirement/list`).then((res) => {
        console.log(res);
        res.data.map(d => {
            document.getElementById('lease-table').innerHTML += `  <tr>
            <th scope="row">${d.subcategory.name}</th>
            <td>${d.capacity}</td>
            <td>${d.location}</td>
            <td>${d.tenure}</td>
            <td>${d.pinCode}</td>
            <td>${ new Date(d.createdAt)
                    .toString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ") || "NO DATA"}</td>
            <td> <button onclick="deleteRquirments('${d._id}')" class="btn "style="color:red"> <i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>                                              
           
            </td>
            </tr>             
            
            `
        })


    })
}

function deleteRquirments(id) {
    obj = getStorage('uid')
    if (obj) {
        const sendData = { data: { _id: id } }
        axios.defaults.headers.common['w_auth'] = obj.w_auth;
        axios.delete(`${url}/requirement/delete`, sendData).then((res) => {
            console.log(res);
            alert("Requirment Deleted")
            window.location.reload();
        }).catch(e => {
            console.log(e)
        })
    }
    else {
        window.location.href = "index.html"

    }
}