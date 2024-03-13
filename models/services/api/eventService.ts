import { get, post, postForm, deleteRequest, put } from '@/controller/api';
import { parseJson } from '@/utils/parseJson';
import * as EventDto from '@/models/types/dto/eventDto'


// post
export async function postAddEvent(params: EventDto.addEvent) {
    try {
        const response: any = await postForm(`add_event`, params);
        const json: any = parseJson(response);
        return json;
    } catch (ex) {
        return ex;
    }
}

export async function postUpdateEventInfo(params: EventDto.updateEventInfo) {
    try {
        const response: any = await post(`update_event_info`, params);
        const json: any = parseJson(response);
        return json;
    } catch (ex) {
        return ex;
    }
}

export async function postUpdateEventPicture(params: EventDto.updateEventPicture) {
    try {
        const response: any = await postForm(`update_event_pic`, params);
        const json: any = parseJson(response);
        return json;
    } catch (ex) {
        return ex;
    }
}

// put

// get
export async function getEventById(params: EventDto.getEventById) {
    try {
        const response: any = await get(`get_event_by_id`, params);
        const json: any = parseJson(response);
        return json;
    } catch (ex) {
        return ex;
    }
}

// delete
export async function deleteEvent(params: EventDto.deleteEvent) {
    try {
        const response: any = await deleteRequest(`delete_event`, params);
        const json: any = parseJson(response);
        return json;
    } catch (ex) {
        return ex;
    }
}
