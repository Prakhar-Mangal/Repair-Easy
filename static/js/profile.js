function verify() {
    if (getStorage('uid')) {
        obj = dashboard();
        getDetails(obj)
    }
    else {
        window.location.href = "index.html"
    }
}


function getDetails(obj) {
    document.getElementById('name').value = obj.user.company.name
    document.getElementById('adds').value = obj.user.company.address
    document.getElementById('email').value = obj.user.company.email
    document.getElementById('number').value = obj.user.company.contactNumber
    document.getElementById('number').disabled = true

}

function update() {
    obj = getStorage('uid')
    if (obj) {
        const sendData = {
            _id: obj.companyId,
            email: document.getElementById('email').value,
            name:  document.getElementById('name').value,
            contactNumber:  document.getElementById('number').value,
            address: document.getElementById('adds').value
        }
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = obj.w_auth;
        axios.post(`${url}/company/update`, sendData)
            .then((res) => {
                console.log(res);
                removeStorage('uid');
                // window.location.reload()
                route('/login')
            })
            .catch(e=>{
                console.log(e)
            })
    }
    else {
        window.location.href = "index.html"

    }
}