//post 
export interface addBeacon {
    hwid: string;
    beacon_name: string;
    beacon_pic: string;
}

export interface updateBeaconName {
    hwid: string;
    beacon_name: string;
}

export interface updateBeaconPicture {
    hwid: string;
    beacon_pic: string;
}

export interface addBeaconToEvent {
    event_id: string;
    beacon_hwid: string;
    beacon_location: string;
}

export interface removeBeaconFromEvent {
    event_id: string;
    hwid: string;
}

export interface updateBeaconLocation {
    event_id: string;
    hwid: string;
    new_location: string;
}

//put

//get


//delete
export interface deleteBeacon {
    hwid: string;
}