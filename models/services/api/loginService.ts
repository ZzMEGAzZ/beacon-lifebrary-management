import {get,post,postForm,deleteRequest,put} from '@/controller/api'
import {parseJson} from '@/utils/parseJson'
import * as LoginDto from '@/models/types/dto/loginDto'

// post
export async function postLogin(params: LoginDto.login) {

    try {
        const response:any = await post(`login`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

export async function postRefreshToken(params: LoginDto.refreshToken) {

    try {
        const response:any = await post(`refresh_token`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

export async function postResetPassword(params: LoginDto.resetPassword) {

    try {
        const response:any = await post(`reset_password`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

// postForm

//put

//get

// delete