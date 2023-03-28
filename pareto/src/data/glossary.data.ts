import * as pd from 'pareto-core-data'

import {
    string, member, taggedUnion, group,
    typeReference,
    data,
    type,
    optional,
    number,
    externalTypeReference,
    imp,
    ref,
    afunction,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Error": type(group({
                "stderr": member(string()),
                "exitCode": member(optional(number())),
            })),
            "Result": type(taggedUnion({
                "success": string(),
                "error": ref(typeReference("Error")),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Call": afunction(typeReference("Result"), externalTypeReference("common", "String")),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
}