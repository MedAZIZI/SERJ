import axios from "axios";


export default axios.create({
  baseURL: "https://projet-serj.onrender.com",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + localStorage.getItem('userToken'), // Ajoutez le token dans l'en-tête
  }
});
