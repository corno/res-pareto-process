import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TError = t.UError

export type TResult = t.UResult

export type FCall = ($: mcommon.TString,) => pt.AsyncValue<TResult>