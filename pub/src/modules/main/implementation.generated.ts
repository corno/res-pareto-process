import { API } from "./api"
import { $$ as icall } from "./implementations/call.native"

export const $a: API = {
    'call': icall,
}