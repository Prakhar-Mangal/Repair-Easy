// const url = "http://ec2-34-245-168-207.eu-west-1.compute.amazonaws.com:3003"
// const url = "https://yantra123.herokuapp.com"
// const url = "http://ec2-18-219-2-225.us-east-2.compute.amazonaws.com:3003"


const url = "http://ec2-34-243-4-177.eu-west-1.compute.amazonaws.com:3002"

const getStorage = (item) => (JSON.parse(localStorage.getItem(item)))

const setStorage = (item, data) => (localStorage.setItem(item, JSON.stringify(data)))

const removeStorage = (item) => (localStorage.removeItem(item))

const route = (loc) => (window.location = `http://${window.location.hostname}:${window.location.port}${loc}`)

function dashboard() {
    obj = getStorage('uid')
    contactNumber = obj.user.contactNumber
    name = obj.user.name
    cname = obj.user.company.name

    document.getElementById('dashboard').innerHTML = `<nav class="navbar navbar-light bg-light">
   <a class="navbar-brand"  style="font-size:calc(.5em + 1vh)"href="#">
     <img src="img/logo.png" width="50" height="30" class="d-inline-block align-top"
       alt="">
       ${cname}
   </a>
   <div class="col-md-2 col-sm-12">
      ${name}
   </div>
   <div class="col-md-2 col-sm-12">
       ${contactNumber}
     </div>
     
 </nav>`

    return obj

}


function logout(){
  removeStorage('uid')
  window.location.href="index.html"
}