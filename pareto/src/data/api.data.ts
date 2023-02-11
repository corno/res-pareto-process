import * as pr from 'pareto-core-raw'
import {
    string,
    reference,
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method,
    number, dictionary, group, member, taggedUnion, types, func, data, type, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "Error": type(group({
                "stderr": member(string()),
                "exitCode": member(optional(number())),
            })),
            "Result": type(taggedUnion({
                "success": string(),
                "error": reference("Error")
            })),
        }),
        'interfaces': d({
        }),
        'functions': d({
            "Call": func(typeReference("common", "String"), null, null, data(typeReference("Result"), true)),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "call": algorithm(definitionReference("Call")),
        })
    },
}