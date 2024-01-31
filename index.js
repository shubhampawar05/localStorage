let userArray=[];

if(localStorage.length == 0){
    let Firstname = prompt('Enter your First name');
    let Lastname = prompt('Enter your Last name');
    let country = prompt('Enter your Country');
    let phoneNo = prompt('Enter your Mobile No.');
    let state = prompt('Enter your state');
    let city = prompt('Enter your city');
    let village = prompt('Enter your village');
    
    
    let fname = document.getElementById('fName');
    let lastName = document.getElementById('lname');
    let countryyy = document.getElementById('country');
    let phoneno = document.getElementById('phoneNo');
    let stateee = document.getElementById('State');
    let cityyy = document.getElementById('City');
    let villageee = document.getElementById('Village');
    
    
    fname.innerText = Firstname;
    lastName.innerText = Lastname;
    countryyy.innerText = country;
    phoneno.innerText = phoneNo;
    stateee.innerText = state;
    cityyy.innerText = city;
    villageee.innerText = village;
    
    
    
    
   
    let userinfo = {
        'id':Number(new Date),
        "Firstname":Firstname,
        'Lastname':Lastname,
        'country':country,
        'phoneNo':phoneNo,
        'state': state,
        'city':city,
        'village':village
    }
    userArray.push(userinfo)
    let userString = JSON.stringify(userArray);
    // console.log(userString);
    localStorage.setItem('key' , userString)
}else{
   let stringyArray =  JSON.parse( localStorage.getItem('key'));
  console.log(stringyArray);
  let fname = document.getElementById('fName');
    let lastName = document.getElementById('lname');
    let countryyy = document.getElementById('country');
    let phoneno = document.getElementById('phoneNo');
    let stateee = document.getElementById('State');
    let cityyy = document.getElementById('City');
    let villageee = document.getElementById('Village');
    
    
    fname.innerText = stringyArray[0].Firstname;
    lastName.innerText = stringyArray[0].Lastname;
    countryyy.innerText = stringyArray[0].country;
    phoneno.innerText = stringyArray[0].phoneNo;
    stateee.innerText = stringyArray[0].state;
    cityyy.innerText = stringyArray[0].city;
    villageee.innerText = stringyArray[0].village;
    
  
};