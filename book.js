




function submitall() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var mobile = document.getElementById('mob').value;
    var add = document.getElementById('Adnum').value;
    var aad = document.getElementById('add').value;
    var date = document.getElementById('date').value;
    var reason = document.getElementById('reason').value;
    localStorage.setItem(1,name);
    localStorage.setItem(2,age);
    localStorage.setItem(3,mobile);
    localStorage.setItem(4,add);
    localStorage.setItem(5,aad);
    localStorage.setItem(6,date);
    localStorage.setItem(7,reason);
   

}

