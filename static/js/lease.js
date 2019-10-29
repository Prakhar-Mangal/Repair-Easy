function verify() {
    if (getStorage('uid')) {
        obj = dashboard();
        getLease(obj)
    }
    else {
        window.location.href = "index.html"
    }
}
function getLease(obj) {
    axios.defaults.headers.common['w_auth'] = obj.w_auth;
    axios.get(`${url}/requirement/recommendedList`).then((res) => {
        console.log(res);
        document.getElementById('lease-table').innerHTML = ""
        res.data.map((d, i) => {
            document.getElementById('lease-table').innerHTML += `  <tr>
                <th scope="row">${d.subcategory.name}</th>
                <td>${d.tenure}</td>
                <td>${d.location}</td>
                <td><button style="font-size: calc(0.5em + 1vw) !important;" type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal${i}">
                Details
              </button></td>
                </tr>
               
                
                `
        })
        res.data.map((d, i) => {
            document.getElementById('lease-modals').innerHTML +=

        ` <div class="modal fade" id="modal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <table class=" ed-table">
                                      <thead>
                                          <tr>
                                              <th>Equipment Name</th>
                                              <th>Capacity</th>
                                              <th>Tenure</th>
                                          </tr>
                                      </thead> <tbody>
      
                                          <tr>
                                              <td>${ d.subcategory.name }</td>
                                              <td>${ d.capacity  }</td>
                                              <td>${ d.tenure }</td>
                                          </tr>
      
                                      </tbody>
                                  </table>
                                  <br />
                                  <table class="  ed-table">
                                      <thead>
                                          <tr>
                                              <th>Company Name</th>
                                              <th>Contact Person</th>
                                              <th>Contact Number</th>
                                              <th>E-mail</th>
                                          </tr>
                                      </thead> <tbody>
      
                                          <tr>
                                              <td>${  d.company.name }</td>
                                              <td>${ d.company.contactPerson }</td>
                                              <td><a href= tel:${ d.company.contactNumber } >${ d.company.contactNumber }</a></td>
                                              <td>${ d.company.email }</td>
                                          </tr>
      
                                      </tbody>
                                  </table>
                                  <br />
                                  <table class="  ed-table">
                                      <thead>
                                          <tr>
                                              <th>City</th>
                                              <th>Pincode</th>
                                              <th>Date Of Creation</th>
                                          </tr>
                                      </thead> <tbody>
      
                                          <tr>
                                              <td>${ d.company.city }</td>
                                              <td>${ d.pinCode }</td>
                                              <td>${ new Date(d.company.createdAt)
                                                  .toString()
                                                  .split(" ")
                                                  .slice(0, 4)
                                                  .join(" ") || "NO DATA" }</td>
                                          </tr>
      
                                      </tbody>
                                  </table>
            </div>
            <div class="modal-footer">
              <button  style="font-size: calc(0.5em + 1vw) !important;" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`
                                              })


    }).catch(e => { console.log(e) })
}
