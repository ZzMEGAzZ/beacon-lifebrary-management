import {get,post,postForm,deleteRequest,put} from '@/controller/api'
import {parseJson} from '@/utils/parseJson'
import * as LineDto from '@/models/types/dto/lineServiceDto'

// post

// put

// get
export async function getLineProfile(params: LineDto.getLineProfile) {

    try {
        const response:any = await get(`get_line_profile`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

// delete
