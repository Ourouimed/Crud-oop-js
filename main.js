let Form = document.querySelector(".user-form form")
let firstName = document.querySelector("#firstName")
let LastName = document.querySelector("#LastName")
let StudId = document.querySelector("#StudId")
let birthDate= document.querySelector("#birthDate")
let tbody = document.querySelector(".users")
let UsersData;

class Users {
    constructor(firstName, LastName, Birth, id) {
        this.firstName = firstName
        this.LastName = LastName
        this.Birth = Birth
        this.id = id
    }

    CreateUser() {
        // Create Table divisions
        let FtName = document.createElement("td")
        let LtName = document.createElement("td")
        let StId = document.createElement("td")
        let Bd = document.createElement("td")

        // Create Actions buttons
        let update = document.createElement("button")
        update.id = "update"
        update.innerHTML = "Update"
        update.addEventListener("click", () => this.updateUser(tr))

        let Delete = document.createElement("button") 
        Delete.id = "delete"
        Delete.innerHTML = "Delete"
        Delete.addEventListener("click", () => this.RemoveUser(tr))

        let actions = document.createElement("td")
        actions.id = "actions"

        FtName.innerHTML = this.firstName
        LtName.innerHTML = this.LastName
        StId.innerHTML = this.id
        Bd.innerHTML = this.Birth
        actions.appendChild(update)
        actions.appendChild(Delete)

        // Create Table row
        let tr = document.createElement("tr")
        tr.appendChild(FtName)
        tr.appendChild(LtName)
        tr.appendChild(StId)
        tr.appendChild(Bd)
        tr.appendChild(actions)
        tbody.appendChild(tr)
    }

    RemoveUser(row) {
        tbody.removeChild(row)  
    }

    updateUser(row) {
        firstName.value = this.firstName
        LastName.value = this.LastName
        StudId.value = this.id
        birthDate.value = this.Birth
        this.RemoveUser(row)

    }
}

Form.addEventListener("submit", (e) => {
    e.preventDefault()
    let user = new Users(firstName.value, LastName.value, birthDate.value , StudId.value)
    user.CreateUser()
    firstName.value = LastName.value = StudId.value = birthDate.value = ""
})


