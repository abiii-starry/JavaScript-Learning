function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.setAdmin = setAdmin;
    this.checkAdmin = checkAdmin;
}

function setAdmin() {
    this.isAdmin = true;
}

function checkAdmin() {
    if (this.isAdmin) {
        console.log("I am Admin");
    } else {
        console.log("I am not Admin");
    }
}

let userAbi = new User("abi");

userAbi.checkAdmin();
userAbi.setAdmin();
userAbi.checkAdmin();