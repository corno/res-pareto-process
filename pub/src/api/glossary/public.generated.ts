import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FCall = ($: mcommon.T.String,) => pt.AsyncValue<T.Result>