export type ActionSandwich =
| {type: 'sandwich/addIngredient', payload: 'bread' | 'cheese' | 'salami' | 'salad' | 'sauce' }
| {type: 'sandwich/deleteAll'}


// | {type: 'sandwich/bread', payload: string} 
// | {type: 'sandwich/cheese', payload: string} 
// | {type: 'sandwich/salami', payload: string} 


// | {type: 'counter/plus'}
// | {type: 'counter/minus10'} 
// | {type: 'counter/plus10'}
// { type: string, payload: any }
            //
// | {type: 'counter/minusX', payload: number} 
// | {type: 'counter/plusX', payload: number}

// | {type: 'counter/changeX', payload: number}