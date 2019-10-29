function login() {
    phone = document.getElementById("phone").value;
    if (!phone||phone.length!=10) {
        alert("Please Enter 10 digit phone number")
    }
    else{
    pass = document.getElementById("pass").value;
    axios.post(`${url}/company/login`, {
        contactNumber: phone,
        password: pass
    }).then((res) => {
        console.log(res.data.w_auth);
        if (res.data.loginSuccess) {
            axios.defaults.headers.common['w_auth'] = res.data.w_auth;
            console.log(res.data)
            setStorage("uid", res.data);
            window.location.href = "lease.html#lease"
        }
        if (res.data.message) {
            document.getElementById("login-modal").innerHTML = `
            <button id="attention-btn" hidden type="button" class="btn btn-primary" data-toggle="modal" data-target="#q1">
  Launch demo modal
</button>
            <div class="modal fade" id="q1" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Attention</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      ${res.data.message}<br>
      <strong>Call us at:- 7067117305</strong>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
document.getElementById('attention-btn').click()

        }

    });
  }
}