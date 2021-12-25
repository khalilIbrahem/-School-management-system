import axios from 'axios';
 const httpClient= axios.create({
    baseURL:"https://localhost:44390",
});
function getAllStudent()
{
    return httpClient.get("/students");
}
export {getAllStudent}