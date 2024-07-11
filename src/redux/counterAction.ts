export type ActionCounter =
// | {type: 'counter/minus'} 
// | {type: 'counter/plus'}
// | {type: 'counter/minus10'} 
// | {type: 'counter/plus10'}
// { type: string, payload: any }
            //
// | {type: 'counter/minusX', payload: number} 
// | {type: 'counter/plusX', payload: number}

| {type: 'counter/changeX', payload: number}