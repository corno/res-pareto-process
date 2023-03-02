import { API } from "./definition/api.generated"
import { $$ as icall } from "./implementations/call.native"

export const $r: API = {
    'call': icall,
}