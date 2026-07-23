let form = document.querySelector("form");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this))//the make obj as this instead of form because when we create function this is reffering to form instead of obj
    },
    submitForm: function(e) {
        e.preventDefault();
        console.log("form submitted")
    },
    addUser: function () {},
    removeUser: function () {},
}

userManager.init();