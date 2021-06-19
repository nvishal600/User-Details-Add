const icon = document.querySelector('.icon')
const search = document.querySelector('.search')
const ip = document.querySelector('input')





icon.addEventListener('click', function () {


   if (search.classList.contains('active')) {
      search.classList.remove('active')
   }
   else {
      search.classList.add('active')
   }
})




const wrapper = document.querySelector(".wrapper");
const image = document.querySelector(".image");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");

const profilePicture = document.querySelector("#profilePicture");

let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive() {
   defaultBtn.click();
}
defaultBtn.addEventListener("change", function () {
   const file = this.files[0];
   if (file) {
      const reader = new FileReader();
      reader.onload = function () {
         const result = reader.result;
         profilePicture.src = result;
         image.style.visibility = "visible";
      }


      reader.readAsDataURL(file);
   }

});







// form validation
const myform = document.getElementById("myform");
const userName = document.getElementById("userName");
const default_btn = document.getElementById("default-btn");

// regular expression
usernameReg = /^[a-zA-Z]{10,50}$/;
emailReg = /^([A-Za-z.]{4,50})([0-9]{2,4})([@]{1})([a-z]{4,10})([.]{1})([a-z]{2,6})$/;
fnameReg = /^[a-zA-Z]{4,50}$/;
lnameReg = /^[a-zA-Z]{6,80}$/;


var validExt = ["jpg", "png", "jpeg"];

myform.addEventListener("submit", function (e) {
   e.preventDefault();

   if (userName.value != "" || email.value != "" || fname.value != "" || lname.value != "" || role.value != "role" || default_btn.value != "") {

      if (usernameReg.test(userName.value)) {
         usernameError.innerText = "";
         if (emailReg.test(email.value)) {
            emailError.innerText = "";

            if (fnameReg.test(fname.value)) {
               firstError.innerText = "";
               if (lnameReg.test(lname.value)) {
                  lastError.innerText = "";
                  if (role.value != "role") {
                     roleError.innerText = "";
                     //image validation
                     imageValidation();
                    

                  }
               }
               else {
                  lastError.innerText = "Please enter the valid last name";
               }
            }
            else {
               firstError.innerText = "Please enter the valid first name";
            }
         }
         else {
            emailError.innerText = "Please enter the correct email ";
         }
      }
      else {
         usernameError.innerText = "Please enter the correct username ";
      }

   }
   else {
      alert("image field is required")
      usernameError.innerText = "Username field is required ";
      emailError.innerText = "email field is required";
      firstError.innerText = "First name field is required";
      lastError.innerText = "Last name field is required";
      roleError.innerText = "Role field is required";
   }



})




//image validation
function imageValidation() {
   if (default_btn.value != "") {
      var pos_of_dot = default_btn.value.lastIndexOf('.') + 1;
      var img_ext = default_btn.value.substring(pos_of_dot);

      var result = validExt.includes(img_ext)
      if (result == false) {
         alert("selected file is not an image.....");
      }
      else {
         if (parseFloat((default_btn.files[0].size) / 1024) <= 5) {

            alert("are you sure");
            storeData();
            const userTable = document.getElementById("userTable")
            var row = userTable.insertRow(-1);
            row.insertCell(0).textContent = fname.value +" "+ lname.value;
            row.insertCell(1).textContent = role.value;
            row.insertCell(2).innerHTML = `<a href="#"><i class="fas fa-edit"></i></a>`;
            
            userName.value = "";
            lname.value = "";
            fname.value = "";
            email.value = "";
            image.style.visibility = "hidden";
            role.value = "role";
            


         }
         else {
            alert("File size must be smaller than 1 kb");
         }
      }
   }
   else {
      alert("No Image is selected....");
   }
}



cancel.addEventListener("click", function (e) {
   userName.value = "";
   email.value = "";
   fname.value = "";
   lname.value = "";

})

//local storage in data store
let allUserDetails =[];
if( localStorage.getItem("userDetails") != "")
{
    allUserDetails= JSON.parse(localStorage.getItem("userDetails"));
}
function storeData(){
   const allComment ={}
   allComment.username = userName.value;
   allComment.email = email.value;
   allComment.fname = fname.value;
   allComment.lname = lname.value;
   allComment.role = role.value;
   
   allUserDetails.push(allComment);

   localStorage.setItem("userDetails",JSON.stringify(allUserDetails))
}








































