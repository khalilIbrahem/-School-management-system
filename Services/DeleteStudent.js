import axios from 'axios';
 const httpClient= axios.create({
    baseURL:"https://localhost:44390",
});
function deleteStudent(id)
{
    return httpClient.delete(`/student/${id}`);
}
export {deleteStudent}