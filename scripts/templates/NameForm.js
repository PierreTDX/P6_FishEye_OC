export default class NameForm {
    constructor(photographer) {
        this.photographer = photographer;
    };

    nameForm() {
        const formName = document.querySelector(".form_name");
        formName.textContent = this.photographer.name;
    }
};