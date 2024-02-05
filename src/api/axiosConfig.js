import axios from "axios";

export default axios.create({
    baseURL:'https://c09f-173-95-57-203.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning":"true"}
});