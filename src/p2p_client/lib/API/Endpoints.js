import {API_VERSION} from '../Constants';

export const BASE_URL = `https://api.p2pquake.net/${API_VERSION}`;

export const QUAKE_LIST =  	        '/jma/quake';
export const QUAKE =        (id) => `/jma/quake/${id}`;
export const TSUNAMI_LIST =         '/jma/tsunami';
export const TSUNAMI =      (id) => `/jma/tsunami/${id}`;