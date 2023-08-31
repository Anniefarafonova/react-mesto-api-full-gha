import { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContextt/CurrentUserContext";

export default function FormValidation() {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

}