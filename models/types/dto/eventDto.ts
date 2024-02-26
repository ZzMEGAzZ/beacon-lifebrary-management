//post
export interface addEvent {
    event_name: string;
    start_date: string;
    end_date: string;
    event_details?: string;
    event_pic?: string;
}

export interface updateEventInfo {
    event_id: number;
    event_name?: string;
    start_date?: string;
    end_date?: string;
    event_details?: string;
}

export interface updateEventPicture {
    event_id: number;
    event_pic: string;
}

//put

//get
export interface getEventById {
    event_id: number;
}

//delete
export interface deleteEvent {
    event_id: number;
}