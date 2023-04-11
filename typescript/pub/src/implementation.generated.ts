import { API } from "./api.generated"
import { $$ as icall } from "./implementations/call.native"

export const $api: API = {
    'call': icall,
}