import axios from "axios";

const unsplash = axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID N3J43BJHoakj7eRa4QbWuAsCkZ18MoAjg4xxkjhhPN4",
      }
})

export default unsplash;