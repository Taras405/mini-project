import { Modal, Toast } from "bootstrap";
import createUsersMarkup from "../templates/users.hbs";
import refs from "./getrefs.js";
import * as api from "./service/crud_async.js";
import { getFormData, fillingForm } from "./service/form_service.js";

const myModal = new Modal(refs.modal);
const myToast = new Toast(refs.toast, {
  delay: 3000,
});

const showToast = (text) => {
  refs.toastText.textContent = text;
  myToast.show();
};

const handleError = (error) => {
  showToast(error.message);
};

const renderAllUsers = async () => {
  try {
    const users = await api.getUsers();
    refs.usersList.innerHTML = createUsersMarkup(users);

  } catch (error) {
    handleError(error);
  }
};

renderAllUsers()