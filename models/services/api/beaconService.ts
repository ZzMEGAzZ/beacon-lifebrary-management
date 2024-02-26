import {get,post,postForm,deleteRequest,put} from '@/controller/api'
import {parseJson} from '@/utils/parseJson'
import { addBeacon,updateBeaconName,updateBeaconPicture,addBeaconToEvent,removeBeaconFromEvent,updateBeaconLocation,deleteBeacon } from '@/models/types/dto/beaconDto'

// post
export async function postAddBeacon(params: addBeacon) {

    try {
        const response:any = await postForm(`add_beacon`, params,)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

export async function postUpdateBeaconName(params: updateBeaconName) {

    try {
        const response:any = await post(`update_beacon_name`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

export async function postUpdateBeaconPicture(params: updateBeaconPicture) {

    try {
        const response:any = await postForm(`update_beacon_pic`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

export async function postAddBeaconToEvent(params: addBeaconToEvent) {

    try {
        const response:any = await post(`add_beacon_to_event`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

export async function postRemoveBeaconFromEvent(params: removeBeaconFromEvent) {

    try {
        const response:any = await post(`remove_beacon_from_event`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

export async function postUpdateBeaconLocation(params: updateBeaconLocation) {

    try {
        const response:any = await post(`update_location_beacon_in_event`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

// postForm

//put

// get

// delete
export async function deleteDeleteBeacon(params: deleteBeacon) {

    try {
        const response:any = await deleteRequest(`delete_beacon`, params)
        const json:any = parseJson(response)
        return json
    } catch (ex) {
        return ex
    }
}

