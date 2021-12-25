import axios from 'axios';
 const httpClient= axios.create({
    baseURL:"https://localhost:44390",
});
function create(firstName,lastName,birthdate,age,classid)
{
    return httpClient.put("/students",{firstName,lastName,birthdate,age,classid});
}
export { create}