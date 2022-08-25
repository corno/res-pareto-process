
import * as api from "api-pareto-process"
import { call } from "./call"

type API = {
    call: api.Call
}

export const $: API = {
    call: call,
}