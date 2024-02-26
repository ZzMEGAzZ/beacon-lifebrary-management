import {get,post,postForm,deleteRequest,put} from '@/controller/api'
import {parseJson} from '@/utils/parseJson'
import { addUser,deleteUser } from '@/models/types/dto/userDto'

// post
export async function postAddUser(params: addUser) {

    try {
        const response:any = await postForm(`add_user`, params,)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

// put

// get

// delete
export async function deleteUser(params: deleteUser) {

    try {
        const response:any = await deleteRequest(`delete_user`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}