import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    adata,
    afunc,
    type,
    optional,
    number,
    externalTypeReference,
    imp,
    ref,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
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
    'type': ['asynchronous', {
        'interfaces': d({
        }),
        'functions': d({
            "Call": afunc(externalTypeReference("common", "String"), null, adata(typeReference("Result"))),
        }),
    }],
}