import axios from 'axios';
 const httpClient= axios.create({
    baseURL:"https://localhost:44390",
});
function getToken(email , password)
{
    return httpClient.post("/account/token",{email,password})
}
export { getToken}