import { getResource } from "../Api/network";
import {ApiResponse , RequestBody , JobResponse} from './interfaces'
export function getUsers(path : string , success :  (data: JobResponse) => void , fail : (errorMessage: string) => void ){
    getResource(
        path ,
        success ,
        fail,
    )
}