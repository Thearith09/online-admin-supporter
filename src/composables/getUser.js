// import { functions } from "../firebase/config";

// const addAdminRole = functions.httpsCallable("addAdminRole");
// const result = await addAdminRole({ email: "masterit.admin-supporter@gmail.com" })
// console.log(result);

import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
    user.value = _user;
});

const getUser = () => {
    return { user };
};

export default getUser;