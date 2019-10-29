function verify() {
    if (getStorage('uid')) {
        obj = dashboard();
    }
    else {
        window.location.href = "index.html"
    }
}


function sendFedback() {
    obj = getStorage('uid')
    if (obj) {
        const sendData = {
            comment: document.getElementById('feedback').value,
            company: obj.companyId,
            companyName: obj.user.company.name
        }
        console.log(sendData);
        axios.defaults.headers.common['w_auth'] = this.state.data.w_auth;
        axios.post(`${url}/feedback/save`, sendData).then((res) => {
            console.log(res);
            window.location.href = "lease.html"
            route("/dash")
        })
            .catch(e => {
                console.log(e)
            })

    }
    else {
        window.location.href = "index.html"
    }
}